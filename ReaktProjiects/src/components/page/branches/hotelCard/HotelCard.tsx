import "./HotelCard.css";
import { useTranslation } from "react-i18next";

function HotelCard({ hotel, onClick }: any) {

    const { t } = useTranslation();

    return (
        <div className="hotel-card" onClick={() => onClick(hotel)}>

            <img src={hotel.image} alt={hotel.name} />

            <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <div className="stars">{"★".repeat(hotel.stars)}</div>
                <p className="price">{t('from')} {hotel.price} AZN / {t('per_night')}</p>
            </div>

            <div className="overlay">
                <p>{hotel.shortDescription}</p>
            </div>


        </div>
    );
}

export default HotelCard;
