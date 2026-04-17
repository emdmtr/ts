import "./Footer.css";

export default function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E3D6F2"
          fill-opacity="1"
          d="M0,192L34.3,181.3C68.6,171,137,149,206,149.3C274.3,149,343,171,411,186.7C480,203,549,213,617,208C685.7,203,754,181,823,181.3C891.4,181,960,203,1029,192C1097.1,181,1166,139,1234,128C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className="footer">
        <div className="main-container">
          <ul className="nav-column">
            <li>
              <a href="">Головна</a>
            </li>
            <li>
              <a href="">Tести</a>
            </li>
            <li>
              <a href="">Про нас</a>
            </li>
            <li>
              <a href="">Cтатті з порадами</a>
            </li>
            <li>
              <a href="">Чек-листи</a>
            </li>
          </ul>
          <ul className="contact-column">
            <li>
              Електронна пошта:<span> </span>
              <a href="mailto:support@teensupport.org" className="email-link">
                support@teensupport.org
              </a>
            </li>
            <li>
              Номер телефону:<span> </span>
              <a href="tel:+380505552470" className="phone-link">
                +380505552470
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Повідомити про проблему
              </a>
            </li>
          </ul>
          <img
            src="./public/helpDrawing.png"
            alt="pencil drawing one person is helping another"
            className="footer-img"
          />
        </div>
      </div>
    </>
  );
}
