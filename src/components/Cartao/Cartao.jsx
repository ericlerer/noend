import {  Container, Descricao, Momento, Simbolo, Criticidade,Setor } from "./style";

const Cartao = ( props ) => (

    <Container>
        <Simbolo>{ props.simb }</Simbolo>
        <Descricao>{props.descri}
            o chamado foi aberto na data 
        </Descricao>
       <Momento>{ props.data }</Momento> 
       <Criticidade>
            de nível  {props.critico}
        </Criticidade>
        <Setor>
            no setor de {props.setor}
        </Setor> 
       
        
    </Container>

);


export default Cartao;