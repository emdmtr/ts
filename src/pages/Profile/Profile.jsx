import { Link } from "react-router-dom";
import "./Profile.css";

import Footer from "../../components/Footer/Footer";

export default function ProfilePage() {
  return (
    <div className="page">
      {/* HEADER */}
      <header className="site-header">
        <div className="site-header-inner">
          <a href="/" className="logo">
            <div className="logo-circle">
              <span className="logo"></span>
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
        {/* Top row */}
        <section className="top-row">
          <div className="profile">
            <div className="avatar">
              <div className="avatar-img"></div>
            </div>
            <h2 className="profile-name">Софія</h2>
            <p className="profile-bio">
              У вільний час люблю слухати музику, дивитися фільми та іноді
              малювати — це допомагає мені трохи відволіктися й знайти
              внутрішній баланс. Також мені подобаються спокійні прогулянки та
              моменти наодинці з собою.
            </p>
            <div className="tags">
              <span className="tag">🎨 малювання</span>
              <span className="tag">🎧 музика</span>
              <span className="tag">🚶 прогулянки</span>
            </div>
          </div>

          <div className="mood-col">
            <div className="card date-card">
              <div className="date-num">30</div>
              <div className="date-month">Березня</div>
            </div>
            <div className="card mood-card">
              <div className="mood-emoji">😔</div>
              <div className="mood-label">Самотньо</div>
            </div>
          </div>

          <div className="feel-col">
            <div className="feel-card">
              <h3>Як ти себе сьогодні почуваєш?</h3>
              <ul className="feel-list">
                <li>
                  <label>
                    <input type="checkbox" className="cb" />
                    Втомлено
                    <span className="feel-emoji">😩</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" className="cb" />
                    Все дратує
                    <span className="feel-emoji">😡</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" className="cb" defaultChecked />
                    Самотньо
                    <span className="feel-emoji">😔</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" className="cb" />
                    Починаю відновлюватися
                    <span className="feel-emoji">🌱</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" className="cb" />В порядку
                    <span className="feel-emoji">🙂</span>
                  </label>
                </li>
              </ul>
            </div>
            <button className="stat-btn">
              <span className="leaf">🌿</span>
              Подивитися всю статистику
            </button>
          </div>
        </section>

        {/* Tip of the day */}
        <section className="tip-section">
          <h3 className="tip-section-title">Порада дня</h3>
          <div className="tip-bar">
            <span>Вийди на коротку прогулянку</span>
            <span className="tip-icons">🌿 🚶 ☀️</span>
          </div>
        </section>

        {/* Test result + goals */}
        <section className="result-row">
          <div className="result-block">
            <h4 className="result-title">💬 Результат тесту:</h4>
            <p className="result-sub">Емоційне виснаження та самотність</p>
            <p className="result-feel-title">Ти можеш відчувати:</p>
            <ul className="result-feel-list">
              <li>😔 самотність</li>
              <li>⚡ втома</li>
              <li>💭 апатія</li>
            </ul>
            <p className="result-note">
              💬 Ймовірно, це початкові ознаки емоційного вигорання або легкої
              депресії.
            </p>
            <p className="result-note-em">
              <u>Але важливо:</u> ти вже зробила перший крок — звернула увагу на
              свій стан 💜
            </p>
          </div>
          <div className="goals-card">
            <h4>Цілі на сьогодні:</h4>
            <ul className="goals-list">
              <li>
                <label>
                  <input type="checkbox" className="cb" />
                  Записати 3 свої емоції за день
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="cb" defaultChecked />
                  Провести 1 годину без телефону
                </label>
              </li>
            </ul>
          </div>
        </section>

        {/* My collection */}
        <section className="collection">
          <h3 className="section-title">Моя добірка</h3>
          <div className="collection-grid">
            <CollectionList
              title="Фільми 🎬"
              items={[
                "Маленька міс щастя",
                "Переваги скромників",
                "Їсти, молитися, кохати",
                "Мій хлопець — псих",
                "До зустрічі з тобою",
                "Таємне життя Волтера Мітті",
                "Чудо",
                "Вона",
                "Винні зірки",
                "Ігри розуму",
              ]}
              checked={[5, 10]}
            />
            <CollectionList
              title="Пісні  🎧"
              items={[
                "Billie Eilish — everything i wanted",
                "Lana Del Rey — Young and Beautiful",
                "Adele — Easy On Me",
                "Olivia Rodrigo — traitor",
                "Sia — Breathe Me",
                "Coldplay — Fix You",
                "Tom Odell — Another Love",
                "Lorde — Liability",
                "AURORA — Runaway",
                "Taylor Swift — this is me trying",
              ]}
              checked={[1, 7]}
            />
            <CollectionList
              title="Мультфільми  🎨"
              items={[
                "Головоломка",
                "Душа",
                "Вгору",
                "Коко",
                "Мій сусід Тоторо",
                "Віднесені привидами",
                "Служба доставки Кікі",
                "Ходячий замок Хаула",
                "Рататуй",
                "Я панда",
              ]}
              checked={[1, 5, 6, 9, 10]}
            />
          </div>
        </section>

        {/* Mood diary */}
        <section className="diary">
          <h3 className="diary-section-title">Щоденник настрою</h3>
          <div className="diary-box">
            <p className="diary-placeholder">Напиши, що ти відчуваєш</p>
          </div>
          <button className="help-btn">
            Мені потрібна допомога
          </button>
        </section>
      </main>

      <div className="wave-bottom" />

    <Footer/>
    </div>
  );
}

function CollectionList({ title, items, checked }) {
  return (
    <div className="coll-card">
      <h5>{title}</h5>
      <ol>
        {items.map((it, i) => {
          const isChecked = checked.includes(i + 1);
          return (
            <li key={i}>
              <label>
                <input
                  type="checkbox"
                  className="cb"
                  defaultChecked={isChecked}
                />
                <span className="coll-num">{i + 1}.</span>
                <span className="coll-text">{it}</span>
              </label>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
