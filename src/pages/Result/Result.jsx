import React from "react";
import "./Result.css";
import Header from "../../components/Home/Header/Header";

const movies = [
  {
    title: "ДО ЗУСТРІЧІ З ТОБОЮ",
    year: "2016",
    duration: "110хв",
    genre: "Драма",
    director: "Теа Шеррок",
    cast: "Емілія Кларк, Сем Клафлін",
  },
  {
    title: "СТАЖЕР",
    year: "2015",
    duration: "121хв",
    genre: "Комедія, мелодрама",
    director: "Ненсі Маєрс",
    cast: "Роберт Де Ніро, Енн Гетеуей",
  },
  {
    title: "ДУМКАМИ НАВИВОРІТ",
    year: "2015",
    duration: "102хв",
    genre: "Мультфільм",
    director: "Піт Доктер",
    cast: "Емі Полер, Філліс Сміт",
  },
  {
    title: "ЗВІРОПОЛІС",
    year: "2016",
    duration: "108хв",
    genre: "Мультфільм",
    director: "Байрон Говард",
    cast: "Джініфер Гудвін, Джейсон Бейтман",
  },
];

const music = [
  { title: "I Wanna Be Yours", artist: "Arctic Monkeys" },
  { title: "I Wanna Be Yours", artist: "Arctic Monkeys" },
  { title: "Fix You", artist: "Coldplay" },
  { title: "Everything I Wanted", artist: "Billie Eilish" },
];

export default function Result() {
  return (
    <div className="page-wrapper">
      <Header />

      {/* Top Wave Decoration */}
      <div className="wave-top-container">
        <svg viewBox="0 0 1440 120" className="wave-svg">
          <path
            fill="#e2d1f9"
            d="M0,0 L1440,0 L1440,60 C1200,120 240,120 0,60 Z"
          ></path>
        </svg>
      </div>

      <main className="main-content">
        <h1 className="result-title">Твій результат, Софійко</h1>

        {/* Sekcja Punktów - specyficzny układ z obrazkiem po prawej */}
        <div className="results-container">
          <div className="points-grid">
            <div className="point-item">
              <span className="point-tag">🌈 40–50 балів</span>
              <p>
                Ти зараз у хорошому стані 💜
                <br />
                Не забувай відпочивати та піклуватися про себе
              </p>
            </div>
            <div className="point-item">
              <span className="point-tag">🙂 30–39 балів</span>
              <p>
                Загалом усе нормально, але є стрес
                <br />
                Спробуй приділити більше часу собі
              </p>
            </div>
            <div className="point-item">
              <span className="point-tag">😐 20–29 балів</span>
              <p>
                Є ознаки втоми або емоційного напруження
                <br />
                Можливо, тобі потрібен відпочинок або підтримка
              </p>
            </div>
            <div className="point-item">
              <span className="point-tag">😔 10–19 балів</span>
              <p>
                Тобі зараз непросто 💔
                <br />
                Важливо поговорити з кимось, кому ти довіряєш
              </p>
            </div>
          </div>

          <div className="main-illustration">
            {/* Tutaj idzie grafika dwóch siedzących dziewczyn */}
            <div className="illustration-placeholder"></div>
          </div>
        </div>

        <div className="description-text">
          <p className="result-sentence">
            <span className="result-in-points">14</span>- це означає, що тобі
            зараз дуже непросто.
          </p>
          <p className="result-description">
            Можливо, ти відчуваєш втому, сум або навіть внутрішню порожнечу.
            Іноді здається, що немає сил ні на що, навіть на те, що раніше
            приносило радість.
          </p>
        </div>

        <div className="support-header">
          <h2 className="support-title">Софійко, ти не одна 💜</h2>
          <p className="support-subtitle">
            Спробуй обрати 1-2 речі з цього списку — не потрібно робити все
            одразу
          </p>
        </div>

        <div className="support-grid">
          {/* Karta 1 */}
          <div className="support-card card-1">
            <h3>🧠 1. Вигрузи думки</h3>
            <p>Візьми нотатки і напиши:</p>
            <ul>
              <li>що тебе зараз турбує</li>
              <li>що ти відчуваєш</li>
            </ul>
            <p className="card-note">
              Не думай про правильність — просто пиши.
            </p>
          </div>

          {/* Karta 3 (jest wyżej po prawej) */}
          <div className="support-card card-3">
            <h3>🎧 3. Переключи стан</h3>
            <p>Обери щось легке:</p>
            <ul>
              <li>улюблена музика</li>
              <li>серіал/відео</li>
              <li>душ або теплий чай</li>
            </ul>
            <p className="card-note">
              Це не "втеча", це спосіб трохи заспокоїти мозок.
            </p>
          </div>

          {/* Karta 2 (środek-lewo) */}
          <div className="support-card card-2">
            <h3>🧑‍🤝‍🧑 2. Попроси про допомогу</h3>
            <p>Це може бути:</p>
            <ul>
              <li>мама / тато</li>
              <li>подруга</li>
              <li>вчитель або шкільний психолог</li>
            </ul>
            <p className="card-note">
              Просити допомогу — це сила, а не слабкість.
            </p>
          </div>

          {/* Karta 4 (dół-prawo) */}
          <div className="support-card card-4">
            <h3>🚶‍♀ 4. Вийди на 5-10 хвилин</h3>
            <p>Навіть коротка прогулянка може:</p>
            <ul>
              <li>знизити тривогу</li>
              <li>трохи підняти настрій</li>
            </ul>
          </div>
        </div>

        <div className="important-box">
          <p>
            <strong>🚫 ВАЖЛИВО</strong>
          </p>
          <p>
            Якщо тобі стає ще важче або з’являються дуже темні думки —
            обов’язково звернися до дорослого або спеціаліста. Ти не повинна
            проходити через це сама ❤️
          </p>
        </div>

        {/* Sekcja Filmów */}
        <section className="content-section">
          <h2 className="section-label">🎬 Твоя добірка</h2>
          <div className="movie-grid">
            {movies.map((movie, index) => (
              <div key={index} className="movie-card">
                <div className="movie-poster"></div>
                <div className="movie-content">
                  <h3 className="movie-title">{movie.title}</h3>
                  <div className="movie-details">
                    <p>Рік: {movie.year}</p>
                    <p>Тривалість: {movie.duration}</p>
                    <p>Жанр: {movie.genre}</p>
                    <p>Режисер: {movie.director}</p>
                    <p>Головні ролі: {movie.cast}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sekcja Muzyki - Kartki "Instax/Polaroid" */}
        <section className="content-section">
          <h2 className="section-label">🎵 Музика</h2>
          <div className="music-grid">
            {music.map((song, index) => (
              <div key={index} className="music-card">
                <div className="music-cover"></div>
                <div className="music-overlay">
                  <div className="music-info">
                    <p className="song-name">{song.title}</p>
                    <p className="artist-name">{song.artist}</p>
                  </div>
                  <div className="music-icon">📊</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer z dużym napisem i ilustracją po prawej */}
      <footer className="footer-section">
        <div className="footer-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              fill="#e2d1f9"
              d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
            ></path>
          </svg>
        </div>
        <div className="footer-body">
          <div className="footer-content-wrapper">
            <div className="footer-nav">
              <p>Головна</p>
              <p>Контакти</p>
              <p>Про нас</p>
              <p>Тест</p>
            </div>
            <div className="footer-main-brand">Teen Support</div>
            <div className="footer-graphic">
              <div className="footer-img-placeholder"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
