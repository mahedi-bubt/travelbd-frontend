import React from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = ({ order }) => {
    const { user } = useAuth();
    const { personname, email, packageprice, packagename, phonenumber } = order;

    if (user?.email == email) {
        var currentUser = email;
    }
    return (
        <div>
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
        </div>
    );
};

export default MyOrder;

