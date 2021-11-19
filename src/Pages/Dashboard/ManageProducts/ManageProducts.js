import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://whispering-mesa-69203.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    const handleDelete = id => {
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
                const url = `https://whispering-mesa-69203.herokuapp.com/products/${id}`;
                fetch(url, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            // alert('Successfully removed')
                            const remaining = products.filter(product => product?._id !== id);
                            setProducts(remaining);
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
        <div className="container-fluid py-5">
            <h1 className="pt-5 fw-bold text-primary">Manage All Products</h1>
            <h5 className=" pt-3 text-primary">Total Product's in this website: <span className="text-dark">{products.length}</span> </h5>

            <div className="container my-5 pb-5">

                <Table variant="primary" striped bordered hover responsive>
                    <thead>
                        <tr>

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Product Id</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Products Name</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Category</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Price</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Remove</th>
                            ))}


                        </tr>
                    </thead>
                    {products.map((product) => (

                        <tbody key={product._id}>
                            <tr>

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{product?._id} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{product?.title} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{product?.category} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}><sup>$</sup>{product?.price} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>
                                        <button className="border-0 text-dark"
                                            onClick={() => handleDelete(product?._id)}>
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

export default ManageProducts;


