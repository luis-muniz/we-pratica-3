import React from 'react';
import GlobalRoutes from './routes/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalRoutes />
      <GlobalStyle />
    </>
  );
};

export default App;
