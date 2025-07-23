
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./branches.css";

import hotels from "./hotelsData";

import HotelCard from "./hotelCard/HotelCard";
import HotelModal from "./hotelModal/HotelModal";

import Logo from "../../ready-made elements for the page/logo/logo";
import Footer from "../../ready-made elements for the page/footer/footer";

function Branches() {
    const { t } = useTranslation();
    const [selectedHotel, setSelectedHotel] = useState(null);

    return (
        <>
            <Logo />


            <div className="conteyner">
                <h1 className="branches-title">{t('branches_title')}</h1>

                <div className="hotels-container">
                    {hotels.map((hotel) => (
                        <HotelCard key={hotel.id} hotel={hotel} onClick={setSelectedHotel} />
                    ))}
                </div>
            </div>



            <HotelModal hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />



            <Footer />
        </>
    );
}

export default Branches;
