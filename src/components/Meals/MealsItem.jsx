import React, { useContext } from "react";

import { CartContext } from "../../store/CartContext";

const MealsItem = ({
  name,
  description,
  price,
  mealId,
}) => {

  const cartCtx = useContext(CartContext);

  const addCartHandler = () => {

    cartCtx.addItem({
      mealsId: mealId,
      name,
      description,
      price,
    });

  };

  const existingItem = cartCtx.items.find(
    (item) => item.mealsId === mealId
  );

  return (
    <div className="meals-item">

      <div className="meals-info">
        <h5>{name}</h5>
        <p className="desc">{description}</p>
        <h5 className="price">$ {price}</h5>
      </div>

      <div className="amount">

        <div className="amount-top">
          <p>Amount</p>
          <p>{existingItem?.quantity || 0}</p>
        </div>

        <div className="action-btn">
          <button onClick={addCartHandler}>
            + Add
          </button>
        </div>

      </div>

    </div>
  );
};

export default MealsItem;