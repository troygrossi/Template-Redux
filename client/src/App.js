import { Routes, Route } from 'react-router-dom';
import {CounterAppVanilla} from './pages/VanillaRedux/App'
import {CounterAppToolKit} from './pages/ToolKitRedux/App'

function App() {

  const toVanilla = () => {
    window.location.replace('/VanillaRedux');
  }
  const toToolKit = () => {
    window.location.replace('/ToolKitRedux');
  }

  return (
    <div>
      <button onClick= {toVanilla}> Vanilla Redux Example</button>
      <button onClick= {toToolKit}> ToolKit Redux Example</button>
    <Routes>
      <Route path='/VanillaRedux' element={<CounterAppVanilla/>}></Route>
      <Route path='/ToolKitRedux' element={<CounterAppToolKit/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
