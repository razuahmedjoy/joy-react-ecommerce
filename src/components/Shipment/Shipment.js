import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')
    const [phone,setPhone] = useState('')
    const [error,setError] = useState('')
    // const navigate = useNavigate();

    const [user] = useAuthState(auth)
   

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleAdressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }

    const handleCreateUser = event => {

        event.preventDefault()
        const shipping = {name,email,address,phone}
        
    }

  

    return (
        <div className="form-container">
        <div className="m-auto p-0 p-md-3 w-100">
            <h2 className="form-title text-center mb-3">Shipping Information</h2>
            <form onSubmit={handleCreateUser} className="w-100" action="">
                <div className="input-items">
                    <label htmlFor="name">Name</label>
                    <input onBlur={handleNameBlur} type="text" name="name" id="name" required/>
                </div>
                <div className="input-items">
                        <label htmlFor="email">Email</label>
                        <input type="email" readonly="true" name="email" id="email" disabled value={user?.email} required  />
                    </div>
                <div className="input-items">
                    <label htmlFor="adress">Adress</label>
                    <input onBlur={handleAdressBlur} type="text" name="adress" id="adress" required/>
                </div>
                <div className="input-items">
                    <label htmlFor="phone">Phone Number</label>
                    <input onBlur={handlePhoneBlur} type="text" name="phone" id="phone" required/>
                </div>
                <p className="text-danger fw-bold">{error}</p>
                <div className="input-items">

                    <input type="submit" className="btn btn-warning w-100" value="Add Shipping Info" id="submit"  />
                </div>
            </form>
      
           
        </div>
    </div>
    );
};

export default Shipment;