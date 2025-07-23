import "./App.css";
import RegistrationPanel from "./components/page/registration/registration-panel";
import Account from "./components/page/mainPage/account";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingBubblesBackground
    from "./components/ready-made elements for the page/background/FloatingBubblesBackground";

import Reservation from "./components/page/reservation/reservation";
import Branches from "./components/page/branches/branches";
import HotelReviews from "./components/page/branches/HotelReviews/HotelReviews";




function App() {

  return (

        <Router>
            <FloatingBubblesBackground/>
            <Routes>
                <Route path="/" element={<RegistrationPanel />} />
                <Route path="/welcome" element={<Account />} />
                <Route path="/branches" element={<Branches />} />
                <Route path="/reservation/:hotelName" element={<Reservation />} />
                <Route path="/hotel-reviews/:hotelName" element={<HotelReviews />} />

            </Routes>
        </Router>
  )
}

export default App
