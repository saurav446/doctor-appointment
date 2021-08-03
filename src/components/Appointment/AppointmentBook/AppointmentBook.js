import React from 'react';
import BookingCard from '../BookingCard/BookingCard'; 

import { Col,Button,Row, Container  } from 'react-bootstrap';
const bookingDate  = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },{
        id: 2,
        subject: 'Heart Attack',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },{
        id: 3,
        subject: 'Diabetes',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },{
        id: 4,
        subject: 'Gastric',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },{
        id: 5,
        subject: 'Alcher',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },{
        id: 6,
        subject: 'Gasform',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]
const AppointmentBook = ({date}) => {

   
    return (
        <section  >
            <Container> 
           <h2  
           style={{color:'#1CC7C1',fontWeight:'600',margin:'3rem 0px'}}
           className="text-center text-brand"
           >AvailAble Appointment on {date.toDateString()}</h2>
           
           <div className="row"> 
           {
              bookingDate.map((booking) => 
              <BookingCard key={booking.id} booking={booking} 
              date={date}
               /> )
          }     
            </div>    
        </Container>
        </section>
    );
};

export default AppointmentBook;


 