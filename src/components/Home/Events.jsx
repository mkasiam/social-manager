import { useEffect, useState } from "react";
import Event from "./Event";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  console.log(events);
  return (
    <div className="h-screen w-full carousel carousel-vertical rounded-box">
      {events.map((aEvent) => (
        <Event key={aEvent.id} aEvent={aEvent}></Event>
      ))}
    </div>
  );
};

export default Events;
