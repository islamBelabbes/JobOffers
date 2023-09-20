import React, { useState } from "react";
import styles from "../Shared/Style";
import parseNumberToShortString from "../../utility/numberToString.Utility";
import { salary } from "../../utility/filterOptions";
function Salary({ onChange, value }) {
  return (
    <div>
      <h1 className="text-lg font-medium leading-7 text-primary">Salary</h1>
      <div>
        <label className="flex items-center gap-2 mt-3 cursor-pointer ">
          <input
            className={styles.primaryRadio}
            type="radio"
            name="salary"
            onChange={onChange}
            value={""}
            checked={value.salary === ""}
          />
          <span>Any</span>
        </label>
        {salary.map((item, index) => (
          <div key={index} className="flex items-center gap-2 mt-3 ">
            <input
              className={styles.primaryRadio}
              type="radio"
              name="salary"
              onChange={onChange}
              value={item}
              checked={value.salary === item}
            />
            <span>{`> ${parseNumberToShortString(item)}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Salary;
