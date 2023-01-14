import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './FOOD_RECIPE/AppRouting';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
    <BrowserRouter>
    <AppRouting/>
    </BrowserRouter>
    </>
  );
}

export default App;
