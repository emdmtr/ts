import { Link } from "react-router-dom";
import "./Result.css";

export default function ResultPage() {
  return (
    <div className="page">
      {/* HEADER */}
      <header className="site-header">
        <div className="site-header-inner">
          <a href="/" className="logo">
            <div className="logo-circle">
              <span className="logo-heart">♡</span>
            </div>
          </a>
          <nav className="site-nav">
            <a href="/">Головна</a>
            <a href="/result">Тест</a>
            <a href="#about">Про нас</a>
            <a href="#articles">Статті з порадами</a>
            <a href="#stories">Історії</a>
          </nav>
        </div>
      </header>

      <div className="wave-top" />

      <main className="main">
        {/* Decorations */}
        <div className="deco deco-heart" style={{ top: 460, left: 80 }}>
          ♥
        </div>
        <div className="deco deco-heart" style={{ top: 760, left: 200 }}>
          ♥
        </div>
        <div className="deco deco-heart" style={{ top: 1180, right: 80 }}>
          ♥
        </div>
        <div className="deco deco-spark" style={{ top: 220, right: 100 }}>
          ✦
        </div>
        <div className="deco deco-spark" style={{ top: 620, right: 220 }}>
          ✦
        </div>
        <div className="deco deco-spark" style={{ top: 1320, left: 120 }}>
          ✦
        </div>
        <div className="deco deco-leaf" style={{ top: 360, right: 360 }}>
          🌿
        </div>
        <div className="deco deco-leaf" style={{ top: 1080, left: 180 }}>
          🌿
        </div>

        <section className="result-page-top">
          <h1 className="result-heading">
            <span className="underline-wavy">Твій результат, Софійко</span>
          </h1>

          <div className="score-grid">
            <div className="score-item">
              <h4>🌈 40-50 балів</h4>
              <p>
                Ти зараз у хорошому стані 💜
                <br />
                Не забувай відпочивати та піклуватися про себе
              </p>
            </div>
            <div className="score-item">
              <h4>🌟 20-29 балів</h4>
              <p>
                Є ознаки втоми або емоційного напруження
                <br />
                Можливо, тобі потрібен відпочинок або підтримка
              </p>
            </div>
            <div className="score-item">
              <h4>🌤️ 30-39 балів</h4>
              <p>
                Загалом усе нормально, але є стрес
                <br />
                Спробуй приділити більше часу собі
              </p>
            </div>
            <div className="score-item">
              <h4>💛 10-19 балів</h4>
              <p>
                Тобі зараз непросто 💜
                <br />
                Важливо поговорити з кимось, кому ти довіряєш
              </p>
            </div>
          </div>

          <div className="girls-illustration">
            <svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hairA" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#7a5638" />
                  <stop offset="1" stopColor="#5a3e26" />
                </linearGradient>
                <linearGradient id="hairB" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#3b2a1d" />
                  <stop offset="1" stopColor="#2a1d12" />
                </linearGradient>
              </defs>
              <rect
                x="40"
                y="135"
                width="60"
                height="40"
                rx="3"
                fill="#cfd8e8"
                stroke="#2c2c2c"
                strokeWidth="1.2"
              />
              <ellipse cx="75" cy="80" rx="22" ry="26" fill="#f6dccb" />
              <path
                d="M52 80 Q50 50 75 50 Q100 50 98 80 L95 110 L55 110 Z"
                fill="url(#hairA)"
              />
              <ellipse cx="68" cy="82" rx="2" ry="3" fill="#2c2c2c" />
              <ellipse cx="82" cy="82" rx="2" ry="3" fill="#2c2c2c" />
              <path
                d="M70 92 Q75 95 80 92"
                stroke="#7a4d3a"
                strokeWidth="1"
                fill="none"
              />
              <path d="M55 105 L40 175 L100 175 L92 105 Z" fill="#b1c8e6" />
              <ellipse cx="140" cy="70" rx="22" ry="26" fill="#f6dccb" />
              <path
                d="M118 70 Q116 40 142 40 Q166 40 164 75 L160 100 L120 100 Z"
                fill="url(#hairB)"
              />
              <ellipse cx="133" cy="72" rx="2" ry="3" fill="#2c2c2c" />
              <ellipse cx="147" cy="72" rx="2" ry="3" fill="#2c2c2c" />
              <path
                d="M135 82 Q140 85 145 82"
                stroke="#7a4d3a"
                strokeWidth="1"
                fill="none"
              />
              <path d="M120 95 L100 175 L175 175 L165 95 Z" fill="#e8b88a" />
              <path
                d="M120 100 Q90 85 70 75"
                stroke="#e8b88a"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </section>

        <section className="result-text">
          <p>14 — це означає, що тобі зараз правда непросто.</p>
          <p>Софійко, схоже, що тобі зараз дуже непросто.</p>
          <p>
            Можливо, ти відчуваєш втому, сум або навіть внутрішню порожнечу.
            Іноді здається, що немає сил ні на що, навіть на те, що раніше
            приносило радість.
          </p>
          <h3 className="not-alone">Софійко, ти не одна 💜</h3>
          <p>
            Спробуй обрати 1-2 речі з цього списку — не потрібно робити все
            одразу.
          </p>
        </section>

        <section className="advice-grid">
          <div className="advice-bubble advice-1">
            <p className="advice-title">💜 1. Виражай думки</p>
            <p>Візьми нотатник і напиши:</p>
            <ul>
              <li>що тебе зараз турбує</li>
              <li>що ти відчуваєш</li>
            </ul>
            <p>Не думай про правильність — просто пиши.</p>
          </div>
          <div className="advice-bubble advice-2">
            <p className="advice-title">🤍 3. Переключи стан</p>
            <p>Обери щось легке:</p>
            <ul>
              <li>улюблена музика</li>
              <li>серіал/відео</li>
              <li>душ або теплий чай</li>
            </ul>
            <p>Це не "втеча", це спосіб трохи заспокоїти мозок.</p>
          </div>
          <div className="advice-bubble advice-3">
            <p className="advice-title">💛 2. Попроси про допомогу</p>
            <p>Це може бути:</p>
            <ul>
              <li>мама / тато</li>
              <li>подруга</li>
              <li>вчитель або шкільний психолог</li>
            </ul>
            <p>Просити допомогу — це сила, а не слабкість.</p>
          </div>
          <div className="advice-bubble advice-4">
            <p className="advice-title">🌿 4. Вийди на 5-10 хвилин</p>
            <p>Навіть коротка прогулянка може:</p>
            <ul>
              <li>знизити тривогу</li>
              <li>трохи підняти настрій</li>
            </ul>
          </div>
        </section>

        <section className="important">
          <p>
            <span className="imp-emoji">😟</span>
            <strong>ВАЖЛИВО</strong>
          </p>
          <p>
            Якщо тобі стає ще важче або з'являються дуже темні думки —
            обов'язково звернися до дорослого або спеціаліста. Ти не повинна
            проходити через це сама 💜
          </p>
        </section>

        <section className="picks">
          <h3 className="picks-title">
            <span className="underline-wavy">📽️ Твоя добірка</span>
          </h3>
          <div className="picks-grid">
            <FilmCard
              title="ДО ЗУСТРІЧІ З ТОБОЮ"
              img="https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400"
              meta={[
                "Рік: 2016",
                "Жанр: Драма / Мелодрама",
                "Режисер: Теа Шеррок",
                "Тривалість: 1 год 50 хв",
              ]}
              desc="Молода жінка стає доглядальницею паралізованого чоловіка."
            />
            <FilmCard
              title="СТАЖЕР"
              img="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=400"
              meta={[
                "Рік: 2015",
                "Жанр: Комедія / Драма",
                "Режисер: Ненсі Маєрс",
                "Тривалість: 2 год 1 хв",
              ]}
              desc="70-річний пенсіонер влаштовується стажером у модний інтернет-магазин."
            />
            <FilmCard
              title="ГОЛОВОЛОМКА"
              img="https://images.unsplash.com/photo-1533236897111-3e94666b2edf?w=400"
              meta={[
                "Рік: 2015",
                "Жанр: Анімація / Сім'я",
                "Режисер: Піт Доктер",
                "Тривалість: 1 год 35 хв",
              ]}
              desc="Емоції 11-річної дівчинки оживають у її голові."
            />
            <FilmCard
              title="ЗВЕРОПОЛІС"
              img="https://images.unsplash.com/photo-1612544409025-f0a3406ed5e9?w=400"
              meta={[
                "Рік: 2016",
                "Жанр: Анімація / Пригоди",
                "Режисер: Байрон Ховард",
                "Тривалість: 1 год 48 хв",
              ]}
              desc="У великому місті тварин кролиця-поліцейська розслідує справу."
              highlighted
            />
          </div>
        </section>

        <section className="picks">
          <h3 className="picks-title">
            <span className="underline-wavy">🎵 Музика</span>
          </h3>
          <div className="music-grid">
            <MusicCard
              title="Everything I wanted"
              artist="Billie Eilish"
              img="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400"
            />
            <MusicCard
              title="Young and Beautiful"
              artist="Lana Del Rey"
              img="https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=400"
            />
            <MusicCard
              title="Fix You"
              artist="Coldplay"
              img="https://images.unsplash.com/photo-1486556396467-d83d2b23514b?w=400"
              dark
            />
            <MusicCard
              title="this is me trying"
              artist="Taylor Swift"
              img="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=400"
            />
          </div>
        </section>

        <section className="support-cta">
          <p className="support-text">
            Можливо, щось із цього підтримає тебе сьогодні 🌿💜
          </p>
          <button className="support-btn">
            <span className="leaf">🌿</span>
            Отримати підтримку через чат
          </button>
        </section>
      </main>

      <div className="wave-bottom" />

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <ul className="footer-links">
            <li>Головна</li>
            <li>Тести</li>
            <li>Про нас</li>
            <li>Статті з порадами</li>
            <li>Історії</li>
          </ul>
          <div className="footer-contact">
            <p>
              <span>Електронна пошта:</span> support@teensupport.org
            </p>
            <p>
              <span>Номер телефону:</span> +380 50 555 2470
            </p>
            <p className="footer-report">Повідомити про проблему</p>
          </div>
          <div className="footer-illustration">
            <svg
              viewBox="0 0 240 120"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#2c2c2c"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="60" cy="35" r="14" />
              <path d="M60 49 L60 80 L40 110" />
              <path d="M60 80 L80 110" />
              <path d="M60 60 L90 55" />
              <path d="M90 55 L100 50 L108 55" />
              <circle cx="170" cy="60" r="12" />
              <path d="M170 72 L170 100 L156 115" />
              <path d="M170 100 L184 115" />
              <path d="M170 80 L188 75" />
              <path d="M168 64 L166 70" />
            </svg>
          </div>
        </div>
        <div className="footer-brand">Teen Support</div>
      </footer>
    </div>
  );
}

function FilmCard({ title, img, meta, desc, highlighted }) {
  return (
    <div className={`film-card ${highlighted ? "film-card-hl" : ""}`}>
      <div className="film-img" style={{ backgroundImage: `url(${img})` }} />
      <div className="film-body">
        <h6>{title}</h6>
        {meta.map((m, i) => (
          <p key={i} className="film-meta">
            {m}
          </p>
        ))}
        <p className="film-desc">{desc}</p>
      </div>
    </div>
  );
}

function MusicCard({ title, artist, img, dark }) {
  return (
    <div className={`music-card ${dark ? "music-card-dark" : ""}`}>
      <div className="music-img" style={{ backgroundImage: `url(${img})` }} />
      <div className="music-body">
        <p className="music-title">{title}</p>
        <p className="music-artist">{artist}</p>
        <span className="music-time">3:42</span>
      </div>
    </div>
  );
}
