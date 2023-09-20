import React, { useEffect, useState } from "react";
import Button from "../Shared/Button";
import styles, { layout } from "../Shared/Style";
import { newsletterSubscribe } from "../../api/marketing.Api";
import notify from "../../notify/notify";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "@clerk/clerk-react";
import { newsLetterSchema } from "../../validation/Schema";
import { useFormik } from "formik";
function EmailSubscribe() {
  const { user } = useUser();
  const mutation = useMutation({
    mutationFn: async (data) => {
      return await newsletterSubscribe(data);
    },
    onMutate: () => false,
    retry: false,
    onError: (error) => {
      if (error?.response?.status === 409) {
        return notify(error?.response?.data?.message, "error");
      }
      return notify("Something went wrong", "error");
    },
    onSuccess: (data) => {
      notify("Successfully subscribed", "success");
    },
  });
  const { handleSubmit, handleChange, values, errors, setErrors } = useFormik({
    initialValues: {
      email: user?.emailAddresses[0]?.emailAddress || "",
    },
    onSubmit: async (values) => {
      try {
        mutation.mutate(values);
      } catch (err) {
        notify(err.message, "error");
      }
    },
    validationSchema: newsLetterSchema,
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
  });
  useEffect(() => {
    const errorsKeys = Object.keys(errors);
    if (errorsKeys.length === 0) return;

    notify(errors[errorsKeys], "error");
  }, [errors]);
  return (
    <form onSubmit={handleSubmit} className={layout.MainContainer}>
      <h1 className="text-primary text-[20px] font-bold leading-[30px]">
        📨 Email me for jobs
      </h1>
      <p className="text-[rgba(20, 20, 20, 0.80)] text-sm font-normal leading-[21px]">
        Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea
        foes.
      </p>
      <input
        type="email"
        name="email"
        className={`${styles.primaryInput} ${errors.email && "border-red-800"}`}
        placeholder="name@mail.com"
        onChange={(e) => {
          setErrors({});
          handleChange(e);
        }}
        value={values.email}
      />
      <Button
        type={"submit"}
        variant={"primary"}
        styles={"w-full"}
        disabled={mutation.isLoading}
      >
        Subscribe
      </Button>
    </form>
  );
}

export default EmailSubscribe;
