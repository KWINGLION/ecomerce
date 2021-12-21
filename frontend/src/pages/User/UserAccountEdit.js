import React from 'react';
import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../Context/UserContext';
import { LoginGet } from '../Login/styles';
import { USERDATA_UPDATE } from '../../services/Api';
import ErrorServer from '../../components/Helper/ErrorServer';
import useFecth from '../../hooks/useFecth';

const UserAccountEdit = () => {
  const { user } = React.useContext(UserContext);
  const { data, request, loading, error } = useFecth();

  const nome = useForm('name', user.username);
  const email = useForm('email', user.email);
  const empresa = useForm(false, user.empresa);
  const endereco = useForm('name', user.endereco);
  const referencia = useForm('name', user.referencia);
  const pais = useForm('name', user.pais);
  const cidade = useForm('name', user.cidade);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nome.validate() &&
      email.validate() &&
      endereco.validate() &&
      referencia.validate() &&
      pais.validate() &&
      cidade.validate()
    ) {
      const token = window.localStorage.getItem('token');

      const { url, options } = USERDATA_UPDATE(user.id, token, {
        cidade: cidade.value,
        email: email.value,
        empresa: empresa.value || '',
        endereco: endereco.value,
        pais: pais.value,
        referencia: referencia.value,
        username: nome.value,
      });
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };
  return (
    <LoginGet onSubmit={handleSubmit}>
      <Input
        label='Nome'
        placeholder='Digite o seu nome'
        type='text'
        name='nome'
        {...nome}
      />
      <Input
        label='Email'
        placeholder='Digite o seu email'
        type='email'
        name='email'
        {...email}
      />
      <Input
        label='Empresa / Organizacao (opcional)'
        placeholder='Digite a sua empresa'
        type='text'
        name='empresa'
        {...empresa}
      />
      <Input
        label='Endereco'
        placeholder='Digite a sua empresa'
        type='text'
        name='endereco'
        {...endereco}
      />
      <Input
        label='Ponto de referencia'
        placeholder='Digite a um ponto de referencia'
        type='text'
        name='referencia'
        {...referencia}
      />
      <select name='pais' id='pais' value={pais.value} onChange={pais.onChange}>
        <option value='' disabled>
          Selecione o pais
        </option>
        <option value='mocambique'>Mocambique</option>
      </select>
      <ErrorServer error={pais.error} />
      <select
        name='cidade'
        id='cidade'
        value={cidade.value}
        onChange={cidade.onChange}
      >
        <option value='' disabled>
          Selecione a cidade
        </option>
        <option value='mocambique'>Matola</option>
        <option value='mocambique'>Maputo cidade</option>
        <option value='mocambique'>Boane</option>
        <option value='mocambique'>Magude</option>
        <option value='mocambique'>Manhiça</option>
        <option value='mocambique'>Marracuene</option>
        <option value='mocambique'>Matutuíne</option>
        <option value='mocambique'>Moamba</option>
        <option value='mocambique'>Namaacha</option>
      </select>
      <ErrorServer error={cidade.error} />
      <Input
        label='Cidade'
        placeholder='Digite o nome da cidade'
        type='text'
        name='cidade'
        {...cidade}
      />
      {loading ? (
        <Button disabled>...Carregando</Button>
      ) : (
        <Button>Gravar</Button>
      )}

      <ErrorServer error={error} />
    </LoginGet>
  );
};

export default UserAccountEdit;
