import "./Resources.css";

export default function Resources() {
  return (
    <section className="resources-section">
      <h2 className="resources-header">Ресурси</h2>
      <div className="resources-cards-container">
        <div className="text-card">
          <h3 className="card-header">Історії інших підлітків</h3>
          <p className="card-text">
            Реальні або анонімні історії про труднощі, страхи, помилки та шлях
            до підтримки. Читаючи їх, ти розумієш: ти не один/одна зі своїми
            переживаннями. Цей розділ про чесність, емпатію та надію.
          </p>
        </div>
        <div className="img-card">
          <img
            src="./public/res-img1.png"
            alt="Two girls hugging with a teddy bear."
          />
        </div>
        <div className="text-card">
          <h3 className="card-header">Поради</h3>
          <p className="card-text">
            Короткі та практичні рекомендації, які можна застосувати одразу.
            Дихальні вправи, техніки самопідтримки, способи заспокоїтись перед
            розмовою. Невеликі кроки, які поступово допомагають почуватися
            впевненіше й спокійніше.
          </p>
        </div>
        <div className="img-card">
          <img src="./public/res-img2.png" alt="Two girls hugging." />
        </div>
        <div className="text-card">
          <h3 className="card-header">Статті</h3>
          <p className="card-text">
            Матеріали про емоції, стрес, тривожність, вигорання, дружбу та
            самооцінку. Тут складні психологічні теми пояснюються простою мовою
            — без засудження та моралей. Статті допомагають краще зрозуміти себе
            і знайти відповіді на питання, які іноді складно озвучити вголос.
          </p>
        </div>
        <div className="img-card">
          <img
            src="./public/res-img3.png"
            alt="Two girls: one is comforting the other."
          />
        </div>
      </div>
    </section>
  );
}
