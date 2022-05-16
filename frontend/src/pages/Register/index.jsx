import Input from "../../components/Input";
import { Form } from "@unform/web";
import * as yup from "yup";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Container, Content } from "./style";
import { useRef } from "react";
import getValidationsErrors from "../../utils/getValidationErros";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export default function Login() {
  const formRef = useRef(null);

  async function handleFormSubmit(data) {
    try {
      const schema = yup.object().shape({
        username: yup.string().required("Nome é obrigatório"),
        email: yup.string().email("Digite um email válido").required("Email é obrigatório"),
        password: yup.string().min(6, "Senha mínimo 6 caracteres").required("Senha é obrigatória"),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current?.setErrors({});
      const a = await api.post("/user/register", data);
      console.log(a);
    } catch (error) {
      console.log(error);
      if (error instanceof yup.ValidationError) {
        const errors = getValidationsErrors(error);
        return formRef.current?.setErrors(errors);
      }
    }
  }
  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <h2>Registre-se!</h2>
          <Input name="username" placeholder="Nome" Icon={FiUser} />
          <Input name="email" placeholder="Email" Icon={FiMail} />
          <Input name="password" type="password" placeholder="Senha" Icon={FiLock} />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <p>
          Já tem uma conta? <Link to="/login">Faça o login!</Link>
        </p>
      </Content>
    </Container>
  );
}
