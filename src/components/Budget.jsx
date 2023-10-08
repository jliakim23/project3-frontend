import ModalInput from "./ModalInput";
import { TbPigMoney } from "react-icons/tb";
import { Table } from "react-bootstrap";

const Budget = ({ details, updateTrip }) => {
  const budget = details.budget;

  const handleSetValue = (e) => {
    // console.log(e.target);
    let { name, value } = e.target;
    value = Number(parseFloat(value));
    let editedBudget;

    if (name === "foodAmount") {
      editedBudget = {
        ...budget,
        foodAmount: value,
        totalAmount:
          value + budget.attractionAmount + budget.accommodationAmount,
      };
    }

    if (name === "attractionAmount") {
      editedBudget = {
        ...budget,
        attractionAmount: value,
        totalAmount: value + budget.foodAmount + budget.accommodationAmount,
      };
    }

    if (name === "accommodationAmount") {
      editedBudget = {
        ...budget,
        accommodationAmount: value,
        totalAmount: value + budget.foodAmount + budget.attractionAmount,
      };
    }

    updateTrip({ ...details, budget: editedBudget });
  };

  return (
    <div className="budget">
      <h2>
        <TbPigMoney style={{ marginRight: 10 }} />
        Budget Planner
      </h2>
      <div style={{ overflowX: "auto" }}>
        <Table striped bordered variant="" size="sm">
          <thead>
            <tr>
              <th
                style={{
                  color: "#7ba3ca",
                  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
                  fontSize: "13px",
                }}
              >
                Food
              </th>
              <th
                style={{
                  color: "#7ba3ca",
                  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
                  fontSize: "13px",
                }}
              >
                Attractions
              </th>
              <th
                style={{
                  color: "#7ba3ca",
                  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
                  fontSize: "13px",
                }}
              >
                Accommodation
              </th>
              <th
                style={{
                  color: "#7ba3ca",
                  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
                  fontSize: "15px",
                }}
              >
                Total
              </th>
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
    </div>
  );
};
export default Budget;
