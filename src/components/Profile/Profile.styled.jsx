import styled from "styled-components";

export const UserWrapper = styled.div`
width: 450px;
border-radius: 10px;
font-weight: 700;
font-size: 24px;
box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
background-color: white;
`;

export const UserDescription = styled.div`
  text-align: center;
  padding: 48px 32px;`;

export const Avatar = styled.img`
  max-width: 150px;
  margin: 0 auto;
  border: 1px solid #9faab6;
  border-radius: 50%;`;

export const UserName = styled.p`
  margin-top: 48px;
  font-size: 36px;
  font-weight: 700;`;

export const UserTag = styled.p`
  margin-top: 16px;
  color: #9faab6;`;

export const UserLocation = styled.p`
  margin-top: 16px;
  color: #9faab6;`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #9faab6;
  background-color: #f4f6f9;`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 28px;
  padding-bottom: 28px;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);
  border-top: 1px solid #e5eaf0;
  
  &:not(:last-child) {border-right: 1px solid #e5eaf0};
  `;

export const Label = styled.span`
font-weight: 500;
`;

export const Quantity = styled.span`color: black;`
