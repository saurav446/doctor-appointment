import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen,closeModal,appointSubject,date}) => { 
    const { register, handleSubmit,formState: { errors } ,reset} = useForm();
    const onSubmit = data => {
        data.service = appointSubject;
        data.date = date;
        data.created = new Date();
      fetch('http://localhost:5000/addAppoitment',{
          method:"POST",
          headers:{ 'content-type' : 'application/json'},
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(sucess => {
          if(sucess){
              
            alert('you form submitted database')
              closeModal(); 
          }
      })
    //   .catch((err) =>{
    //     //  alert(err)
    //   })

        closeModal();
        reset(); 
    };
  
    return (
        <div> 
      <Modal
        isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
           
        <h2 style={{textAlign:'center',color:'#1CC7C1',fontWeight:'600'}}>{appointSubject}</h2>  
        <p className="text-secondary text-center">
            <small>ON {date.toDateString()}</small></p>
        <form className="p-3" onSubmit={handleSubmit(onSubmit)}>  
        <div className="form-group">
                        <input type="text" {...register("name",{ required: true })}   placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" {...register("phone",{ required: true })}  placeholder="Phone Number" className="form-control mt-2" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("email",{ required: true })}   placeholder="Email" className="form-control mt-2" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row mt-2 pb-2">
                        <div className="col-4">

                            <select className="form-control"   {...register("gender",{ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input   {...register("age",{ required: true })} className="form-control"   placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input    {...register("weight",{ required: true })} className="form-control"   placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit"
                          style={{background:'#1CC7C1', 
                          border:'none'}}
                        className="btn btn-brand">Send</button>
                    </div>
        </form>
      </Modal>
        </div>
    );
};

export default AppointmentForm;