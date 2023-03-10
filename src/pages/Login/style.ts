import styled from "styled-components";
import BackgoundImg from "../../assets/Background-login.png";
export const LoginContainer = styled.section`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const InfoLogin = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;

  > div {
    width: 100%;
    display: flex;
    margin-top: 60px;
    img {
      margin: 0 auto;
      position: relative;
    }
  }
`;

export const FormLogin = styled.form`
  margin-top: 127px;
  max-width: 517px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 20px 0px 20px;

  h1 {
    margin-bottom: 40px;
    font-size: 2.25rem;
    font-weight: bold;
    line-height: 42px;
  }

  label {
    font-size: 1.125rem;
  }

  input {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: none;
    background: #ffffff;
    font-size: 1rem;
    margin-top: 5px;
    margin-bottom: 20px;

    &:focus {
      outline: transparent;
      box-shadow: 0 0 0 2px ${(props) => props.theme["green"]};;
    }
  }

  button {
    margin-top: 40px;
    width: 100%;
    font-size: 1.625rem;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background: ${(props) => props.theme["green"]};
    font-weight: 500;
    color: white;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme["green-houver"]};
    }
  }
`;

export const BackgroundImg = styled.div`
  background-image: url(${BackgoundImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  @media (max-width: 913px) {
    display: none;
  }
`;
