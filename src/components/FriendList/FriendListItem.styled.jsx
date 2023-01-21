import styled from "styled-components";
import setIsOnlineColor from 'utils/setIsOnlineColor';

export const Friend = styled.li`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 10px 20px;
  gap: 15px;
  width: 450px;
  border-radius: 10px;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  background-color: white;`;

export const Status = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ online }) => {
    return setIsOnlineColor(online);
    }
  }
  `;

export const Avatar = styled.img`
  height: 80px;
  width: auto;
  border-radius: 10px;
  border: 1px solid #9faab6;`;

export const Name = styled.p`font-size: 32px;`;