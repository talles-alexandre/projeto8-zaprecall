import { useState } from "react";
import Logo from "./../../assets/img/logo.png";
import "./style.css";

export default function Inicio() {
  const [visivel, setVisivel] = useState(true);

  return visivel ? (
    <div className="Inicio">
      <img src={Logo} alt="ZapRecall" />
      <h1>ZapRecall</h1>
      <button onClick={() => setVisivel(false)}>Iniciar Recall!</button>
    </div>
  ) : (
    <></>
  );
}
