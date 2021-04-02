import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const Container = styled.div<Props>`
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  position: relative;
  margin: 100px auto;
  border-radius: 8px;
  max-width: 500px;
  height: 600px;
  padding: 8px;

  > button {
    width: 25px;
    height: 25px;
    margin-left: auto;
    margin-right: 5px;
  }

  > h2 {
    text-align: center;
    font-weight: 500;
  }

  > form {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 0px 10px;

    > .inputs-group {
      display: flex;
      flex-direction: column;

      > label {
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        > input {
          height: 30px;
        }
      }
    }

    > button {
      background-color: #8bcb0c;
      height: 40px;
      margin-top: auto;
      margin-bottom: 10px;
      border-radius: 8px;
      font-size: 16px;
      color: #fff;
    }
  }
`;

export default Container;
