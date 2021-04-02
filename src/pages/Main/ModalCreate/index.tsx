import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import api from '../../../services/api';
import Container, { Content } from './styles';

interface Company {
  id: string;
  url: string;
  name: string;
  description: string;
}

interface Props {
  isVisible: boolean;
  cancel: () => void;
  create: (company: Company) => void;
}

const ModalCreate: React.FC<Props> = ({ isVisible, cancel, create }) => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  async function handleAdd() {
    const { data } = await api.post('/companies', { name, url, description });
    alert('Empresa cadastrada com sucesso!');
    create(data);
  }

  return (
    <Container isVisible={isVisible}>
      <Content>
        <button type="button" onClick={() => cancel()}>
          <AiOutlineClose size={20} color="red" />
        </button>
        <h2>Adicione uma empresa nova</h2>
        <form>
          <div className="inputs-group">
            <label htmlFor="url">
              Adicione o link (URL) da imagem da empresa abaixo:
              <input
                id="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                type="text"
              />
            </label>
            <label htmlFor="name">
              Adicione o nome da empresa abaixo:
              <input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
              />
            </label>
            <label htmlFor="description">
              Adicione uma breve descrição da empresa abaixo:
              <input
                id="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                type="text-area"
              />
            </label>
          </div>
          <button type="button" onClick={handleAdd}>
            Adicionar
          </button>
        </form>
      </Content>
    </Container>
  );
};

export default ModalCreate;
