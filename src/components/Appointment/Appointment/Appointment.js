import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentBook from '../AppointmentBook/AppointmentBook';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [selectedDate,setSelecteDate] = useState(new Date())

    const handlDate = (date) =>{
        setSelecteDate(date)
    }
    console.log(selectedDate)
    return (
        <div>
            <Navbar />
            <AppointmentHeader handlDate={handlDate} />
            <AppointmentBook date={selectedDate} />
            <Footer />
        </div>
    );
};

export default Appointment;