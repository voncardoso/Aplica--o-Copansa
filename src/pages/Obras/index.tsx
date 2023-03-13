import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { ContarctContainer } from "../Contratos/style";
import * as Dialog from '@radix-ui/react-dialog';
import { ButtonModal, ConstructionContainer, ConstructionHeader, ContainerModal, Content, ContructionSection, FormModal, InputModal, Overlay, Title } from "./style";

export function Obras() {
    const [contracConstruction, setContractsConstruction] = useState<any>({});
    const params = useParams()

    useEffect(() => {
    async function getContracts() {
      const collectionRef = doc(db, "budgets", `${params.id}`);
      const querySnapshot = await getDoc(collectionRef);
      setContractsConstruction(querySnapshot.data())
    }
    getContracts();
  }, [params.id]);

  console.log(contracConstruction)
  return(
    <ContarctContainer>
        <ConstructionHeader>
            <h3>{contracConstruction.contract?.service}</h3>
        </ConstructionHeader>
        <Title>Contrato</Title>
        <ContructionSection>
            <ul>
                <li>
                    <strong>Contrato</strong>
                    <p>{contracConstruction.contract?.id}</p>
                </li>
                <li>
                    <strong>Serviço</strong>
                    <p>{contracConstruction.contract?.service}</p>    
                </li>
                <li>
                    <strong>Valor</strong>
                    <p>{contracConstruction.contract?.value.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })}</p>
                </li>
            </ul>
        </ContructionSection>
        <Title>Contratante</Title>
        <ContructionSection>
            <ul>
                <li>
                    <strong>Contratante</strong>
                    <p>{contracConstruction.contractor?.fonte}</p>
                </li>
                <li>
                    <strong>Valor</strong>
                    <p>
                        {contracConstruction.contractor?.value.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                            })
                        }
                    </p>    
                </li>
                <li>
                </li>
            </ul>
        </ContructionSection>
        <Title>Financiamento</Title>
        <ContructionSection>
            <ul className="GridFor">
                <li>
                    <strong>Financiamento</strong>
                    <p>{contracConstruction.financing?.sigla}</p>
                </li>
                <li>
                    <strong>Contrato</strong>
                    <p>{contracConstruction.financing?.contract}</p>
                </li>
                <li>
                    <strong>Fonte</strong>
                    <p>{contracConstruction.financing?.fonte}</p>    
                </li>
                <li>
                    <strong>Valor</strong>
                    <p>
                        {contracConstruction.financing?.value.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })
                        }
                    </p>    
                </li>
            </ul>
        </ContructionSection>
                        
        <ContainerModal >
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <ButtonModal>Adicionar KML</ButtonModal>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Overlay />
                    <Content>
                        <Dialog.Title>Adicinar KML</Dialog.Title>
                        <FormModal action="">
                            <InputModal type="file" />

                            <button>Adicionar</button>
                        </FormModal>
                        <Dialog.Close/>
                    </Content>
            </Dialog.Portal>
        </Dialog.Root>
        </ContainerModal >
    </ContarctContainer>
)
}