import { toast } from "react-toastify";

export const dismiss = (id) => {
  toast.dismiss(id);
};
const notify = (message, type, options) => {
  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "info":
      toast.info(message, options);
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
