export function TechnologySection() {
  const examples = [
    { emoji: "📱", label: "TikTok и YouTube", desc: "Подбирают видео под твои интересы" },
    { emoji: "🎙️", label: "Голосовые помощники", desc: "Siri, Алиса, Google — отвечают на вопросы" },
    { emoji: "🤖", label: "ChatGPT", desc: "Разговаривает и объясняет как человек" },
    { emoji: "📸", label: "Фильтры в камере", desc: "Распознают лица и делают эффекты" },
    { emoji: "🗺️", label: "Навигаторы", desc: "Прогнозируют пробки и строят маршруты" },
    { emoji: "🛒", label: "Интернет-магазины", desc: "Рекомендуют товары, которые понравятся" },
  ]

  return (
    <section id="technology" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Что такое ИИ?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-space-mono">
            Искусственный интеллект — это программа, которая <span className="text-red-400 font-semibold">учится на примерах</span>, а не просто выполняет жёсткие правила.
          </p>
        </div>

        {/* Простое объяснение */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 border border-red-500/20 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-white font-orbitron font-bold text-lg mb-3">1. Учится</h3>
            <p className="text-gray-400 font-space-mono text-sm leading-relaxed">
              ИИ смотрит на миллионы примеров — фото, тексты, разговоры — и ищет в них закономерности
            </p>
          </div>
          <div className="bg-white/5 border border-red-500/20 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-4">🧩</div>
            <h3 className="text-white font-orbitron font-bold text-lg mb-3">2. Запоминает</h3>
            <p className="text-gray-400 font-space-mono text-sm leading-relaxed">
              Внутри ИИ — миллиарды числовых связей, которые хранят «знания» о мире
            </p>
          </div>
          <div className="bg-white/5 border border-red-500/20 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-white font-orbitron font-bold text-lg mb-3">3. Предсказывает</h3>
            <p className="text-gray-400 font-space-mono text-sm leading-relaxed">
              Когда ты задаёшь вопрос — ИИ угадывает самый подходящий ответ на основе опыта
            </p>
          </div>
        </div>

        {/* Примеры вокруг нас */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-orbitron">ИИ уже вокруг тебя</h3>
          <p className="text-gray-400 mt-2 font-space-mono">Ты используешь его каждый день, даже не замечая</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {examples.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-red-500/10 hover:border-red-500/40 rounded-xl p-5 flex items-start gap-4 transition-all duration-300"
            >
              <span className="text-3xl flex-shrink-0">{item.emoji}</span>
              <div>
                <p className="text-white font-semibold font-orbitron text-sm">{item.label}</p>
                <p className="text-gray-400 font-space-mono text-xs mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Аналогия */}
        <div className="mt-12 bg-red-500/10 border border-red-500/30 rounded-2xl p-8 text-center">
          <p className="text-white text-lg md:text-xl font-space-mono leading-relaxed">
            💡 <span className="text-red-400 font-bold">Простая аналогия:</span> ИИ — как очень внимательный студент,
            который прочитал все книги мира и теперь отвечает на вопросы. Он не «думает» как человек,
            но умеет находить нужный ответ очень быстро.
          </p>
        </div>
      </div>
    </section>
  )
}
