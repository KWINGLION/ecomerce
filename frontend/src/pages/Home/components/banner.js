import { Container, Links, Title } from '../../../styles/styles';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BannerStyle } from './styles';
import Image from '../../../components/Image/Image';

const Banner = ({ intro }) => {
  const { imagem_do_banner } = intro;
  return (
    <BannerStyle>
      <Image url={imagem_do_banner} />
      <Container>
        <main>
          <Title>{intro.Introducao}</Title>
          <Links to='product'>
            <BsFillTelephoneFill />
            Encomendar
          </Links>
        </main>
      </Container>
    </BannerStyle>
  );
};
export default Banner;
