import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Для всей семьи",
    description: "Продумана для игроков от 6 до 99 лет — простые правила, которые освоит каждый за 5 минут.",
    icon: "family",
    badge: "6+",
  },
  {
    title: "Командная игра",
    description: "Никто не остаётся в стороне: все участвуют, помогают друг другу и радуются победе вместе.",
    icon: "team",
    badge: "Вместе",
  },
  {
    title: "Весёлые задания",
    description: "Более 300 уникальных карточек с вопросами, загадками и творческими заданиями на разные темы.",
    icon: "cards",
    badge: "300+ карт",
  },
  {
    title: "Живое общение",
    description: "Никаких экранов! Игра возвращает семью за один стол и дарит по-настоящему тёплые вечера.",
    icon: "talk",
    badge: "Офлайн",
  },
  {
    title: "Реиграбельность",
    description: "Каждая партия уникальна — разные карточки, разные ситуации, разные победители. Не надоедает!",
    icon: "repeat",
    badge: "Каждый раз ново",
  },
  {
    title: "Красивое издание",
    description: "Плотные карточки, яркое оформление и удобная коробка — отличный подарок для любого случая.",
    icon: "gift",
    badge: "Подарок",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему семьи выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Family Quest — это не просто игра, это повод собраться вместе и провести время по-настоящему
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "family" && "👨‍👩‍👧‍👦"}
                    {feature.icon === "team" && "🤝"}
                    {feature.icon === "cards" && "🃏"}
                    {feature.icon === "talk" && "💬"}
                    {feature.icon === "repeat" && "🔄"}
                    {feature.icon === "gift" && "🎁"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
