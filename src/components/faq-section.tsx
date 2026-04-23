import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "С какого возраста можно играть?",
      answer:
        "Family Quest рассчитан на детей от 6 лет и старше. В наборе есть специальные карточки для малышей — более простые вопросы и задания, чтобы никто не чувствовал себя обделённым.",
    },
    {
      question: "Сколько человек может играть одновременно?",
      answer:
        "От 2 до 8 игроков. Можно играть индивидуально или командами. Оптимально — 4–6 участников, но и вдвоём очень весело!",
    },
    {
      question: "Сколько длится одна партия?",
      answer:
        "Стандартная партия занимает 30–60 минут. Правила позволяют гибко настраивать продолжительность — можно сыграть быстрый раунд на 20 минут или растянуть удовольствие на весь вечер.",
    },
    {
      question: "Не надоедает ли играть несколько раз?",
      answer:
        "В наборе более 300 уникальных карточек — их хватит надолго. А поскольку каждый раз участники разные и настроение другое, каждая партия ощущается по-новому.",
    },
    {
      question: "Можно ли дарить игру?",
      answer:
        "Отличный вопрос! Family Quest — один из самых популярных подарков для семей, на день рождения, Новый год или просто так. Красивая коробка и яркое оформление сделают подарок запоминающимся.",
    },
    {
      question: "Как быстро доставляете?",
      answer:
        "Доставляем по всей России. Срок доставки — 2–7 рабочих дней в зависимости от региона. Возможен самовывоз в Москве.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что вы хотели знать о Family Quest перед покупкой.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
