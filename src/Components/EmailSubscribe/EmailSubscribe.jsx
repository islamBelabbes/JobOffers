import React from "react";
import Button from "../Shared/Button";
import styles, { layout } from "../Shared/Style";
function EmailSubscribe() {
  return (
    <div className={layout.MainContainer}>
      <h1 className="text-primary text-[20px] font-bold leading-[30px]">
        📨 Email me for jobs
      </h1>
      <p className="text-[rgba(20, 20, 20, 0.80)] text-sm font-normal leading-[21px]">
        Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea
        foes.
      </p>
      <input
        type="text"
        className={styles.primaryInput}
        placeholder="name@mail.com?"
      />
      <Button variant={"primary"} styles={"w-full"}>
        Subscribe
      </Button>
    </div>
  );
}

export default EmailSubscribe;
