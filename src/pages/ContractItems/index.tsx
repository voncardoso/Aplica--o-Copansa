import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import {
  HomeContainer,
  HomeHeader,
  HomeHeaderSection,
  HomeSection,
  HomeTableSection,
  HomeTableTbody,
  HomeTableThead,
  HomeTableTheadTotal,
} from "./style";

export function ContractItems() {
  const [contracItems, setContractsItems] = useState<any>([]);
  const params = useParams();
  const navigate = useNavigate()
  console.log(params.id);

  useEffect(() => {
    async function getContracts() {
      const collectionRef = collection(db, "budgets");
      const querySnapshot = await getDocs(collectionRef);
      setContractsItems(
        querySnapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
      );
    }
    getContracts();
  }, []);

  const existeContract = contracItems.filter((contract: any) => {
    return contract.contract.id === params.id;
  });


  const soma = existeContract.reduce(
    (acc: any, value: any) => {
      acc.totalValor += value.contract.value;
      acc.totalFinanciamento += value.financing.value;
      return acc;
    },
    {
      totalValor: 0,
      totalFinanciamento: 0,
    }
  );


  function handlecontructionItem(id: string){
    navigate(`/obras/${id}`)
  }
  
  return (
    <HomeContainer>
      <HomeHeader>
        <h4></h4>
      </HomeHeader>

      <HomeSection>
        <HomeHeaderSection>
          <p>OBRAS POR CONTRATO</p>
        </HomeHeaderSection>
        <HomeTableSection>
          <HomeTableThead>
            <tr>
              <th>CONTRATO / DESCRIÇÃO</th>
              <th>VALOR</th>
              <th>FONTE</th>
              <th>FINACIAMENTO</th>
              <th>CONTRATO</th>
              <th></th>
            </tr>
          </HomeTableThead>
          <HomeTableTbody>
            {existeContract.map((item: any) => {
              return (
                <tr className="dados" onClick={() =>{
                  handlecontructionItem(item.id)
                }}>
                  <td>
                    <p>{item.contract.id}</p>
                    <div>
                      <p>{`${item.financing.sigla} / ${item.contract.service}`}</p>
                    </div>
                  </td>
                  <td>
                    <span>
                      {item.contract.value.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </td>
                  <td>
                    <p>{item.financing.fonte}</p>
                  </td>
                  <td>
                    <p>
                      {item.financing.value.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </td>
                  <td>
                    <p>{item.financing.contract}</p>
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </HomeTableTbody>
          <HomeTableTheadTotal>
            <tr>
              <th>TOTAL</th>
              <th>
                {soma.totalValor.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </th>
              <th></th>
              <th>
                {soma.totalFinanciamento.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </th>
              <th></th>
              <th></th>
            </tr>
          </HomeTableTheadTotal>
        </HomeTableSection>
      </HomeSection>
    </HomeContainer>
  );
}
