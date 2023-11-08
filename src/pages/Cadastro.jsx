
import logo from './logom.png';
import img from'./imgcad.svg';
import Menu from "../components/Menu/Menu";
import { CadDiv } from './cad';


function Cadastro(){
    return(
        <>
            <Menu />
            <CadDiv>
                <div>
                <img src={logo} className='logologo' alt="logo" />
                </div>
            <div className='Container'>
                            <div className='Chad-image'>
                                <img src= {img} alt='Imagem ilustrativa' title='Imagem ilustrativa ' />
                                </div>
                            <div className='Chad'>
                                <form action="#">
                                    <div className='Chad-header'>
                                        <div className='Chad-title'>
                                            <h1 className=''>Cadastrar Usuário</h1>
                                        </div>
                                    </div>
                                    
                                    <div className='Input-group'>
                                        <div className='Input-box'>
                                            <label for='fullname'>Nome completo</label>
                                            <input id='fullname' type='text' name='fullname' placeholder='Digite seu nome' required/>
                                        </div>

                                        <div className='Input-box'>
                                            <label for='email'>E-mail</label>
                                            <input id='email' type='email' name='email' placeholder='Digite seu email' required/>
                                        </div>

                                        <div className='Input-box'>
                                            <label for='password'>Senha</label>
                                            <input id='password' type='password' name='password' placeholder='Digitar senha' required/>
                                        </div>

                                        <div className='Input-box'>
                                            <label for='Confirmpassword'>Confirmar senha</label>
                                            <input id='Confirmpassword' type='password' name='Confirmpassword' placeholder='Digitar senha' required/>
                                        </div>

                                        <div className='Input-box'>
                                            <label for='setor'>Setor</label>
                                            <input id='setor' type='setor' name='setor' placeholder='Digitar setor' required/>
                                        </div>

                                    </div>

                                    <div className='Send-button'>
                                            <button><a href='#'>Cadastrar</a></button>
                                    </div>
                                </form>
                            </div>
                        </div>
            </CadDiv>
        </>
    );
}

export default Cadastro;



