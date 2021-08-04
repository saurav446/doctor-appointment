import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Sidebar/Sidebar.css'

const containerStyle = {
    backgroundColor: "#F4FDFB",
    // border: '1px solid red'
}
const Deshboard = () => {
    
    const [selectedDate, setSelectedDate] = useState(new Date()); 
    const [appointments,setAppointments] = useState([])

    const handleDateChange = date => {
        setSelectedDate(date);  
    }
    useEffect((date) =>{
        fetch('http://localhost:5000/appoitmentsByDate',{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))  
    },[selectedDate])
       

    return (
        <div>
            <div style={containerStyle} className="row  header__top">
                <div className="col-md-2 col-sm-6 col-12 ">
                    <Sidebar />
                </div>
                <div className="mt-5 col-md-5 col-sm-12 col-12 d-flex  justify-content-center">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="mt-5 col-md-5 col-sm-12 col-12">
                   <AppointmentByDate appointments={appointments}  /> 
                </div>
            </div>
        </div>
    );
};

export default Deshboard;