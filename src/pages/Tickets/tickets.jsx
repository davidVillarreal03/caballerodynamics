import { useState } from "react";

export default function Tickets() {
    const [events, setEvents] = useState([]);
    const [eventData, setEventData] = useState({
        date: "",
        location: "",
        class: "",
        description: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
        console.log(eventData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!eventData.class || !eventData.date || !eventData.location || !eventData.description) {
            alert("Please fill out all fields.");
            return;
        }
        
        setEvents([...events, {...eventData, id: Date.now()}]);
        setEventData({
            date: "",
            location: "",
            class: "",
            description: "",
        });
        console.log(events);
    }
    return (
        <div>
            <h1>Tickets</h1>
            <div className="flex justify-center w-full">
                <form className="flex flex-col items-start w-full max-w-lg p-4 bg-[silver] rounded-md " onSubmit={handleSubmit} >
                    <h1 className="text-3xl font-bold text-[#2b2b2b]">Create an Event</h1>
                    <label for='date' className="m-2 text-[#2b2b2b]">Select a date:</label>
                    <input value={eventData.date} onChange={handleChange} className="p-2 bg-[gray] text-[#2b2b2b] rounded-sm w-full m-2" type="date" id="date" name="date" required onClick={(e) => e.target.type.showPicker()} />
                    <label for='location' className="m-2 text-[#2b2b2b]">Location:</label>
                    <input value={eventData.location} onChange={handleChange} className="p-2 bg-[gray] text-[#2b2b2b] rounded-sm w-full m-2" type="location" id="location" name="location" placeholder="Address" required />
                    <label className="m-2 text-[#2b2b2b]">Choose a class:</label>
                    <select name="class" value={eventData.class} onChange={handleChange} className="p-2 bg-[gray] text-[#2b2b2b] rounded-sm w-full m-2">
                        <option value="">Select a class</option>
                        <option value="Pistol">Pistol</option>
                        <option value="Shotgun">Shotgun</option>
                        <option value="Carbine">Carbine</option>
                        <option value="Concealed Carry">Concealed Carry</option>
                    </select>
    
                    <label for='description' className="m-2 text-[#2b2b2b]">Give a brief description:</label>
                    <textarea value={eventData.description} onChange={handleChange} className="p-2 bg-[gray] text-[#2b2b2b] rounded-sm w-full m-2" id="description" name="description" rows="5" placeholder="Type your message here..." required></textarea>
    
                    <button className="p-2 bg-[#a89f94] text-[#2b2b2b] rounded-sm w-full m-2" type="submit">
                        Create Event
                    </button>
                </form>
            </div>

            <div className="flex flex-col items-center justify-center w-full">
                <h2>Upcoming Events</h2>
                {events.length === 0 && <p>No events scheduled.</p>}
                {events.map((event)=> (
                    <div key={event.id} className="flex flex-col items-start w-full max-w-lg p-4 bg-[#2b2b2b] rounded-md ">
                        <p className="text-3xl font-bold text-[#a89f94]">Date: {event.date}</p>
                        <p className="text-3xl font-bold text-[#a89f94]">Location: {event.location}</p>
                        <p className="text-3xl font-bold text-[#a89f94]">Class: {event.class}</p>
                        <p className="text-3xl font-bold text-[#a89f94]">Description: {event.description}</p>
                    </div>
                ))}
                
            </div>
       </div>
    )
}

