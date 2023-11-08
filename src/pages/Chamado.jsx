import Menu from '../components/Menu/Menu';
import { NossaDiv } from './chad';
import imagem from '../pages/tec.png';

//ze
function Chamado () {
    return(
        <>
            <Menu />
                <NossaDiv>
                        <div className='Container'>
                            <div className='Chad-image'>
                                <img src= {imagem} alt='Imagem ilustrativa' title='Imagem ilustrativa ' />
                                </div>
                            <div className='Chad'>
                                <form action="#">
                                    <div className='Chad-header'>
                                        <div className='Chad-title'>
                                            <h1 className=''>Abrir Chamados</h1>
                                        </div>
                                    </div>
                                    
                                    <div className='Input-group'>
                                        <div className='Input-box'>
                                            <label for='Firstname'>Nome</label>
                                            <input id='firstname' type='text' name='firstname' placeholder='Digite seu nome' required/>
                                        </div>

                                        <div className='Input-box'>
                                            <label for='Lastname'>Sobrenome</label>
                                            <input id='lastname' type='text' name='lastname' placeholder='Digite seu sobrenome' required/>
                                        </div>

                                        <div className='Input-box'>
                                            <label for='Sector'>Setor</label>
                                            <input id='sector' type='text' name='sector' placeholder='Digite seu setor' required/>
                                        </div>

                                        <div className='Input-box'>
                                            <label for='Description'>Descrição</label>
                                            <input id='description' type='text' name='fdescription' placeholder='Descrição' required/>
                                        </div>

                                    </div>
                            
                                    <div className='Criticity-inputs'>
                                        <div className='Criticity-titles'>
                                            <h6>Nível de Criticidade</h6>
                                        </div>

                                        <div className='Criticity-group'>
                                            <div className='Criticity-input'>
                                                <input type='checkbox' id='alto' name='Nível de criticidade'/>
                                                <label for='alto'>Alto</label>
                                            </div>

                                            <div className='Criticity-input'>
                                                <input type='checkbox' id='medio' name='Nível de criticidade'/>
                                                <label for='medio'>Médio</label>
                                            </div>

                                            <div className='Criticity-input'>
                                                <input type='checkbox' id='baixo' name='Nível de criticidade'/>
                                                <label for='baixo'>Baixo</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='Send-button'>
                                            <button><a href='#'>Enviar</a></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                </NossaDiv>
        </> 
    );
    }

export default Chamado;