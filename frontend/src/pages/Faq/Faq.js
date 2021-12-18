import React from "react";
import useFecth from "../../hooks/useFecth";
import Loading from "../../components/Helper/Loading";
import ErroMessage from "../../components/Helper/ErroMessage";
import IntroOnPage from "../../components/IntroOnPage/IntroOnPage";
import { GET_FAQ } from "../../services/Api";
import Image from "../../components/Image/Image";
import { Container, Title } from "../../styles/styles";
import { Faqs, Faq as FaqStyle, FaqImage, FaqContent } from "./style";

const Faq = () => {
  const { data, error, loading, request } = useFecth();
  React.useEffect(() => {
    async function fetchFaq() {
      const { url, options } = GET_FAQ();
      await request(url, options);
    }
    fetchFaq();
  }, [request]);

  if (error) return <ErroMessage error={error} />;
  if (loading) return <Loading />;
  if (data) {
    const { encomendar } = data;
    return (
      <>
        <IntroOnPage text="Saiba como fazer encomendas conosco" />
        <Container>
          <Faqs>
            {encomendar.map(({ id, titulo, imagem, descricao }) => {
              return (
                <FaqStyle key={id}>
                  <FaqImage>
                    <Image url={imagem} path={imagem.url} />
                  </FaqImage>
                  <FaqContent>
                    <Title>{titulo}</Title>
                    <p>{descricao}</p>
                  </FaqContent>
                </FaqStyle>
              );
            })}
          </Faqs>
        </Container>
      </>
    );
  }
  return null;
};

export default Faq;
