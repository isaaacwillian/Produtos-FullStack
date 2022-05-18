import Input from "../../components/Input";
import { Form } from "@unform/web";
import * as yup from "yup";
import { FiMail, FiLock } from "react-icons/fi";
import { useRef } from "react";
import { Container, Content } from "./style";
import getValidationsErrors from "../../utils/getValidationErros";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useDispatch } from "react-redux";
import { turnAuthTrueSuccess } from "../../store/modules/auth/action";

export default function Login() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  async function handleFormSubmit(data) {
    try {
      const schema = yup.object().shape({
        email: yup.string().email("Digite um email válido").required("Email é obrigatório"),
        password: yup.string().min(6, "Senha mínimo 6 caracteres").required("Senha é obrigatória!"),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current?.setErrors({});
      await api.post("/user/login", data, { withCredentials: true });

      dispatch(turnAuthTrueSuccess());
      console.log("a");
    } catch (error) {
      console.log(error);
      if (error instanceof yup.ValidationError) {
        const errors = getValidationsErrors(error);
        return formRef.current?.setErrors(errors);
      }

      if (error.response?.data === "Email or password is incorrect") {
        return formRef.current?.setErrors({
          email: "Email ou senha está incorreto",
        });
      }
    }
  }
  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <h2>Faça o login!</h2>
          <Input name="email" placeholder="Email" Icon={FiMail} />
          <Input name="password" type="password" placeholder="Senha" Icon={FiLock} />
          <Button type="submit">Login</Button>
        </Form>
        <p>
          Novo aqui? <Link to="/register">Criar conta</Link>
        </p>
      </Content>
    </Container>
  );
}
