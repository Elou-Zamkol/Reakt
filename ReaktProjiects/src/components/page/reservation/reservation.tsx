import "./reservation.css";
import Logo from "../../ready-made elements for the page/logo/logo";
import Footer from "../../ready-made elements for the page/footer/footer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";


interface Room {
  number: number;
  type: string;
  price: number;
  floor: number;
  occupied: boolean;
}


//=====================Мои комнаты==========================================

const occupiedRooms = [3, 15, 19, 31, 45, 60];

const allRooms = Array.from({ length: 66 }, (_, i) => {
  const number = i + 1;
  const isVIP = number <= 5 || number >= 31;

  return {
    number,
    type: isVIP ? "VIP" : "Эконом",
    price: isVIP ? 12000 : 6000,
    floor: Math.ceil(number / 11),
    occupied: occupiedRooms.includes(number),
  };
});


//===============================================================


function Reservation() {

  //===============================================================

  const { t } = useTranslation();

  const { hotelName } = useParams<{ hotelName: string }>();

  const decodedName = decodeURIComponent(hotelName || "").replace(/-/g, " ");
  const [selected, setSelected] = useState<Room[]>([]);
  const [paid, setPaid] = useState(false);


  //===============================================================

  const toggleRoom = (room: Room) => {
    if (room.occupied) return;

    setSelected((prev) =>
      prev.some((r) => r.number === room.number) ? prev.filter((r) => r.number !== room.number) : [...prev, room]
    );
  };


  const total = selected.reduce((sum, r) => sum + r.price, 0);



  return (
    <>
      <Logo />

      <h1 className="hotel-name">{decodedName}</h1>

      <div className="hotel">
        {[1, 2, 3, 4, 5, 6].map((floor) => (
          <div className="hotel-floor-row" key={floor}>

            <div className="floor-label">{t('floor')} {floor} </div>


            <div className="floor-box">
              {allRooms
                .filter((r) => r.floor === floor)

                .map((room) => {

                  const isSelected = selected.some((r) => r.number === room.number);
                  const className = room.occupied ? "room-button occupied" : isSelected ? "room-button selected" : "room-button";

                  return (
                    <button key={room.number} className={className} onClick={() => toggleRoom(room)}>
                      {room.number}
                    </button>
                  );

                }
                )
              }
            </div>

          </div>
        ))}
      </div>

      {selected.length > 0 && (
        <div className="selection-info">

          <h3>{t('you_selected_rooms')}</h3>

          <div className="selected-rooms">
            {selected.map((r) => (

              <div className="selected-room" key={r.number}>
                <span>{t('room')}: {r.number}</span>
                <span>{t('floor')}: {r.floor}</span>
                <span>{t('type')}: {t(r.type === 'VIP' ? 'vip' : 'econom')}</span>
                <span>{t('price')}: {r.price.toLocaleString()} $</span>
              </div>

            ))}
          </div>

          <div className="payment-section">
            <div className="total">{t('total')}: {total.toLocaleString()} $</div>
            <button className="pay-button" onClick={() => setPaid(true)}>{t('pay')}</button>
          </div>

          {paid && <div className="success-message">✅ {t('payment_success')}</div>}
        </div>
      )}

      <Footer />
    </>
  );
}

export default Reservation;