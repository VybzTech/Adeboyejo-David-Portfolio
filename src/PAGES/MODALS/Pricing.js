import { PRICING } from "../Utils";
import React, { useState } from "react";
// import { Button } from '@material-ui/core'
import IndividualPrice from "./IndividualPrice";

const Pricing = () => {
  const [priceSw, setPriceSw] = useState(true);

  const Buttons = [
    {
      id: 1,
      name: "INDIVIDUAL",
      status: priceSw,
    },
    { id: 2, name: "TEAM", status: !priceSw },
  ];

  return (
    <div id="pricing">
      <h1>Pricing</h1>
      <div className="viewBtns">
        {Buttons.map((Btn) => {
          return (
            <button
              key={Btn.id}
              onClick={() => {
                setPriceSw(!priceSw);
              }}
              className={`${Btn.status ? "active" : ""}`}
            >
              {Btn.name}
            </button>
          );
        })}
      </div>
      <section>
        <IndividualPrice content={priceSw ? PRICING[0] : PRICING[1]} />
      </section>
    </div>
  );
};

export default Pricing;
