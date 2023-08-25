
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Calculator from './calculator/calculator';
import Curd from './crud task/crudelements';
import Edit from './crud/edit';
import KrishnanEdit from './crud/krishnanEdit';
import PutValue from './crud/putValue';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Edit></Edit>} /> */}
          {/* <Route path='/' element={<KrishnanEdit></KrishnanEdit>} />
          <Route path='/putvalue' element={<PutValue></PutValue>} /> */}
          {/* <Route path='/edit' element={<Curd></Curd>} /> */}
          <Route path='/' element={<Calculator></Calculator>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
