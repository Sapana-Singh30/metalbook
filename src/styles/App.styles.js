import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start; 
  gap: 2rem;
  margin-top: 20px;
`;

export const LeftColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;