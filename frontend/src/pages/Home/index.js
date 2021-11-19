import React, { useEffect, useState } from "react";
import "./style.scss";

import OpacityIcon from "@material-ui/icons/Opacity";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HomeServices from "./service";

const Home = () => {
  const [doadores, setDoadores] = useState([]);
  const [novoTipo, setNovoTipo] = useState("");
  const [novoEmail, setNovoEmail] = useState("");
  const [novoDoador, setNovoDoador] = useState("");

  const listarDoadores = () => {
    HomeServices.list().then((response) => {
      setDoadores(response.data);
    });
  };

  const adicionarDoador = async () => {
    const payload = {
      nome: novoDoador,
      email: novoEmail,
      tipo: novoTipo,
    };
    await HomeServices.create(payload);
    listarDoadores();
  };

  useEffect(() => {
    listarDoadores();
  }, []);
  return (
    <section className="section">
      <div className="section-div-left">
        <OpacityIcon className="iconBlood" />
        <h3>Doe sangue, salve vidas!</h3>
        <h5>Campanha de doação de sangue - 2021</h5>
      </div>
      <div className="section-div-rigth">
        <div className="div-text">
          <h3>A sua doação importa</h3>
          <p>
            Mais de 38.000 doações são necessárias todos os dias. Apenas 1,9% da
            população brasileira doa sangue
          </p>
        </div>
        <div className="div-form">
          <span className="div-form-span">
            <AddCircleOutlineIcon className="iconAdd" /> Entre na lista de
            doadores
          </span>
          <input
            onChange={(event) => setNovoDoador(event.target.value)}
            className="div-form-input"
            type="text"
            placeholder="Nome"
          />
          <input
            onChange={(event) => setNovoEmail(event.target.value)}
            className="div-form-input"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(event) => setNovoTipo(event.target.value)}
            className="div-form-input"
            type="text"
            placeholder="Tipo"
          />
          <button
            onClick={() => adicionarDoador()}
            className=" div-form-button"
          >
            Quero ajudar
          </button>
        </div>
        <div className="lista-doadores">
          <span>
            <OpacityIcon className="iconDoadores" /> Ultimos doadores
          </span>
          <ul>
            {doadores.map((item) => (
              <li>
                ({item.tipo}) {item.nome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
