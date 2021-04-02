import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import add from '../../assets/add.png';
import Container from './styles';
import CompanyCard from '../../components/CompanyCard';
import ModalCreate from './ModalCreate';

interface Company {
  id: string;
  url: string;
  name: string;
  description: string;
}

const Main: React.FC = () => {
  const [companies, setCompanies] = useState([] as Company[]);
  const [isModalCreate, setIsModalCreate] = useState(false);

  useEffect(() => {
    api.get('/companies').then(({ data }) => setCompanies(data));
  }, []);

  async function handleDelete(id: string): Promise<void> {
    await api.delete(`/companies/${id}`);
    alert('Deletado com sucesso!');
    const newCompanies = companies.filter(company => company.id !== id);
    setCompanies(newCompanies);
  }

  function handleAdd(): void {
    setIsModalCreate(!isModalCreate);
  }

  function handleCancel(): void {
    setIsModalCreate(false);
  }

  function handleCreate(company: Company): void {
    setIsModalCreate(!isModalCreate);
    setCompanies([...companies, company]);
  }

  function handleUpdate(companyUpdated: Company): void {
    const companiesUpdated = companies.map(company => {
      if (company.id === companyUpdated.id) {
        return {
          id: company.id,
          description: companyUpdated.description,
          name: companyUpdated.name,
          url: companyUpdated.url,
        };
      }
      return company;
    });
    setCompanies(companiesUpdated);
  }

  return (
    <Container>
      <header>
        <img src={logo} alt="logo" />
        <button type="button" onClick={handleAdd}>
          <img src={add} alt="add" />
        </button>
      </header>
      <main>
        {companies.length === 0 ? (
          <h1>Sem empresas</h1>
        ) : (
          companies.map(company => {
            return (
              <CompanyCard
                key={company.id}
                id={company.id}
                name={company.name}
                url={company.url}
                description={company.description}
                functionDelete={handleDelete}
                functionUpdate={handleUpdate}
              />
            );
          })
        )}
      </main>
      {isModalCreate && (
        <ModalCreate
          cancel={handleCancel}
          create={handleCreate}
          isVisible={isModalCreate}
        />
      )}
    </Container>
  );
};

export default Main;
