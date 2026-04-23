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

export function GameShowcaseSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Как выглядит игра</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Яркая коробка с весёлыми персонажами-пчёлами — сразу понятно, что внутри настоящее семейное веселье
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
                  className="w-full object-contain transition-opacity duration-500"
                />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
                  <p className="text-white text-sm font-medium">{slides[current].caption}</p>
                </div>
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-orange-500/40 text-white flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-200 z-10"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-orange-500/40 text-white flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-200 z-10"
              >
                ›
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      i === current ? "bg-orange-500 w-6" : "bg-gray-600 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                🐝
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Семья пчёл Медоловых</h3>
                <p className="text-gray-400 leading-relaxed">
                  Весёлые персонажи на коробке — целая пчелиная семья: дедушка, мама, папа и малыш. Каждый найдёт своего любимца!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                📦
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Компактная и удобная</h3>
                <p className="text-gray-400 leading-relaxed">
                  Небольшая коробка легко помещается в сумку — берите в гости, на дачу или в путешествие.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                🍯
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Стильное оформление</h3>
                <p className="text-gray-400 leading-relaxed">
                  Тёплый янтарный дизайн с мёдом и деревом — коробка выглядит как отличный подарок ещё до открытия.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                🎴
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Всё включено</h3>
                <p className="text-gray-400 leading-relaxed">
                  Внутри коробки всё необходимое для игры: карточки, правила и инструкция — можно начинать сразу.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}