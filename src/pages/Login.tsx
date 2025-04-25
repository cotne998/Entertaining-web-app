import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import LogoIcon from "/assets/logo.svg";
import { useNavigate } from "react-router-dom";

interface Inputs {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const handleLogIn = (data: Inputs) => {
    console.log(data);

    if (!errors.email && !errors.password) {
      navigate("/Main");
    }
  };

  return (
    <>
      <Logo src={LogoIcon} alt="Logo" />
      <LoginSection>
        <h1 className="login">Login</h1>
        <Form onSubmit={handleSubmit(handleLogIn)}>
          <InputsWrap>
            <InputDiv>
              <input
                style={{
                  borderBottom: errors.email ? "1px solid #fc4747" : "",
                }}
                placeholder="Email address"
                className="login-input"
                type="text"
                {...register("email", {
                  required: "Email must not be empty",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </InputDiv>
            <InputDiv>
              <input
                style={{
                  borderBottom: errors.password ? "1px solid #fc4747" : "",
                }}
                placeholder="Password"
                className="login-input"
                type="password"
                {...register("password", {
                  required: "Password must not be empty",
                  minLength: {
                    value: 6,
                    message: "must not be less than 6 ",
                  },
                })}
              />
              {errors.password && (
                <ErrorText>{errors.password.message}</ErrorText>
              )}
            </InputDiv>
          </InputsWrap>
          <button className="submit-button" type="submit">
            Login to your account
          </button>
        </Form>
      </LoginSection>
    </>
  );
}

const LoginSection = styled.section`
  background-color: #161d2f;
  padding: 3.2rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 40rem;
  margin: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const InputsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const InputDiv = styled.div`
  position: relative;
`;

const Logo = styled.img`
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 4.8rem;
  margin-bottom: 5.8rem;
`;

const ErrorText = styled.span`
  color: #fc4747;
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
`;
