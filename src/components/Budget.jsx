import React, { useState } from "react";
import ModalInput from "./ModalInput";
import { TbPigMoney } from "react-icons/tb";
import { Table } from "react-bootstrap";

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
          value + budget.attractionAmount + budget.accommodationAmount,
      });
    }

    if (name === "attractionAmount") {
      setBudget({
        ...budget,
        attractionAmount: value,
        totalAmount: value + budget.foodAmount + budget.accommodationAmount,
      });
    }

    if (name === "accommodationAmount") {
      setBudget({
        ...budget,
        accommodationAmount: value,
        totalAmount: value + budget.foodAmount + budget.attractionAmount,
      });
    }
  };

  return (
<div className="budget container">
      <h2 >
        <TbPigMoney style={{ marginRight: 10 }} />
        Budget Planner
      </h2>
      <Table striped bordered >
        <thead>
          <tr>
            <th style={{ color: '#7ba3ca' }} >Food</th>
            <th style={{ color: '#7ba3ca' }}>Attractions</th>
            <th style={{ color: '#7ba3ca' }}>Accommodation</th>
            <th style={{ color: '#7ba3ca' }}>Total</th>
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
                name="accommodationAmount"
                value={parseFloat(budget.accommodationAmount).toFixed(2)}
                setValue={handleSetValue}
              />
            </td>
            <td>${budget.totalAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Budget;
