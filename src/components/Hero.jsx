export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__items">
        <img className="hero__logo" src="/logo.svg" alt="Logo" />
        <h1 className="hero__title">A melhor loja Jordan</h1>
        <p className="hero__text">
          <span className="hero__first-line">
            O tênis Jordan é fruto de uma velha e forte 
          </span>
          parceria entre a Nike e o jogador Michael Jordan.
        </p>
      </div>
    </div>
  );
}
