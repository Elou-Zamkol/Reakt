import "./HotelReviews.css"

import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Logo from "../../../ready-made elements for the page/logo/logo";
import Footer from "../../../ready-made elements for the page/footer/footer";

import hotels from "../hotelsData";

function HotelReviews() {

    //===============================================================

    const { t } = useTranslation();
    const { hotelName } = useParams();
    const decodedName = decodeURIComponent(hotelName || "").replace(/-/g, " ");

    const hotel = hotels.find(h => h.name === decodedName);

    if (!hotel) return <div>{t('hotel_not_found')}</div>;

    const reviews = hotel.reviews || [];
    const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length || 0).toFixed(1);

    //===============================================================

    return (
        <>
            <Logo />

            <div className="hotel-info-page" style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>

                <h1>{hotel.name}</h1>

                <p><strong>{t('location')}:</strong> {hotel.location}</p>
                <p><strong>{t('stars')}:</strong> {hotel.stars || t('not_specified')}</p>
                <p>{hotel.description}</p>
                <p><strong>{t('average_rating')}:</strong> {averageRating} ⭐ ({reviews.length} {t('reviews_count')})</p>


                <h2>{t('guest_reviews')}</h2>

                {reviews.length === 0 && <p>{t('no_reviews')}</p>}

                {hotel.reviews.map((review, index) => (
                    <div className="review" key={index}>

                        <strong>{review.user}</strong> <em>({review.text})</em>

                        <div className="review-stars">
                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </div>

                        <p>{review.text}</p>

                    </div>
                ))}

            </div>

            <Footer />
        </>
    );
}

export default HotelReviews;
