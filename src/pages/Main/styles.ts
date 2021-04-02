import styled from 'styled-components';

const Container = styled.div`
  width: 80vw;
  height: 90vh;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 350px;
    }

    > button {
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 50%;
      background-color: transparent;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);

      &:hover {
        transform: scale(1.5);
        opacity: 0.9;
      }

      > img {
        width: 100%;
      }
    }
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 50px;
    grid-column-gap: 50px;
    margin-top: 30px;
  }
`;

export default Container;
