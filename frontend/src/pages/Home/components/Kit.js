import React from "react";
import { Container, Title } from "../../../styles/styles";
import { KitsForParty, Toostify } from "./styles";
import Image from "../../../components/Image/Image";

export const Kit = ({ kit }) => {
  const [showMessage, setshowMessage] = React.useState(false);
  const [message, setMessage] = React.useState(null);
  const messageRef = React.useRef();
  function handleClick() {
    setshowMessage(!showMessage);
    setMessage("Kit Para festa indisponivel");
    clearInterval(messageRef.currentF);
    messageRef.current = setTimeout(() => {
      setshowMessage(false);
    }, 2000);
  }
  return (
    <KitsForParty>
      <Container>
        <Image url={kit} path={kit.imagem.url} />
        <section>
          <Title>{kit.nome}</Title>
          <p>{kit.descricao}</p>
          <button onClick={handleClick}>Aderir o kit</button>
        </section>
      </Container>
      {showMessage && (
        <Toostify ref={messageRef}>
          <p>{message}</p>
        </Toostify>
      )}
    </KitsForParty>
  );
};
