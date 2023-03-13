import styled from "styled-components";

export const ContarctContainer = styled.main`
  width: 100%;
  margin: 0 auto;
`;

export const ContarctHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background: ${(props) => props.theme["whithe"]};
`;

export const ContarctSection = styled.section`
  width: 90vw;
  margin: 10px auto;
  padding: 10px 20px;
  background: ${(props) => props.theme["whithe"]};
  border-radius: 10px;
  h1{
    margin-bottom: 10px;
  }
`;

export const ContarctTableSection = styled.table`
  width: 100%;
  overflow: scroll;
  text-align: left;
  border-collapse: collapse;
  background: ${(props) => props.theme["background"]};

`;

export const ContarctTableThead = styled.thead`
  background: ${(props) => props.theme["green"]};
  th {
    padding: 5px;
    font-size: 12px;
    color: ${(props) => props.theme["whithe"]};
    font-weight: 400;
    & + th {
      text-align: center;
    }

    &:first-child {
      width: 52%;
    }
  }
`;

export const ContarctTitleTable = styled.td`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContarctTableTbody = styled.tbody`
  width: 100%;
  margin-bottom: 60px;
  tr {
    td {
      padding: 10px;
      font-size: 14px;
    }
  }

  .dados {
    background: ${(props) => props.theme["whithe"]};
    border-bottom: 6px solid ${(props) => props.theme["background"]};
    cursor: pointer;
    td {
      padding: 10px 5px;
      font-size: 14px;
      &:first-child {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 10px;

        > p {
          padding: 5px;
          background: #D8D090;
          border-radius: 10px;
        }

        div {
        }
      }

      & + td {
        text-align: center;
      }
    }
  }

  .summary{
    background:${(props) => props.theme["whithe"]};
    border-bottom: 1px solid ${(props) => props.theme["background"]};
  }
`;

interface StatusProps {
  variant: 'ativo' | 'finalizado' | 'cancelado'
}


export const Status= styled.td<StatusProps>`
    padding: 10px;
    font-size: 14px;
    color: ${(props) => props.variant === 'ativo' ? props.theme["green-200"] : "" 
    || props.variant === 'finalizado' ? props.theme["red"]  : "" 
    ||  props.variant === 'cancelado' ? props.theme["yellow"] : ""};
`;

export const ContarctTableTheadTotal = styled.thead`
  background: ${(props) => props.theme["green"]};
  th {
    padding: 5px;
    font-size: 12px;
    color: ${(props) => props.theme["whithe"]};
    font-weight: 400;
    & + th {
      text-align: center;
    }

    &:first-child {
      width: 52%;
    }
  }
`;
