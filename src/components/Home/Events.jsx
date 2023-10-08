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
    <div>
        <div className="text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-4">Explore Our Latest Happenings</h1>
        <p className="text-lg mb-2 text-[#333]">
        Stay Updated with Our Exciting Events and Activities
        </p>
      </div>

    <div className="h-screen w-full carousel carousel-vertical rounded-box">
      {events.map((aEvent) => (
        <Event key={aEvent.id} aEvent={aEvent}></Event>
      ))}
    </div>
    </div>
  );
};

export default Events;
