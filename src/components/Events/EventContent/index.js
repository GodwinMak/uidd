import React, {useState, useEffect} from 'react'
import "./style.css"
import axios from "axios"
import PIC from "../../../assets/images/image 3.png"
import Location from "../../../assets/icon/pin 5.png"

const EventContent = () => {
  const [userData , setUserData] = useState([]);
  const[ind, setIndex ] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
   useEffect(() => {
    fetchRecords(1);
  }, []);

  console.log(ind, totalPages, loading, pages, setPages)

    const url = "https://admin.uiss.patrickmamsery.works";

  const fetchRecords = async (pages) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    await axios
      .get(`${url}/api/events?page=${pages}`, {
        headers: {
          Authorization: `Bearer ${token}`
      }})
      .then((res) => {
        console.log(res.data)
        setUserData(res.data.data);
        if(res.data.meta){
          setTotalPages(res.data.meta.total);
          setIndex(res.data.meta.from);
        }
        setLoading(false);
      });
  };
  

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const year = date.getFullYear();
  const monthName = date.toLocaleString('default', { month: 'long' });
  const suffix = getNumberSuffix(day);
  
  return `${day}${suffix} ${monthName} ${year}`;
}

const getNumberSuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

  return (
    <div className='event_content'>
      <div>
        <h2 style={{textAlign: "center"}}>Upcoming Events</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesettingindustry.</p>
      </div>
      <div>
        <div className='event_content_container'>
        {userData.map((card) => (
          <div className='event_content_card' key={card.id} style={{ background: "#000", borderRadius: "10px"}}>
              <img src={card.image === null? PIC: card.image} className='image' alt=''/>
              <div style={{position: "relative", display: "flex", flexDirection: "row", gap: "2rem"}}>
                <span className='event_date'>{formatDate(card.startDate)}</span>
                <span className='event_location'>
                  <img src={Location} alt=''/>
                  {card.venue}
                </span>
              </div>
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <button>Register</button>
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default EventContent