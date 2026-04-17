import "./Registration.css";

export default function Quote() {
  return (
    <section className="registration-section">
      <div className="registration-container">
        <div className="left-side">
          <h2 className="header">Реєстрація</h2>
          <form action="">
            <input type="text" name="nickName" placeholder="Нікнейм" />
            <input type="password" name="password" placeholder="Пароль" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Підтвердити пароль"
            />
          </form>
          <button className="submit-button" type="submit">
            Зареєструватись
          </button>
          <p className="already-registered">
            Вже зареєстровані? <a className="login-link" href="#">Увійти</a>
          </p>
        </div>
        <img
          src="./public/teenagers.png"
          alt="two of teenagers comforting the third crying teenager."
        />
      </div>
    </section>
  );
}
