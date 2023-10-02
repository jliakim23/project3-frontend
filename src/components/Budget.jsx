import React, { useState } from "react";
import ModalInput from "./ModalInput";
import { TbPigMoney } from "react-icons/tb";

const Budget = ({ details }) => {
  const [budget, setBudget] = useState(details);

  const handleSetValue = (e) => {
    // console.log(e.target);
    let { name, value } = e.target;
    value = Number(parseFloat(value));

    if (name === "foodAmount") {
      setBudget({
        ...budget,
        foodAmount: value,
        totalAmount:
          value + budget.attractionAmount + budget.accomadationAmount,
      });
    }

    if (name === "attractionAmount") {
      setBudget({
        ...budget,
        attractionAmount: value,
        totalAmount: value + budget.foodAmount + budget.accomadationAmount,
      });
    }

    if (name === "accomadationAmount") {
      setBudget({
        ...budget,
        accomadationAmount: value,
        totalAmount: value + budget.foodAmount + budget.attractionAmount,
      });
    }
  };

  return (
    <div className="budget container">
      <h2 className="header">
        <TbPigMoney style={{ marginRight: 10 }} />
        Budget Planner
      </h2>
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
                value={parseFloat(budget.foodAmount).toFixed(2)}
                setValue={handleSetValue}
              />
            </td>
            <td>
              <ModalInput
                type="money"
                name="attractionAmount"
                value={parseFloat(budget.attractionAmount).toFixed(2)}
                setValue={handleSetValue}
              />
            </td>
            <td>
              <ModalInput
                type="money"
                name="accomadationAmount"
                value={parseFloat(budget.accomadationAmount).toFixed(2)}
                setValue={handleSetValue}
              />
            </td>
            <td>${budget.totalAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Budget;
