import "./App.css";
import RegistrationPanel from "./components/registration-panel.jsx";
import Account from "./components/account.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (

        <Router>

            <Routes>
                <Route path="/" element={<RegistrationPanel />} />
                <Route path="/welcome" element={<Account />} />
            </Routes>
        </Router>
  )
}

export default App
