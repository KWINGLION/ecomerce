import React from "react";
import IntroOnPage from "../../../components/IntroOnPage/IntroOnPage";

import BorderTitles from "../../../components/BorderTitles/BorderTitles";
import useFecth from "../../../hooks/useFecth";
import Loading from "../../../components/Helper/Loading";
import ErroMessage from "../../../components/Helper/ErroMessage";
import Card from "../../../components/Card/Card";

import Encomendas from "../../../Assets/encomendas.jpg";
import { ProdutoStyle } from "../styles";
import { Container } from "../../../styles/styles";
import { GET_PRODUCTS } from "../../../services/Api";
import { Main } from "../../Home/styles";

const DefaultProduts = () => {
  const { data, error, loading, request } = useFecth();
  React.useEffect(() => {
    async function GetProduts() {
      const { url, options } = GET_PRODUCTS();
      await request(url, options);
    }
    GetProduts();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <ErroMessage error={error} />;
  if (data)
    return (
      <ProdutoStyle>
        <IntroOnPage text="Bolos e Salgados" Bg={Encomendas} />
        <BorderTitles text="Bolos" />
        <Container>
          <Main>
            {data[0].produtos.map((item) => (
              <Card attributes={item} key={item.id} />
            ))}
          </Main>
        </Container>
        <BorderTitles text="Salgados" />
        <Container>
          <Main>
            {data[1].produtos.map((item) => (
              <Card attributes={item} key={item.id} />
            ))}
          </Main>
        </Container>
      </ProdutoStyle>
    );
  return null;
};

export default DefaultProduts;
