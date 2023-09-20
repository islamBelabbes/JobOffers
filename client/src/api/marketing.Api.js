import { API } from "../utility/axios.Utility";
export const newsletterSubscribe = async ({
  first_name,
  last_name,
  email,
  token,
}) => {
  const tokenData = await token;
  try {
    const data = await API.post(
      `/marketing/emails/subscribe`,
      {
        first_name,
        last_name,
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData}`,
        },
      },
      { withCredentials: true }
    );
    return data.data;
  } catch (err) {
    throw err;
  }
};
