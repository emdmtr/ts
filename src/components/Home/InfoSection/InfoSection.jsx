import "./InfoSection.css";

export default function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-text">
          <img src="/hb3.png" alt="decor" className="footer-img" />
          <h2>Ти не один</h2>
          <p>
            Багато підлітків стикаються зі стресом, тривогою або емоційним
            виснаженням <br /> — 1 з 3 переживає сильний тиск щодня.
          </p>
          <p>
            Але ти не мусиш залишатися самотнім у цьому:{" "}
            <a href="#">підтримка поруч.</a>
          </p>
          <p>
            Можна поговорити в <a href="#">анонімному чаті</a>, отримати поради
            від психологів або <br />
            спробувати прості вправи на релакс та підняття настрою. Кожен крок{" "}
            <br />
            допомогає відчути полегшення та знайти внутрішню рівновагу.
          </p>
          <button className="btn-filled">Отримати підтримку зараз</button>
        </div>

        <div className="info-image">
          <img src="/teens.png" alt="Teen Support" />
        </div>
      </div>
    </section>
  );
}
