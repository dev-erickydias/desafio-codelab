import dataCards from "../constants/cardsData"

export default function Cards() {

  const dataTenis = dataCards.tenis

  return (
    <section className="cards">
      <div className="cards__titles">
        <h2 className="cards__title">Os melhores em um só lugar</h2>
        <p className="cards__text">
          A marca Jhordan na JhordanShoes é a escolha certa para os amantes de
          sneakers que busca estilo e conforto.
        </p>
      </div>
      <ul>
      {dataTenis.map((tenis, index) => (
        <li key={index} className="card">
          <img className="card__image"
            src={tenis.image} 
            alt={tenis.nome} 
          />
          <h2 className="card__title">{tenis.nome}</h2>
          <p className="card__text">Marca: {tenis.marca}</p>
          <p className="card__text">Preço: ${tenis.preco.toFixed(2)}</p>
        </li>
      ))}
      </ul>
    </section>
  );
}
