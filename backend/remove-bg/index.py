import boto3
import os
import requests
from PIL import Image
from io import BytesIO

def handler(event: dict, context) -> dict:
    """Скачивает изображение по URL, убирает белый фон и сохраняет PNG в S3."""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    image_url = "https://cdn.poehali.dev/projects/2b4c61f6-a77c-4558-a316-a67c58970bb6/bucket/0c641a2f-3623-44af-a893-b85f8dcfaa5b.jpg"

    response = requests.get(image_url)
    img = Image.open(BytesIO(response.content)).convert("RGBA")

    datas = img.getdata()
    new_data = []
    threshold = 240

    for item in datas:
        r, g, b, a = item
        if r > threshold and g > threshold and b > threshold:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)

    output = BytesIO()
    img.save(output, format='PNG')
    output.seek(0)

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )
    s3.put_object(
        Bucket='files',
        Key='logos/medolov-logo.png',
        Body=output.read(),
        ContentType='image/png'
    )

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/logos/medolov-logo.png"

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': f'{{"url": "{cdn_url}"}}'
    }
