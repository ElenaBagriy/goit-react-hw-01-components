import styled from "styled-components";

export const StatisticsTable = styled.section`
  display: block;
  width: 450px;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  background-color: white;`;

export const Title = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 36px;
  text-align: center;`;

export const StatList = styled.ul`display: flex;`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;`;

export const Label = styled.span`font-size: 20px;`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 700;`;