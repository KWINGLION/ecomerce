import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/theme";

const animeLeft = keyframes`  
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
 `;

export const AnimeLeft = styled.p`
  margin: 1rem 0;
  animation: ${animeLeft} 0.3s;
`;

export const Faqs = styled.section`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
  border-radius: 4px;

  div {
    padding: 1rem 2rem;
    line-height: 1.5;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Answer = styled.div`
  background: #a86b3c;
  display: grid;
  gap: 0.6rem;
  border-radius: 4px 0 0 4px;
`;
export const AnswerChild = styled.div`
  border-radius: 4px;
  padding: 0.8rem;
  cursor: pointer;
  color: white;
  background: ${(props) => (props.active ? theme.colors.baseSmooth : "none")};
  color: ${(props) => (props.active ? theme.colors.black : "white")};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    background: ${theme.colors.baseSmooth};
    color: ${theme.colors.black};
  }
`;
export const Respo = styled.div`
  background: #fae9de;
  color: #252525;
  border-radius: 0 4px 4px 0;
`;
