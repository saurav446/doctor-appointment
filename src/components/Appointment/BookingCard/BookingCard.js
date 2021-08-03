import React from 'react';
import { Col,Button,Row  } from 'react-bootstrap';

const BookingCard = ({booking}) => {
    return (   
        <div 
        style={{marginLeft: "5rem",
            marginTop:"2rem"}}
        className="card  col-md-3 ">
            <div className="card-body text-center p-3">
                    <h5 className="card-title">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} Space AvailAblw</p>
                    <Button 
                     style={{background:'#1CC7C1', 
                     border:'none'}}
                    >Book Appointment</Button>
            </div>
        </div>   
    );
};

export default BookingCard;