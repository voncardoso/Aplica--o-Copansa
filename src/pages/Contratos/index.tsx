import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../config/firebase";
import {
  ContarctContainer,
  ContarctHeader,
  ContarctSection,
  ContarctTableSection,
  ContarctTableTbody,
  ContarctTableThead,
} from "./style";

export function Contratos() {
  useEffect(() => {}, []);

  useEffect(() => {
    async function getContracts() {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }
    getContracts();
  });

  return (
    <ContarctContainer>
      <ContarctHeader>
        <h4>Contratos</h4>
      </ContarctHeader>

      <ContarctSection>
        <ContarctTableSection>
          <ContarctTableThead>
            <tr>
              <th>EMPRESA</th>
              <th>DATA</th>
              <th>VALOR</th>
              <th>ÍNICIO</th>
              <th>FIM</th>
              <th>STATUS</th>
            </tr>
          </ContarctTableThead>
          <ContarctTableTbody>
            <tr className="dados">
              <td>
                <p>156.320,48</p>
                <div>
                  <p>CONSORCIO ANANINDEU 31/01/2018 31/01/2024</p>
                </div>
              </td>
              <td>
                <span>0.000%</span>
              </td>
              <td>
                <p>R$0,00</p>
              </td>
              <td>
                <p>R$0,00</p>
              </td>
              <td>
                <p>R$0,00</p>
              </td>
              <td>
                <p>R$0,00</p>
              </td>
            </tr>

            <tr className="dados">
              <td>
                <p>156.320,48</p>
                <div>
                  <p>CONSORCIO ANANINDEU 31/01/2018 31/01/2024</p>
                </div>
              </td>
              <td>
                <span>0.000%</span>
              </td>
              <td>
                <p>R$0,00</p>
              </td>
              <td>
                <p>R$0,00</p>
              </td>
              <td>
                <p>R$0,00</p>
              </td>
              <td>
                <p>R$0,00</p>
              </td>
            </tr>

            <tr className="dados">
              <td>
                <p>156.320,48</p>
                <div>
                  <p>CONSORCIO ANANINDEU 31/01/2018 31/01/2024</p>
                </div>
              </td>
              <td>
                <span>0.000%</span>
              </td>
              <td>
                <p>R$0,00</p>
              </td>
              <td>
                <p>R$0,00</p>
              </td>
              <td>
                <p>R$0,00</p>
              </td>
              <td>
                <p>R$0,00</p>
              </td>
            </tr>
          </ContarctTableTbody>
        </ContarctTableSection>
      </ContarctSection>
    </ContarctContainer>
  );
}
