import { toast } from 'react-toastify';

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
