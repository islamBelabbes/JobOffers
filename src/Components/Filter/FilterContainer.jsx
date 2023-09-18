import React from "react";
import SideModal from "../../Components/Modal/SideModal";
import { initialFilter, useFilter, useModal } from "../../Store";
import Filter from "./Filter";
import { useFormik } from "formik";
function FilterContainer() {
  const FilterModal = useModal((state) => state.modals.filterModal);
  const closeModal = useModal((state) => state.closeModal);
  const setFilter = useFilter((state) => state.setFilter);
  const filter = useFilter((state) => state.filter);
  const resetFilter = useFilter((state) => state.resetFilter);

  // formik initialize
  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues: filter,
    onSubmit: (values) => {
      const { title, ...other } = values;
      setFilter({ ...other });

      // we close the modals in case side filter modal is open.
      closeModal();
    },
  });

  const clearFilter = () => {
    resetForm();
    resetFilter();

    // we close the modals in case side filter modal is open.
    closeModal();
  };

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
            handleChange={handleChange}
            values={values}
            clearFilter={clearFilter}
          />
        </SideModal>
      )}

      {/* Left menu */}
      <div className="max-w-[250px] w-full  hidden xl:block ">
        <Filter
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
          clearFilter={clearFilter}
        />
      </div>
    </>
  );
}

export default FilterContainer;
