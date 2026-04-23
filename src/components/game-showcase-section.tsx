export function GameShowcaseSection() {
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
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 via-yellow-500/20 to-transparent rounded-3xl blur-2xl" />
              <img
                src="https://cdn.poehali.dev/projects/2b4c61f6-a77c-4558-a316-a67c58970bb6/bucket/909d7795-0150-4928-8a95-5d9b599225e6.jpg"
                alt="Коробка игры Медолов"
                className="relative w-full max-w-sm lg:max-w-md rounded-3xl shadow-2xl shadow-orange-500/20 hover:scale-105 transition-transform duration-500"
              />
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
