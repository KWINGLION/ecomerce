import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { List } from './styles';

const UserAccountList = () => {
  const { user } = React.useContext(UserContext);
  const [haveNull, SetHaveNull] = React.useState(false);

  const haveNullFunction = React.useCallback(() => {
    for (let i in user) if (user[i] === null) SetHaveNull(true);
  }, [user]);

  React.useEffect(() => {
    haveNullFunction();
  }, [haveNullFunction]);

  if (user)
    return (
      <List>
        <ul>
          <li>
            <strong>Nome do usuario:</strong> {user.username}
          </li>
          <li>
            <strong>Email:</strong> {user.email || '---'}
          </li>
          <li>
            <strong>Empresa (opcional):</strong> {user.empresa || '---'}
          </li>
          <li>
            <strong>Endereco :</strong> {user.endereco || '---'}
          </li>
          <li>
            <strong>Ponto de referencia:</strong> {user.referencia || '---'}
          </li>
          <li>
            <strong>Cidade e regiao:</strong> {user.cidade || '---'}
          </li>
        </ul>
        <div>
          <Link to='edit'>Editar</Link>
        </div>
        {haveNull && (
          <p>Certifique-se de preencher todos os dados de usuarios</p>
        )}
      </List>
    );
  return <p>Preencha teus dados</p>;
};

export default UserAccountList;
