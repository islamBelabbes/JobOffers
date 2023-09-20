import { API } from "../utility/axios.Utility";
export const getJobs = async (filter, pageParam = 1) => {
  const filterParam = `title=${filter.title}&location=${filter.location}&salary=${filter.salary}&date=${filter.date}&type=${filter.type}`;
  try {
    const data = await API.get(
      `/jobs?limit=2&page=${pageParam}&${filterParam}`
    );
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
