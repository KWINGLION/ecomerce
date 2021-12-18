import React from "react";
import { Title } from "../../../styles/styles";
import { AnimeLeft, Answer, AnswerChild, Faqs, Respo } from "./styles";

const Faq = ({ faq }) => {
  const [id, setId] = React.useState(0);
  function handleShow({ target }) {
    setId(+target.id);
  }

  return (
    <Faqs>
      <Answer>
        <Title>Perguntas frequentes</Title>
        {faq.map((item, i) => {
          return (
            <AnswerChild
              key={item.id}
              onClick={handleShow}
              id={i}
              active={id === i}
            >
              {item.pergunta}
            </AnswerChild>
          );
        })}
      </Answer>
      <Respo>
        {faq.map((item, i) => {
          if (id === i)
            return (
              <div key={item.id}>
                <Title>{item.pergunta}</Title>
                <AnimeLeft>{item.resposta}</AnimeLeft>
              </div>
            );
          return null;
        })}
      </Respo>
    </Faqs>
  );
};

export default Faq;
