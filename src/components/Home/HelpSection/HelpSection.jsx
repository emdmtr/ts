import "./HelpSection.css";

export default function HelpSection() {
  return (
    <section className="help-section">
      <h2 className="help-title">Як ми допомагаємо?</h2>
      <div className="cards-fan">
        <div className="help-card card-1">
          <div className="card-content">
            <h3>🤝 Статті з порадами від психологів</h3>
            <p>
              Короткі та зрозумілі матеріали від фахівців про тривогу, стрес,
              самооцінку та стосунки.
            </p>
            <p>Практичні поради й вправи, які можна застосувати одразу.</p>
          </div>
          <div className="card-footer">✨ Підтримка, яка завжди поруч.</div>
        </div>

        <div className="help-card card-2">
          <div className="card-content">
            <h3>🌱 Практичні вправи</h3>
            <p>
              Ця секція допомагає знайти хвилинку для себе та відновити
              внутрішній баланс.
            </p>
            <p>
              Тут зібрані легкі та ефективні техніки, які можна виконувати
              будь-де.
            </p>
          </div>
          <div className="card-footer">
            🌸 Поверни баланс і внутрішній спокій.
          </div>
        </div>

        <div className="help-card card-3">
          <div className="card-content">
            <h3>🎬 Підтримка через музику та кініматограф</h3>
            <p>
              Фільми, мультфільми й треки, що підтримують у складні моменти.
            </p>
            <p>Під кожним матеріалом — коротке пояснення:</p>
            <div className="custom-list">
              <div>💛 на що звернути увагу</div>
              <div>🧠 яку емоцію він допоможе прожити</div>
              <div>🌱 чим може бути корисним саме тобі</div>
            </div>
          </div>
        </div>

        <div className="help-card card-4">
          <div className="card-content">
            <h3>🤫 Анонімний чат</h3>
            <p>
              Безпечне місце, де можна написати про все, що турбує. Без страху,
              що хтось дізнається.
            </p>
            <p>Спілкування з консультантом або волонтером у реальному часі.</p>
          </div>
          <div className="card-footer">
            🔒 Твоя безпека та конфіденційність — пріоритет.
          </div>
        </div>

        <div className="help-card card-5">
          <div className="card-content">
            <h3>📅 Щоденник настрою</h3>
            <p>Відстежуй свій стан, емоції та прогрес щодня.</p>
            <p>Отримай результат і персональні рекомендації.</p>
          </div>
          <div className="card-footer">
            😔😡🥳 Вибирай свій настрій щодня за допомогою стікерів!
          </div>
        </div>
      </div>
    </section>
  );
}
