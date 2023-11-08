import styled from "styled-components";

const MinhaDiv = styled.div`
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .Login-logo{
    position: fixed;
  bottom: 0;
  right: 0;
  }
}

.App-header {
  background-color: #3191F5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.Square-mid{
  width: 551px;
  height: 576px;
  left: 684px;
  top: 270px;
  justify-content: center;

  background: #0B1015;
  border: 1px solid #FFFFFF;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  border-radius: 24px;
  }


#Nome-usuario{
  box-sizing: border-box;
  font-size: 25px;
  padding-left: 1%;

  position: absolute;
  width: 426px;
  height: 72px;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);

  background: #FFFFFF;
  mix-blend-mode: normal;
  border: 1px solid #000000;
  border-radius: 25px;
}

#Senha-usuario{
  box-sizing: border-box;
  font-size: 25px;
  padding-left: 1%;

  width: 426px;
  height: 72px;
  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -53%);

  background: #FFFFFF;
  mix-blend-mode: normal;
  border: 1px solid #000000;
  border-radius: 25px;
}

#H-destaque{
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  transform: translate(-50%);

}

#B-entrar{
  box-sizing: border-box;

  position: absolute;
  width: 426px;
  height: 72px;
  left: 50%;
  top: 68%;
  transform: translate(-50%, -68%);
  justify-content: center;
  text-decoration: none;
  font-size: 200%;
  color: #FFFFFF;
  
  background: rgba(15, 15, 48, 0.5);
  border-radius: 30px;
} 

#B-esquecer{
  box-sizing: border-box;
  position: absolute;
  color: #282c34;
  top: 72%;
  right: 37%;

  justify-content: center;
  text-decoration: none;
  font-size: small;
}
`;

const MeuNav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 2em;
    justify-content: center;
    background-color: #214BDE;
    color: white;
    font-size: large;
    padding: 0.5em;
    a {
        text-decoration: none;
        color: white;
    }
`;



export { MeuNav, MinhaDiv };