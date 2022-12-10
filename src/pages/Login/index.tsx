import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const schema = yup.object({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "No mínimo 6 caracteres")
    .required("Campo obrigatório"),
}).required();

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  const { user, signIn, isUserLoading, logout } = useAuth();

  const handleLogin = (formData: IFormLogin) => {
    signIn(formData)
  }


  return (
    <Container>
      {
        user.email ?
          <LoginContainer>

            <Column>
            <Title>Usuário Logado</Title>
              <Spacing />
              <p>Email: {user.email}</p>
              <Spacing />
              <Button title="Sair" onClick={logout} isLoading={isUserLoading} />
            </Column>
          </LoginContainer>
          :
          <LoginContainer>
            <Column>
              <Title>Login</Title>
              <Spacing />
              <Input
                name="email"
                placeholder="Email"
                autoFocus
                control={control}
                errorMessage={errors?.email?.message}
              />
              <Spacing />
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                control={control}
                errorMessage={errors?.password?.message}
              />
              <Spacing />
              <Button title="Entrar" onClick={handleSubmit(handleLogin)} isDisabled={!isValid} isLoading={isUserLoading} />
            </Column>
          </LoginContainer>
      }
    </Container>
  );
};

export default Login;
