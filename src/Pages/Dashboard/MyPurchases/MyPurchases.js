import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';


const MyPurchases = () => {
    const [purchases, setPurchases] = useState([]);
    const { user } = useAuth();
    const { email } = user;

    useEffect(() => {
        fetch(`http://localhost:5000/purchases/${email}`)
            .then(res => res.json())
            .then(data => setPurchases(data))
    }, [email])

    const handleDelete = id => {
        // const proceed = window.confirm('Are you sure want to delete');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/purchases/${id}`;
                fetch(url, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            // alert('Deleted Successfully')
                            const remaining = purchases.filter(purchase => purchase?._id !== id);
                            setPurchases(remaining);
                        }
                    });

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div className="container-fluid py-5" >
            <h1 className="pt-5 fw-bold text-primary">My Order's</h1>

            <h5 className=" pt-3 text-primary">Total Order: <span className="text-dark">{purchases?.length}</span></h5>

            <div className="container my-5 pb-5">
                <Table variant="primary" striped bordered hover responsive>
                    <thead>
                        <tr>

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Purchase Id</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Product</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Category</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Price</th>
                            ))}


                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Shipping</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Cancel</th>
                            ))}


                        </tr>
                    </thead>
                    {purchases.map((purchase) => (

                        <tbody key={purchase._id}>
                            <tr>

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{purchase?._id} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{purchase?.title} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{purchase?.category} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}><sup>$</sup>{purchase?.price} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{purchase?.status} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>
                                        <button onClick={() => handleDelete(purchase?._id)} className="border-0 ">
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    ))}

                </Table>
            </div>
        </div>
    );
};

export default MyPurchases;