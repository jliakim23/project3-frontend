import React, { useState } from "react";

const Budget = ({ details }) => {
  const [budget, setBudget] = useState(details);

  return (
    <div className="budget container">
      <h2 className="header">Budget Planner</h2>
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
            <td>${budget.foodAmount}</td>
            <td>${budget.attractionAmount}</td>
            <td>${budget.accomadationAmount}</td>
            <td>${budget.totalAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Budget;
