import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Ольга Смирнова",
    role: "Мама троих детей, Москва",
    avatar: "/professional-woman-scientist.png",
    content:
      "Наконец-то нашла игру, в которую с удовольствием играют и 7-летняя дочка, и папа! Каждую пятницу теперь — игровой вечер.",
  },
  {
    name: "Андрей Петров",
    role: "Отец семейства, Санкт-Петербург",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Купил как подарок на день рождения бабушке — в итоге все четыре поколения сидели за столом до полуночи. Рекомендую!",
  },
  {
    name: "Марина Козлова",
    role: "Учитель начальной школы, Казань",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Использую на классных часах — дети в восторге. Вопросы подобраны идеально: интересно и взрослым, и детям.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Семьи уже играют</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тысячи семей по всей России выбрали Family Quest для своих вечеров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
