import { API } from "../utility/axios.Utility";
export const getJobs = async (filter) => {
  const filterParam = `title=${filter.title}&location=${filter.location}&salary=${filter.salary}&date=${filter.date}&type=${filter.type}`;
  try {
    const data = await API.get(`/jobs?${filterParam}`);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
