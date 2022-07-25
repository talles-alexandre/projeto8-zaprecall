import { useState } from "react";
import Flashcard from "../Flashcard/Flashcard";
import "./style.css";
import Icone from "../Icone/Icone";
import Logopequeno from "./../../assets/img/logo-pequeno.png";

export default function Deck() {
  const data = [
    {
      frente: "O que é JSX?",
      verso: "Uma extensão de linguagem do JavaScript",
    },
    {
      frente: "O React é __",
      verso: "Uma biblioteca JavaScript para construção de interfaces",
    },
    { frente: "Componentes devem iniciar com __", verso: "Letra maiúscula" },
    { frente: "Podemos colocar __ dentro do JSX", verso: "Expressões" },
    {
      frente: "O ReactDOM nos ajuda __",
      verso:
        "Interagindo com a DOM para colocar componentes React na mesma tela",
    },
    {
      frente: "Usamos o npm para __",
      verso: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      frente: "Usamos o props para __",
      verso: "Passar diferentes informações para componentes",
    },
    {
      frente: "Usamos estado (state) para __",
      verso:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  function montarFlashcards() {
    if (questoes.length === 0) {
      data.sort((a, b) => Math.random() - 0.5);
      setQuestoes([...data]);
      return <></>;
    } else {
      return questoes.map((questao, indice) => {
        const { frente, verso } = questao;
        return (
          <Flashcard
            frente={frente}
            verso={verso}
            key={frente + indice}
            indice={indice + 1}
            aoFinalizar={(resposta) => setRespostas([...respostas, resposta])}
          />
        );
      });
    }
  }

  function montarFooter() {
    let resultado = <></>;
    if (respostas.length === questoes.length && questoes.length > 0) {
      if (!respostas.includes("erro")) {
        resultado = (
          <div className="resultado">
            <span>
              <Icone icone="festinha" /> Parabéns!
            </span>
            <p>Você não esqueceu de nenhum flashcard!</p>
          </div>
        );
      } else {
        resultado = (
          <div className="resultado">
            <span>
              <Icone icone="triste" /> Putz!
            </span>
            <p>Ainda faltam alguns...Mas não desanime!</p>
          </div>
        );
      }
    }
    return (
      <>
        {resultado}
        <p>
          {respostas.length}/{questoes.length} concluídos
        </p>
        {respostas.map((resposta) => (
          <Icone icone={resposta} />
        ))}
      </>
    );
  }

  const [questoes, setQuestoes] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const flashcards = montarFlashcards();
  const footer = montarFooter();
  return (
    <div className="Deck">
      <header>
        <img src={Logopequeno} alt="ZapRecall" />
        <h1>ZapRecall</h1>
      </header>
      <main>{flashcards}</main>
      <footer>{footer}</footer>
    </div>
  );
}
