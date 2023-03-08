import logo from "../../assets/Logo.svg";
import { BackgroundImg, FormLogin, InfoLogin, LoginContainer } from "./style";
export function Login() {
  return (
    <LoginContainer>
      <InfoLogin>
        <div>
          <img src={logo} alt="" />
        </div>
        <FormLogin action="">
          <h1>Login</h1>
          <label htmlFor="">E-mail</label>
          <input type="text" />
          <label htmlFor="">Senha</label>
          <input type="text" />
          <button>Entrar</button>
        </FormLogin>
      </InfoLogin>

      <BackgroundImg></BackgroundImg>
    </LoginContainer>
  );
}
