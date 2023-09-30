import React, { useState } from "react";
import ModalInput from "./ModalInput";

const Budget = ({ details }) => {
  const [budget, setBudget] = useState(details);

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setBudget({
      ...budget,
      [name]: value,
    });
  };

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
            <td>
              <ModalInput
                type="money"
                name="foodAmount"
                value={budget.foodAmount}
                setValue={handleInputChange}
              />
            </td>
            <td>
              <ModalInput
                type="money"
                name="attractionAmount"
                value={budget.attractionAmount}
                setValue={handleInputChange}
              />
            </td>
            <td>
              <ModalInput
                type="money"
                name="accomadationAmount"
                value={budget.accomadationAmount}
                setValue={handleInputChange}
              />
            </td>
            <td>${budget.totalAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Budget;
