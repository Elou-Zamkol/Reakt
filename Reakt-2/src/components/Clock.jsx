import { useState, useEffect } from "react";
import "./Clock.css"

function Clock({ title }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Обновлять каждую секунду
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Очистка при размонтировании
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <h2>{title}</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;
