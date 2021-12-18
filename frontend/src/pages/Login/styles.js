import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LoginGet = styled.form`
  display: grid;
  gap: 0.6rem;
  max-width: 600px;
  width: 100%;

  h1 {
    margin-bottom: 2rem;
  }

  a {
    padding: 0.6rem 0;
    color: ${theme.colors.link};
  }
  p {
    a {
      color: ${theme.colors.tomato};
    }
  }
`;
export const LoginContainer = styled.main`
  margin: 8rem 0;
`;


