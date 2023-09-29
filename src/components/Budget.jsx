import React from "react";

const Budget = ({ details }) => {
  return (
    <div>
      <h3>Budget Planner</h3>
      <table>
        <thead>
          <tr>
            <th>Food</th>
            <th>Attractions</th>
            <th>Accomodation</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${details.foodAmount}</td>
            <td>${details.attractionAmount}</td>
            <td>${details.accomadationAmount}</td>
            <td>${details.totalAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Budget;
