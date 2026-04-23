import { Button } from "@/components/ui/button"

const shops = [
  {
    name: "OZON",
    href: "#",
    bg: "bg-blue-600 hover:bg-blue-500",
    text: "text-white",
    emoji: "🔵",
  },
  {
    name: "ЯНДЕКС МАРКЕТ",
    href: "#",
    bg: "bg-yellow-400 hover:bg-yellow-300",
    text: "text-gray-900",
    emoji: "🟡",
  },
  {
    name: "WILDBERRIES",
    href: "#",
    bg: "bg-purple-600 hover:bg-purple-500",
    text: "text-white",
    emoji: "🟣",
  },
]

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Подарите семье особый вечер</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Тысячи семей уже играют в Медолов по пятницам. Присоединяйтесь — первая партия
            навсегда изменит ваш взгляд на семейный досуг.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            {shops.map((shop) => (
              <a key={shop.name} href={shop.href} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className={`${shop.bg} ${shop.text} text-base font-bold px-8 py-6 rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl border-0 w-full sm:w-auto`}
                >
                  <span className="mr-2 text-xl">{shop.emoji}</span>
                  {shop.name}
                </Button>
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">Выберите удобный магазин для заказа</p>
        </div>
      </div>
    </section>
  )
}
