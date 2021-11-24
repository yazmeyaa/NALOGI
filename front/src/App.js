import {Routes, Route} from 'react-router-dom'
import LandScape from './components/LandScape/LandScape';
import TaxCalculator from './components/TaxCalculator/TaxCalculator';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<LandScape />} />
      <Route path='/taxcalc' element = {<TaxCalculator />} />
    </Routes>
  );
}

export default App;
