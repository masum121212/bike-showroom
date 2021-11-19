import React, { useState } from 'react';
import Swal from 'sweetalert2';
import admin from '../../../images/admin.jpg';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://whispering-mesa-69203.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire('Successfully Admin Added')
                }
            })
        e.preventDefault()
    }
    return (
        <div className="container py-5">
            <div className="row  mb-5 pb-5">
                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid" src={admin} alt="" />
                </div>

                <div className="col-md-6 col-sm-12 pt-5">
                    <h1 className="fw-bold text-primary">Make an Admin</h1>
                    <div className="text-center pt-3 ">
                        <form onSubmit={handleAdminSubmit}>

                            <input className=" w-75 mb-2 rounded-3" onBlur={handleOnBlur} type="email" name="" id="" placeholder="example@gmail.com" />
                            <br />
                            <input className="w-50 btn btn-outline-primary m-auto" type="submit" value="Submit" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;