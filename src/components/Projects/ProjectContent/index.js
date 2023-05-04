import React, {useState, useEffect} from 'react'
import "./style.css"
import axios from "axios"
import PIC from "../../../assets/images/image 3.png"

const ProjectContent = () => {
  const [userData , setUserData] = useState([]);
  const[ind, setIndex ] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
   useEffect(() => {
    fetchRecords(1);
  }, []);
  console.log(totalPages, ind, loading)

    const url = "https://admin.uiss.patrickmamsery.works";

  const fetchRecords = async (pages) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    await axios
      .get(`${url}/api/projects?page=${pages}`, {
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
  console.log(userData)
  const handleMoreClick = () => {
    setPages(pages + 1);
  };

  return (
     <div className='project_content'>
      <div>
        <h2 style={{textAlign: "center"}}>Our Projects</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
      <div>
        <div className='event_content_container'>
        {userData.map((card) => (
          <div className='event_content_card' span={8} key={card.id} style={{ background: "#000", borderRadius: "10px"}}>
              <img src={card.image === null? PIC: card.image} alt='' style={{width: "100%"}} className='image' />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button>View Project</button>
          </div>
        ))}
      </div>
      <button onClick={handleMoreClick} >More Projects</button>
      </div>
    </div>
  )
}

export default ProjectContent