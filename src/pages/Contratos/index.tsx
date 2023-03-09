import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import {
  ContarctContainer,
  ContarctHeader,
  ContarctSection,
  ContarctTableSection,
  ContarctTableTbody,
  ContarctTableThead,
  Status,
} from "./style";

export function Contratos() {
  const [contracts, setContracts] = useState<any>([])

  useEffect(() => {
    async function getContracts() {
      const collectionRef = collection(db, "contracts")
      const querySnapshot = await getDocs(collectionRef);
      setContracts(querySnapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id})))
    }
    getContracts();
  },[]);


  return (
    <ContarctContainer>
      <ContarctHeader>
        <h4>Contratos</h4>
      </ContarctHeader>

      <ContarctSection>
        <ContarctTableSection>
          <ContarctTableThead>
            <tr>
              <th>Contrato</th>
              <th>VALOR</th>
              <th>ÍNICIO</th>
              <th>FIM</th>
              <th>STATUS</th>
            </tr>
          </ContarctTableThead>
          <ContarctTableTbody>
            {contracts.map((contract: any) =>{
              return(
                <tr className="dados">
              <td>
                <p>{contract.contract.id}</p>
                <div>
                  <p>{contract.company.name}</p>
                </div>
              </td>
              <td>
                <p>{contract.contract.value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
              </td>
              <td>
                <p>{contract.dates.contract.start}</p>
              </td>
              <td>
                <p>{contract.dates.contract.end}</p>
              </td>
              <Status variant={contract.status}>
                <p>{contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}</p>
              </Status >
            </tr>
              )
            })}
          </ContarctTableTbody>
        </ContarctTableSection>
      </ContarctSection>
    </ContarctContainer>
  );
}
