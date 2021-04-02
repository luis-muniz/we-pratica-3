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
  company: Company;
  isVisible: boolean;
  cancel: () => void;
  update: (company: Company) => void;
}

const ModalUpdate: React.FC<Props> = ({
  company,
  isVisible,
  cancel,
  update,
}) => {
  const [url, setUrl] = useState(company.url);
  const [name, setName] = useState(company.name);
  const [description, setDescription] = useState(company.description);

  async function handleSave() {
    const { data } = await api.patch(`/companies/${company.id}`, {
      data: { name, url, description },
    });
    alert('Empresa foi atualizada com sucesso!');
    update(data);
  }

  return (
    <Container isVisible={isVisible}>
      <Content>
        <button type="button" onClick={() => cancel()}>
          <AiOutlineClose size={20} color="red" />
        </button>
        <h2>Atualizar empresa</h2>
        <form>
          <div className="inputs-group">
            <label htmlFor="url">
              Atualize o link (URL) da imagem da empresa abaixo:
              <input
                id="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                type="text"
              />
            </label>
            <label htmlFor="name">
              Atualize o nome da empresa abaixo:
              <input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
              />
            </label>
            <label htmlFor="description">
              Atualize a descrição da empresa abaixo:
              <input
                id="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                type="text-area"
              />
            </label>
          </div>
          <button type="button" onClick={handleSave}>
            Salvar
          </button>
        </form>
      </Content>
    </Container>
  );
};

export default ModalUpdate;
