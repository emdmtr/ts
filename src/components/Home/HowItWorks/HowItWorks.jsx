import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <div className="how-container">
        <h2 className="section-title">Як це працює</h2>
        <div className="steps-wrapper">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-content">
              <p>Проходь тест</p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-content">
              <p>
                Читай матеріали, підібрані під твій настрій та твою історію.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-content">
              <p>Отримуй підтримку в анонімному чаті.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
