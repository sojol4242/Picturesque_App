import React, { useContext } from "react";
import { UserContext } from "../../../../App";

const BookedOrder = ({ order, index }) => {
  console.log({ order });
  const { name, email, serviceName, servicePrice, date } = order;
  const { user } = useContext(UserContext);
 
  return (
    <>
      {/* {email === user.email && (
        <tr>
          <td>{index++}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{serviceName}</td>
          <td>{servicePrice}</td>
          <td>{date}</td>
        </tr>
      )} */}
      <tr>
      <td>{index++}</td>
      <td>Name 1</td>
      <td>email@gmail.com</td>
      <td>0178...</td>
      <td>BM-5464</td>
      <td>02/08/24</td>
      </tr>
    </>
  );
};

export default BookedOrder;
