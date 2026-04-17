import "./App.css";

// COMPONENTS
import Resources from "./components/Resources/Resources";
import Quote from "./components/Quote/Quote";
import Registration from "./components/Registration/Registration";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-container">
          <div className="logo-placeholder">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ width: "100px", height: "auto" }}
            />
          </div>

          <nav className="main-nav">
            <ul>
              <li><a href="#">Головна</a></li>
              <li><a href="#">Тест</a></li>
              <li><a href="#">Про нас</a></li>
              <li><a href="#">Статті з порадами</a></li>
              <li><a href="#">Історії</a></li>
            </ul>
          </nav>

          <button className="btn-outline">Увійти</button>
        </div>
      </header>

      <main>
      
        <section className="hero">
          <div className="hero-container">
            <img src="/хмарка1.png" className="cloud cloud-1" alt="хмарка" />
            <img src="/teenagers.png" alt="пікча" />
            <div className="hero-text">
              <h1>Teen <br /> Support</h1>
              <p>Безпечний простір, де тебе почують.</p>
              <button className="btn-filled">Пройти тест</button>
            </div>
          </div>
        </section>

       
        <section className="help-section">
          <h2 className="help-title">Як ми допомагаємо?</h2>
          <div className="cards-fan">
            <div className="help-card card-1">
              <div className="card-content">
                <h3>🤝 Статті з порадами від психологів</h3>
                <p>Короткі та зрозумілі матеріали від фахівців про тривогу, стрес, самооцінку та стосунки.</p>
                <p>Практичні поради й вправи, які можна застосувати одразу.</p>
              </div>
              <div className="card-footer">✨ Підтримка, яка завжди поруч.</div>
            </div>

            <div className="help-card card-2">
              <div className="card-content">
                <h3>🌱 Практичні вправи</h3>
                <p>Ця секція допомагає знайти хвилинку для себе та відновити внутрішній баланс.</p>
                <p>Тут зібрані легкі та ефективні техніки, які можна виконувати будь-де.</p>
              </div>
              <div className="card-footer">🌸 Поверни баланс і внутрішній спокій.</div>
            </div>

            <div className="help-card card-3">
              <div className="card-content">
                <h3>🎬 Підтримка через музику та кініматограф</h3>
                <p>Фільми, мультфільми й треки, що підтримують у складні моменти.</p>
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
                <p>Безпечне місце, де можна написати про все, що турбує. Без страху, що хтось дізнається.</p>
                <p>Спілкування з консультантом або волонтером у реальному часі.</p>
              </div>
              <div className="card-footer">🔒 Твоя безпека та конфіденційність — пріоритет.</div>
            </div>

            <div className="help-card card-5">
              <div className="card-content">
                <h3>📅 Щоденник настрою</h3>
                <p>Відстежуй свій стан, емоції та прогрес щодня.</p>
                <p>Отримай результат і персональні рекомендації.</p>
              </div>
              <div className="card-footer">😔😡🥳 Вибирай свій настрій щодня за допомогою стікерів!</div>
            </div>
          </div>
        </section>

  <div className="wave-divider">
  <img src="/wave1.png" alt="wave" />
</div>
  
      <section className="info-section">
        <div className="info-container">
          <div className="info-text">
            <img
            src="/hb3.png"
            alt="decor"
            className="footer-img"
            />
            <h2>Ти не один</h2>
            <p>
            Багато підлітків стикаються зі стресом, тривогою або емоційним виснаженням <br /> —
            1 з 3 переживає сильний тиск щодня.
            </p>
            <p>Але ти не мусиш залишатися самотнім у цьому: <a href="#">підтримка поруч.</a></p>
            <p>
             Можна поговорити в <a href="#">анонімному чаті</a>, отримати поради від психологів або <br />
             спробувати прості вправи на релакс та підняття настрою. Кожен крок <br />
             допомогає відчути полегшення та знайти внутрішню рівновагу.
             </p>
            <button className="btn-filled">Отримати підтримку зараз</button>
          </div>

          <div className="info-image">
           <img src="/teens.png" alt="Teen Support" />
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <div className="how-container">
          <div className="title-wrapper">
      <h2 className="section-title">Як це працює</h2>
    </div>
          <div className="steps-wrapper">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-content"><p>Проходь тест</p></div>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-content"><p>Читай матеріали, підібрані під твій настрій та твою історію.</p></div>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-content"><p>Отримуй підтримку в анонімному чаті.</p></div>
            </div>
          </div>
        </div>
      </section>
      <Resources />
      <Quote />
      <Registration />
      <Footer />
      
    </main>
  </div>
);
}

export default App;