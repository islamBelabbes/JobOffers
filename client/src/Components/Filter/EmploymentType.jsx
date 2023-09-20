import React from "react";
import styles from "../Shared/Style";
import { jobTypes } from "../../utility/filterOptions";
function EmploymentType({ onChange, value }) {
  return (
    <div>
      <h1 className="text-lg font-medium leading-7 text-primary">Type</h1>
      <label className="flex items-center gap-2 mt-3 cursor-pointer ">
        <input
          className={styles.primaryRadio}
          type="radio"
          name="type"
          onChange={onChange}
          value={""}
          checked={value.type === ""}
        />
        <span>Any</span>
      </label>
      {jobTypes.map((item, index) => (
        <div key={index} className="flex items-center gap-2 mt-3 ">
          <input
            className={styles.primaryRadio}
            name="type"
            value={item}
            type="radio"
            onChange={onChange}
            checked={value.type === item}
          />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default EmploymentType;
