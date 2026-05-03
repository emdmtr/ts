import React from "react";
import "./not-found.css";

export default function Error404() {
  return (
    <div className="pageWrapper">
      {/* Top section: The emotional message */}
      <header className="errorHeader">
        <h1 className="headingPrimary">Оххх... Не плач.</h1>
        <p className="headingSecondary">Це лише помилка.</p>
        <p className="errorText">
          Можливо, те, що ти шукаєш, просто зараз десь сховалося — але це не
          означає, що воно зникло назавжди.
        </p>
      </header>

      {/* Middle section: The visual "404" stack */}
      <main className="visualContainer">
        <div className="glassOverlay"></div>

        <div className="backgroundNumber">404</div>

        <div className="illustrationBox">
          <img
            src="./public/teenagers.png"
            className="friendshipImg"
            alt="Supportive friends illustration"
          />
        </div>
      </main>

      {/* Bottom section: The decorative wave and logo */}
      <footer className="footerArea">
      </footer>
    </div>
  );
}
