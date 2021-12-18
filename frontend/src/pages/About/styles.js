import styled from "styled-components";

export const AboutStyle = styled.section`
  margin: 3rem 0;

  display: flex;
  gap: 2rem;

  div {
    max-width: 40rem;
    @media (max-width: 800px) {
      order: 1;
    }
  }
  img {
    height: 20rem;
    max-width: 40rem;
    @media (max-width: 800px) {
      order: 0;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    .About img {
      order: 0;
      height: 20rem;
    }
  }
`;

export const Content = styled.div`
  p {
    margin: 1rem 0;
    line-height: 1.5;
  }
`;
