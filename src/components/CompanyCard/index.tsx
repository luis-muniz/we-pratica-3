import React, { useState } from 'react';

import CardContainer from './styles';
import logo from '../../assets/pizza.png';
import editar from '../../assets/editar.png';
import excluir from '../../assets/excluir.png';
import ModalUpdate from '../../pages/Main/ModalUpdate';

interface Company {
  id: string;
  url: string;
  name: string;
  description: string;
}

interface Props {
  id: string;
  name: string;
  url: string;
  description: string;
  readonly functionDelete: (id: string) => Promise<void>;
  readonly functionUpdate: (company: Company) => void;
}

const CompanyCard: React.FC<Props> = ({
  id,
  name,
  url,
  description,
  functionDelete,
  functionUpdate,
}) => {
  const [isModalUpdate, setIsModalUpdate] = useState(false);

  function handleUpdate(): void {
    setIsModalUpdate(true);
  }

  function handleCancel(): void {
    setIsModalUpdate(false);
  }

  function handleSave(company: Company): void {
    setIsModalUpdate(false);
    functionUpdate(company);
  }

  return (
    <>
      <CardContainer>
        <img src={url} alt="" />
        <div className="info">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="btn-group">
          <button type="button" onClick={handleUpdate}>
            <img src={editar} alt="Editar" />
          </button>
          <button type="button" onClick={() => functionDelete(id)}>
            <img src={excluir} alt="Apagar" />
          </button>
        </div>
      </CardContainer>

      {isModalUpdate && (
        <ModalUpdate
          company={{ id, name, url, description }}
          cancel={handleCancel}
          update={handleSave}
          isVisible={isModalUpdate}
        />
      )}
    </>
  );
};

export default CompanyCard;
