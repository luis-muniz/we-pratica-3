import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  background-color: #fff;
  border-radius: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    transform: scale(1.03);
  }

  > img {
    max-width: 100%;
    max-height: 60%;
    border-radius: 21px 21px 0px 0px;
    object-fit: cover;
  }

  > .info {
    padding: 10px;

    > h1 {
      font-weight: 600;
    }

    > p {
      font-size: 16px;
      font-weight: 300;
      color: #565252;
      text-align: justify;
    }
  }

  > .btn-group {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 10px;
    padding: 0px 10px;

    > button {
      border: none;
      background-color: transparent;
    }
  }
`;

export default CardContainer;
