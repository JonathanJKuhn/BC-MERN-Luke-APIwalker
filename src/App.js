import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import People from './components/People'
import Planets from './components/Planets'
import Search from './components/Search';

function App() {
    return (
        <Container className='mt-5'>
          <Search />
          <BrowserRouter> 
            <Routes>
              <Route path='/people/:id' element={<People />} />
              <Route path='/planets/:id' element={<Planets />} />
            </Routes>
          </BrowserRouter>
        </Container>
    );
}

export default App;
