import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameCountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NameCountryTitle = styled.h1`
  font-size: 4.8rem;
`;

export const FeelsLikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 16px;
  align-items: center;
`;

export const FeelsLike = styled.p`
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const Title = styled.p`
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
`;

export const Image = styled.img`
  height: 7.2rem;
  width: 7.2rem;
`;

export const SectionContainer = styled.div`
  max-width: 56rem;
  width: 90%;
  justify-items: center;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-template-rows: auto;
  grid-gap: 0.8rem;
  justify-items: center;
  width: 100%;
  flex: 1;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px 16px;
  background: var(--primary-color);
  padding: 8px;
  height: 18rem;
  width: 15rem;
  border-radius: 12px;
  color: var(--background-color);
  transition: all 0.2s ease-in-out;
  justify-content: center;

  &:hover {
    transform: translateY(-4px);
  }

  > div {
    margin-top: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const SectionImage = styled.img`
  height: 7.2rem;
  width: 7.2rem;
  padding: 16px;
`;

export const SectionCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    height: 7.2rem;
    width: 7.2rem;
  }
`;
