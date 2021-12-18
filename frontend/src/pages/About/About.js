import React from "react";
import IntroOnPage from "../../components/IntroOnPage/IntroOnPage";
import { Container, Title } from "../../styles/styles";
import Image from "../../components/Image/Image";
import Faq from "./component/Faq";
import useFetch from "../../hooks/useFecth";
import { GET_ABOUT_CONTENT } from "../../services/Api";
import Loading from "../../components/Helper/Loading";
import ErroMessage from "../../components/Helper/ErroMessage";
import { AboutStyle, Content } from "./styles";
import Markdown from "markdown-to-jsx";
const About = () => {
  const { data, request, error } = useFetch();
  React.useEffect(() => {
    async function AboutContent() {
      const { url, options } = GET_ABOUT_CONTENT();
      await request(url, options);
    }
    AboutContent();
  }, [request]);


  if (error) return <ErroMessage error={error} />;
  if (data)
    return (
      <>
        <IntroOnPage text={data.intro} />
        <Container>
          <AboutStyle>
            <Content>
              <Title>{data.titulo}</Title>
              <Markdown>{data.sobre}</Markdown>
            </Content>
            <Image url={data.imagem} path={data.imagem.url} />
          </AboutStyle>
          <Faq faq={data.perguntas} />
        </Container>
      </>
    );
  return <Loading />;
};

export default About;
