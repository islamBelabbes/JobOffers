import { toast } from "react-toastify";

const notify = (message, type, options) => {
  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "loading":
      toast.loading(message, options);
      break;
    default:
      throw new Error("missing type");
  }
};

export default notify;
