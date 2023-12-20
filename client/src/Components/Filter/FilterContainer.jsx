import React, { useEffect } from "react";
import SideModal from "../../Components/Modal/SideModal";
import { useFilter, useModal } from "../../Store";
import Filter from "./Filter";
import { useFormik } from "formik";
import { FilterSchema } from "../../validation/Schema";
import notify from "../../notify/notify";
import { setQueryStringParameter } from "../../utility/utility";
function FilterContainer() {
  const FilterModal = useModal((state) => state.modals.filterModal);
  const closeModal = useModal((state) => state.closeModal);
  const setFilter = useFilter((state) => state.setFilter);
  const filter = useFilter((state) => state.filter);
  const resetFilter = useFilter((state) => state.resetFilter);

  const getFilterFromSearchParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    let newFilter = {};
    Object.entries(filter).forEach(([key, value]) => {
      newFilter = { ...newFilter, [key]: searchParams.get(key) || "" };
    });
    return newFilter;
  };

  // formik initialize
  const { handleSubmit, handleChange, values, resetForm, errors } = useFormik({
    initialValues: getFilterFromSearchParams(),
    onSubmit: (values) => {
      const { title, ...other } = values;
      setFilter({ ...other });

      // we close the modals in case side filter modal is open.
      closeModal();
    },
    validationSchema: FilterSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const clearFilter = () => {
    window.history.replaceState({}, "", window.location.pathname);
    resetForm({ values: {} });
    resetFilter();

    // we close the modals in case side filter modal is open.
    closeModal();
  };

  // custom onChange
  const onChangeHandler = (e) => {
    setQueryStringParameter(e.target.name, e.target.value);
    handleChange(e);
  };

  useEffect(() => {
    const errorsKeys = Object.keys(errors);
    if (errorsKeys.length === 0) return;

    notify(errors[errorsKeys], "error");
  }, [errors]);

  useEffect(() => {
    const newFilter = getFilterFromSearchParams();
    setFilter({ ...newFilter });
  }, []);
  return (
    <>
      {/* Side modal filter */}
      {FilterModal && (
        <SideModal
          styles={"rounded-none h-full w-full xl:w-[400px]"}
          closeStyles={"xl:hidden translate-x-[-20px] translate-y-[20px]"}
          disableClose={true}
        >
          <Filter
            handleSubmit={handleSubmit}
            handleChange={onChangeHandler}
            values={values}
            clearFilter={clearFilter}
          />
        </SideModal>
      )}

      {/* Left menu */}
      <div className="max-w-[250px] w-full  hidden xl:block ">
        <Filter
          handleSubmit={handleSubmit}
          handleChange={onChangeHandler}
          values={values}
          clearFilter={clearFilter}
        />
      </div>
    </>
  );
}

export default FilterContainer;
