import React from "react";
import "./Sub.scss";
import { plans } from "../../../data/plans";
import { FaTrashAlt } from "react-icons/fa";

const Sub = () => {
  return (
    <div>
      <h3>Subscription ~</h3>
      <div className="table">
        {plans.length === 0 ? (
          <p>No plans found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => {
                const { name, price } = plan;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{price}</td>

                    <td>
                      <span>
                        <FaTrashAlt size={20} color={"red"} />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Sub;
