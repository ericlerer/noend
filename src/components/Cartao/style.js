import styled from "styled-components";


const Container = styled.div`
    width: 45%;
    border-radius: 5px;
    border: solid 1px black;
    display: flex;
    flex-direction: row;
    column-gap: 1.5em;
    margin: 10px;
    padding: 0 1em;
    background-color: white;

`;

const Simbolo = styled.span`
    font-weight: bolder;
    width: 9em;
`;

const Descricao = styled.span`
    font-style: italic;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 1.5em;
`;

const Momento = styled.span`
    font-family: monospace;
`;

const Criticidade = styled.span`
    background-color: yellow;
`;

const Setor = styled.span`
    font-style: italic
`;

const Imagem = styled.img`
margin-left: 87%;
margin-top: 50px;

`;

export { Container, Simbolo, Descricao, Criticidade, Momento, Setor, Imagem };
