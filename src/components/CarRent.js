import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import '../App.css'
import CarNavbar from './CarNavbar'
const CarRent = () => {
    const navigate = useNavigate();
    const [data,setData]=useState([])
    const [records,Setrecords] = useState([])
    const [error,setError]=useState()
    const [update,setUpdate] = useState ('true')
    const item=sessionStorage.getItem('tokens')
    console.log(item,'item')
    useEffect(()=>{
      axios.get('http://localhost/Api/renthome.php',{ headers: {"Authorization" : `Bearer ${item}`} })
      .then((response)=>
      
     { 
      setData(response.data)
      console.log(response.data,'pppp')
    }).catch((e)=>{
  setError(e)
    })
  },[])
  useEffect(()=>{
    axios.get('http://localhost/Api/read.php').then((response)=>{
      Setrecords(response&&response.data)
      setUpdate(false)
    })
  },[update])


  const logout = () => {
    console.log(1234)
    sessionStorage.removeItem('tokens');
    navigate('/')
    window.location.reload();
    
  
  };
  const buycar=(id) => {  
    console.log(id,)
  if(sessionStorage.getItem('tokens'))
  {
    navigate(`/updatecar/${id}`)}
  else{
  navigate('/login')
  }
  }
  console.log(records.records,'record')
  

    return (
      
      <>
      {
        <>
          <CarNavbar data={data}logout={logout}/>
  
      <div className='container'>
      
          <div className='row mt-1'
          >
              <h1 className='col' style={{textAlign:'center'}}>
                  Car Rental
              </h1>
          </div>
      <div className='row mt-1'>
      
       {
        records.records!==undefined&&records.records.map((item)=>(
          <div className="card col-md-4 " >
          <img className="card-img-top" src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Vehicle Model : <span style={{fontWeight:'200'}}>{item.model}</span></h5>
           
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Vehicle number : <span style={{fontWeight:'200'}}>{item.number}</span></li>
            <li className="list-group-item">Seating Capacity : <span style={{fontWeight:'200'}}>{item.seats}</span></li>
            <li className="list-group-item">Rent per day : <span style={{fontWeight:'200'}}>Rs{item.rentsperday}</span></li>
          </ul>
          <div className="card-body" style={{textAlign:'center'}}>
          <button onClick={()=>buycar(item.id)} className="btn btn-warning">Edit Car</button>
        
        </div>
        </div>
        ))

        }
    {/* <div className="card col-md-4" >
    <img className="card-img-top" src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Vehicle Model : <span style={{fontWeight:'200'}}>Maruti Dezire</span></h5>
     
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Vehicle number : <span style={{fontWeight:'200'}}>Rj-14 0001</span></li>
      <li className="list-group-item">Seating Capacity : <span style={{fontWeight:'200'}}>4</span></li>
      <li className="list-group-item">Rent per day : <span style={{fontWeight:'200'}}>Rs-1500</span></li>
    </ul>
    <div className="card-body" style={{textAlign:'center'}}>
    <button onClick={buycar} className="btn btn-warning">Edit Car</button>
  
    </div>
  </div> */}
  
  
    {/* <div className="card col-md-4">
    <img className="card-img-top" src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Vehicle Model : <span style={{fontWeight:'200'}}>Maruti Dezire</span></h5>
     
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Vehicle number : <span style={{fontWeight:'200'}}>Rj-14 0001</span></li>
      <li className="list-group-item">Seating Capacity : <span style={{fontWeight:'200'}}>4</span></li>
      <li className="list-group-item">Rent per day : <span style={{fontWeight:'200'}}>Rs-1500</span></li>
    </ul>
    <div className="card-body" style={{textAlign:'center'}}>
    <button onClick={buycar} className="btn btn-warning">Edit Car</button>
  
    </div>
  </div> */}
  
  
  {/* <div className="card col-md-4" >
    <img className="card-img-top" src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Vehicle Model : <span style={{fontWeight:'200'}}>Maruti Dezire</span></h5>
     
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Vehicle number : <span style={{fontWeight:'200'}}>Rj-14 0001</span></li>
      <li className="list-group-item">Seating Capacity : <span style={{fontWeight:'200'}}>4</span></li>
      <li className="list-group-item">Rent per day : <span style={{fontWeight:'200'}}>Rs-1500</span></li>
    </ul>
    <div class="card-body" style={{textAlign:'center'}}>
    <button onClick={buycar} className="btn btn-warning">Edit Car</button>
    </div>
  </div> */}
  
  
    {/* <div className="card col-md-4" >
    <img className="card-img-top" src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Vehicle Model : <span style={{fontWeight:'200'}}>Maruti Dezire</span></h5>
     
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Vehicle number : <span style={{fontWeight:'200'}}>Rj-14 0001</span></li>
      <li className="list-group-item">Seating Capacity : <span style={{fontWeight:'200'}}>4</span></li>
      <li className="list-group-item">Rent per day : <span style={{fontWeight:'200'}}>Rs-1500</span></li>
    </ul>
    <div className="card-body" style={{textAlign:'center'}}>
    <button onClick={buycar} className="btn btn-warning">Edit Car</button>
  </div>
  
  </div> */}
  

  </div>

  </div>
  </>
  }
  </>

    )
  }
  

export default CarRent