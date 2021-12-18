import { Card, CupCakeStyle, MainCard } from './styles';
import { Title, Container, Links } from '../../../styles/styles';
import Image from '../../../components/Image/Image';
const CupCakeCard = ({ cupcakes }) => {
  if (cupcakes)
    return (
      <Container>
        <CupCakeStyle>
          <Title>COPY CAKES PARA a sua festa</Title>
          <MainCard>
            {cupcakes.produtos.map((item) => {
              return (
                <Card key={item.id}>
                  <Image url={item.fotos[0]} path={item.fotos[0].url} />
                  <main>
                    <h1>{item.nome}</h1>
                    <h4>{item.preco}, MT</h4>
                    <Links
                      to={`product/${item.nome
                        .split(' ')
                        .join('-')
                        .toLowerCase()}`}
                    >
                      Comprar
                    </Links>
                  </main>
                </Card>
              );
            })}
          </MainCard>
        </CupCakeStyle>
      </Container>
    );
  return null;
};
export default CupCakeCard;
