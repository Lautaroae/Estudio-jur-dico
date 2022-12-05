import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>
        {" "}
        Somos un estudio con una clara impronta de negocios. Brindamos
        asesoramiento integral a través de múltiples áreas de práctica y
        generamos equipos multidisciplinarios para responder de forma innovadora
        y creativa a desafíos complejos.
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src="images/img-9.jpg"
              text="Si sos viejo y te queres jubilar yo te ayudo"
              label="Previcional"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Si sufris de maltrato yo te defiendo wacha "
              label="Violencia de genero"
              path="/services"
            />
          </ul>
          <ul className="cards__item">
            <CardItem
              src="images/img-3.jpg"
              text="tu jefe te dejo sin laburo de la nada, que se agarre"
              label="Laboral"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Quisiste asaltar el banco pero te salio mal, yo te saco bro."
              label="Penal"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Sos niño o adolescente y estas mal? ahora vas a estar bien"
              label="Niños y adolecentes"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
