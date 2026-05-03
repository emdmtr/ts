import "./Authorization.css";

export default function Authorization() {
  return (
    <section className="registration-section">
      <div className="registration-container">
        <div className="left-side">
          <h2 className="header">Авторизація</h2>
          <form action="">
            <input type="text" name="email" placeholder="Пошта" />
            <input type="password" name="password" placeholder="Пароль" />
            <a href="">Забули пароль?</a>
          </form>
          <button className="submit-button" type="submit">
            Увійти
          </button>
          <p className="already-registered">
            Ще не зареєстровані?{" "}
            <a className="login-link" href="#">
              Регістрація
            </a>
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
