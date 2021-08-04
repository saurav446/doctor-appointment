import React, { useState } from 'react';
import { Col,Button,Row  } from 'react-bootstrap';
import AppointmentBook from '../AppointmentBook/AppointmentBook';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
   
    function closeModal() {
      setIsOpen(false);
    }
    
    return (   
        <div 
        style={{marginLeft: "5rem",
            marginTop:"2rem"}}
        className="card  col-md-3 ">
            <div className="card-body text-center p-3">
                    <h5 className="card-title">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} Space AvailAble</p>
                    <Button 
                    onClick={openModal}
                     style={{background:'#1CC7C1', 
                     border:'none'}}
                    >Book Appointment</Button>
                    <AppointmentForm
                    closeModal={closeModal}
                    appointSubject={booking.subject}
                    date={date}
                    modalIsOpen={modalIsOpen}
                    />
            </div>
        </div>   
    );
};

export default BookingCard;