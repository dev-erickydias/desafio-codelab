"use client";

import { useState, useEffect } from "react";
import getDataBase from "../services/bdService.js";

export default function Cards() {
    // Estado para armazenar o resultado da base de dados
  const [data, setData] = useState(null);

  // Use useEffect para buscar os dados ao montar o componente
  useEffect(() => {
    getDataBase()
      .then((res) => {
        setData(res); // Atualize o estado com o resultado
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []); // [] garante que o useEffect rode apenas uma vez, ao montar o componente

  // Função para carregar os próximos 6 projetos
  
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
      </ul>
    </section>
  );
}
