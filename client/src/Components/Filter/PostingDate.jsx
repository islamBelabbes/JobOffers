import React from "react";
import styles from "../Shared/Style";
import { timeAgo } from "../../utility/Date.Utility";
const now = new Date();

const date = [
  {
    time: new Date(now.getTime() - 24 * 60 * 60 * 1000),
    title: timeAgo(now.getTime() - 24 * 60 * 60 * 1000),
  },
  {
    time: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
    title: timeAgo(new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)),
  },
  {
    time: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000),
    title: timeAgo(new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)),
  },
];
function PostingDate() {
  return (
    <div>
      <h1 className="text-lg font-medium leading-7 text-primary">
        Date of Posting
      </h1>
      {date.map((item, index) => (
        <div key={index} className="flex items-center gap-2 mt-3 ">
          <input
            className={styles.primaryRadio}
            type="radio"
            value={item.time}
            name="date"
          />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default PostingDate;
