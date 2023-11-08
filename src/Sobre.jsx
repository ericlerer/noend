import Menu from "./components/Menu/Menu";
import Cartao from "./components/Cartao/Cartao";
import imagem from "./pages/logom.png";
import { Imagem } from "./components/Cartao/style";
import { SobreDiv } from "./sob";


const Sobre = () => (
    <>
    <SobreDiv>
    <div className='body'>
    <Menu />
    <center><h1><i>Visualizar chamado</i></h1></center>
    <center>
    <Cartao
        simb={"Guilherme Duran"}
        data={"28/02/1884"}
        setor={"Financeiro"}
        critico={"urgente"}
    />
    <Cartao 
        simb={"Thiago Henrique "}
        data={"30/01/2002"}
        setor={"Financeiro"}
        critico={"urgente"}
    />
    <Cartao 
        simb={"Luis Pastura "}
        data={"05/03/1995"}
        setor={"Científico"}
        critico={"urgente"}
    />
    <Cartao
        simb={"Manuela Tostes"}
        data={"10/05/2004"}
        setor={"Financeiro"}
        critico={"urgente"}
    />
       <Cartao 
        simb={"Joe Mello"}
        data={"29/07/1953"}
        setor={"Jurídico"}
        critico={"urgente"}
    />
    <Cartao 
        simb={"Guilherme Firmeza"}
        data={"04/11/1945"}
        setor={"Medicina"}
        critico={"urgente"}
    />
    <Cartao 
        simb={"Leo Villaca"}
        data={"15/08/1998"}
        setor={"Financeiro"}
        critico={"urgente"}
    />
    <Cartao
        simb={"Joao Mesquita"}
        data={"13/12/2008"}
        setor={"Jurídico"}
        critico={"urgente"}
    />
     <Cartao 
        simb={"Bruno Filho"}
        data={"04/11/1945"}
        setor={"Medicina"}
        critico={"urgente"}
    />
    <Cartao 
        simb={"Matheus Norica"}
        data={"15/08/1998"}
        setor={"Financeiro"}
        critico={"urgente"}
    />
    <Cartao
        simb={"Breno Souza"}
        data={"13/12/2008"}
        setor={"Jurídico"}
        critico={"urgente"}
    />
        <Cartao
        simb={"Ian Amoedo"}
        data={"13/12/2008"}
        setor={"Jurídico"}
        critico={"urgente"}
    />
     <Cartao 
        simb={"Joao Iacona"}
        data={"04/11/1945"}
        setor={"Medicina"}
        critico={"urgente"}
    />
    <Cartao 
        simb={"Cesar Fandango"}
        data={"15/08/1998"}
        setor={"Financeiro"}
        critico={"urgente"}
    />
    <Cartao
        simb={"Gustavo Raia"}
        data={"13/12/2008"}
        setor={"Jurídico"}
        critico={"urgente"}
    />
    <Cartao
        simb={"Bruno Filho"}
        data={"13/12/2008"}
        setor={"Medicina"}
        critico={"urgente"}
    />
    <Cartao
        simb={"Breno Souza"}
        data={"13/12/2008"}
        setor={"Jurídico"}
        critico={"urgente"}
    />
    <Cartao
        simb={"Eduardo Mangeli"}
        data={"13/12/2008"}
        setor={"Jurídico"}
        critico={"urgente"}
    />
    </center>

    <Imagem src={imagem} />
    </div>
    </SobreDiv>
 </>
);


export default Sobre;