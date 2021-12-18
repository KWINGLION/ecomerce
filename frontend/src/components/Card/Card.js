import Image from '../Image/Image';
import { Links } from '../../styles/styles';
import { CardStyle } from './styles';

const Card = ({ attributes }, key) => {
  if (attributes) {
    const { nome, preco, fotos } = attributes;
    return (
      <CardStyle key={key}>
        <Image url={fotos[0]} />
        <h3>{nome}</h3>
        <p>{preco} MT</p>
        <Links to={`product/${nome.split(' ').join('-').toLowerCase()}`}>
          Comprar
        </Links>
      </CardStyle>
    );
  }
  return null;
};

export default Card;
