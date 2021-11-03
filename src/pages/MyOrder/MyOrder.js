import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = ({ order }) => {
    const { user } = useAuth();
    const { personname, email, packageprice, packagename, phonenumber } = order;

    if (user?.email == email) {
        var currentUser = email;
    }
    return (
        <>
            {
                currentUser &&
                <tr>
                    <td>{personname} ' '</td>
                    <td>{email} ' '</td>
                    <td>{packagename} ' '</td>
                    <td>{packageprice} ' '</td>
                    <td>{phonenumber} ' ' </td>
                    <td><button>Delete</button></td>
                </tr>
            }
        </>
    );
};

export default MyOrder;

