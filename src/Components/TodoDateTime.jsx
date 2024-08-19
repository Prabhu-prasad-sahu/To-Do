import { useEffect, useState } from "react";

export const TodoDateTime = () => {
    const [dateTime, setDateTime] = useState("");
    useEffect(() => {
        let interval = setInterval(() => {
            const currentDate = new Date();
            const todaysDate = currentDate.toLocaleDateString();
            const todaysTime = currentDate.toLocaleTimeString();
            setDateTime(`${todaysDate}- ${todaysTime}`)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return <h2 className="date-time">{dateTime}</h2>
}