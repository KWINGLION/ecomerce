import React from 'react';
import Card from '../../components/Card/Card';
import Sumary from '../../components/Sumary/Sumary';
import ErroMessage from '../../components/Helper/ErroMessage';
import CupCakeCard from './components/CupCakeCard';
import useFecth from '../../hooks/useFecth';
import Banner from './components/banner';
import Loading from '../../components/Helper/Loading';
import { Kit } from './components/Kit';
import { Container, Links } from '../../styles/styles';
import { DivConfir, Main } from './styles';
import { GET_HOME_CONTENT } from '../../services/Api';

const Home = () => {
  const { data, error, loading, request } = useFecth();
  React.useEffect(() => {
    async function fetchHome() {
      const { url, options } = GET_HOME_CONTENT();
      await request(url, options);
    }
    fetchHome();
  }, [request]);

  if (error) return <ErroMessage error={error} />;
  if (loading) return <Loading />;

  if (data)
    return (
      <>
        <Banner intro={data} />
        {data.destaque.map(({ titulo, descricao, produtos, id }) => {
          return (
            <div key={id}>
              <Sumary title={titulo} description={descricao} />
              <Container>
                <Main>
                  {produtos.map((item) => {
                    return <Card key={item.id} attributes={item} />;
                  })}
                </Main>
                <DivConfir>
                  <Links to='product'>Confira Todos</Links>
                </DivConfir>
              </Container>
            </div>
          );
        })}
        <Kit kit={data.kit} />
        <CupCakeCard cupcakes={data.cupcakes} />
      </>
    );
  return null;
};

export default Home;
