import React from 'react';
import Calendar from 'react-calendar';
import chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handlDate}) => {

    return (
        <main style={{height:'600px',width:'100%'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{color: '#3A4256'}}>Appointment</h1>
            <Calendar
        onChange={handlDate}
        value={new Date()}
      />
        </div>
        <div className="col-md-6">
            <img src={chair} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default AppointmentHeader;