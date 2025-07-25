import "./App.css";
import UserList from "./components/UserList/UserList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList/>} />
      </Routes>
    </Router>
  )
}

export default App
