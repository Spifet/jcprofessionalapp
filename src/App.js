import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages';
import SigninPage from './Pages/singin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}  />
        <Route path="/signin" exact element={<SigninPage />}  />
        </Routes>
      </Router>
  );
}

export default App;
