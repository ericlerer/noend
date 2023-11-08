import logo from './logom.png';
import Menu from '../components/Menu/Menu';
import { MinhaDiv } from '../components/Menu/style';

function App() {
  return (
    <MinhaDiv>
    <div className="App">
      <Menu className="Menu" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
    </MinhaDiv>
  );
}

export default App;