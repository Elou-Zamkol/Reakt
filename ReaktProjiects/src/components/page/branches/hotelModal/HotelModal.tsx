import "./HotelModal.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AtelierSlider from "../../../ready-made elements for the page/AtelierSlider/AtelierSlider";

function HotelModal({ hotel, onClose }: any) {

    const { t } = useTranslation();
    const navigate = useNavigate();
    if (!hotel) return null;

    //===============================================================

    const handleReserve = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();
        const hotelName = encodeURIComponent(hotel.name.replace(/\s+/g, "-"));
        navigate(`/reservation/${hotelName}`);
    };



    const handleReviews = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();
        const hotelName = encodeURIComponent(hotel.name.replace(/\s+/g, "-"));
        navigate(`/hotel-reviews/${hotelName}`);
    };


    //===============================================================

    return (

        <div className="modal-overlay" onClick={onClose}>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <AtelierSlider size="small" />

                <h1 className="hotel-name">{hotel.name}</h1>

                <p><strong>{t('location')}:</strong> {hotel.location}</p>
                <p>{hotel.description}</p>

                <p><strong>{t('already_visited')}:</strong> {hotel.visitors} {t('people')}</p>

                <button className="reserve-btn" onClick={handleReserve}>{t('reserve_now')}</button>
                <button className="reviews-btn" onClick={handleReviews}>{t('reviews')}</button>
                <button className="close-btn" onClick={onClose}>{t('close')}</button>

            </div>
        </div>
    );
}

export default HotelModal;
