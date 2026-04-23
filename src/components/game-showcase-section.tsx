import { useState } from "react"

const slides = [
  {
    src: "https://cdn.poehali.dev/projects/2b4c61f6-a77c-4558-a316-a67c58970bb6/bucket/909d7795-0150-4928-8a95-5d9b599225e6.jpg",
    alt: "Коробка игры Медолов",
    caption: "Яркая коробка с семьёй пчёл",
  },
  {
    src: "https://cdn.poehali.dev/projects/2b4c61f6-a77c-4558-a316-a67c58970bb6/bucket/52c6de80-a908-44bd-bfd9-c61b1ea8d41d.jpg",
    alt: "Коробка и карточки Медолов",
    caption: "Коробка, карточки и жетоны",
  },
  {
    src: "https://cdn.poehali.dev/projects/2b4c61f6-a77c-4558-a316-a67c58970bb6/bucket/4a6aac4f-9378-4065-93b8-bea01320634d.jpg",
    alt: "Содержимое набора Медолов",
    caption: "Всё включено — начинайте сразу",
  },
  {
    src: "https://cdn.poehali.dev/projects/2b4c61f6-a77c-4558-a316-a67c58970bb6/bucket/1894f2b5-49ca-4b15-a290-537a22237a5e.jpg",
    alt: "Карточки Медолов крупным планом",
    caption: "Карточки с весёлыми персонажами",
  },
]

const details = [
  {
    icon: "🐝",
    title: "Семья пчёл Медоловых",
    description: "Весёлые персонажи на коробке — целая пчелиная семья: дедушка, мама, папа и малыш. Каждый найдёт своего любимца!",
    slide: 0,
  },
  {
    icon: "📦",
    title: "Компактная и удобная",
    description: "Небольшая коробка легко помещается в сумку — берите в гости, на дачу или в путешествие.",
    slide: 1,
  },
  {
    icon: "🍯",
    title: "Стильное оформление",
    description: "Тёплый янтарный дизайн с мёдом и деревом — коробка выглядит как отличный подарок ещё до открытия.",
    slide: 2,
  },
  {
    icon: "🎴",
    title: "Всё включено",
    description: "Внутри коробки всё необходимое для игры: карточки, правила и инструкция — можно начинать сразу.",
    slide: 3,
  },
]

export function GameShowcaseSection() {
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  const handleDetailHover = (index: number) => {
    setHovered(index)
    setCurrent(details[index].slide)
  }

  const handleDetailLeave = () => {
    setHovered(null)
  }

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Как выглядит игра</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Наведите на пункты справа — и увидите каждую деталь игры
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Slider */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 via-yellow-500/20 to-transparent rounded-3xl blur-2xl pointer-events-none" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/20">
                <img
                  key={current}
                  src={slides[current].src}
                  alt={slides[current].alt}
                  className="w-full object-contain transition-all duration-500"
                />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
                  <p className="text-white text-sm font-medium">{slides[current].caption}</p>
                </div>
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-orange-500/40 text-white flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-200 z-10 text-xl"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-orange-500/40 text-white flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-200 z-10 text-xl"
              >
                ›
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-orange-500 w-6" : "bg-gray-600 hover:bg-gray-400 w-2.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-4">
            {details.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleDetailHover(index)}
                onMouseLeave={handleDetailLeave}
                className={`flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  hovered === index || (hovered === null && current === item.slide)
                    ? "bg-orange-500/15 border-orange-500/50 scale-[1.02] shadow-lg shadow-orange-500/10"
                    : "bg-transparent border-transparent hover:border-orange-500/20"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-300 ${
                  hovered === index
                    ? "bg-orange-500/40 border border-orange-500/60 scale-110"
                    : "bg-orange-500/20 border border-orange-500/30"
                }`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    hovered === index ? "text-orange-400" : "text-white"
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    hovered === index ? "text-gray-300" : "text-gray-400"
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
