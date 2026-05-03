import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <img src="/хмарка1.png" className="cloud cloud-1" alt="хмарка" />
        <div className="hero-image">
          <img src="/teenagers.png" alt="пікча" />
        </div>
        <div className="hero-text">
          <h1>
            Teen <br /> Support
          </h1>
          <p>Безпечний простір, де тебе почують.</p>
          <button className="btn-filled">Пройти тест</button>
        </div>
      </div>
    </section>
  );
}
