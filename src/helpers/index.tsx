export const regex: any = {
  email: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /^[A-Za-z\d@$!%*#?&]{8,}$/,
};

export const isEmpty: any = (value: any) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" &&
      (Object.keys(value).length === 0 ||
        Object.keys(value).every((key: any) => isEmpty(value[key])))) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const isFormValid = (form: any, setForm: any) => {
  return Object.keys(form).map((key) => {
    const regexValue = key.replace(/([a-z](?=[A-Z]))/g, "$1 ");
    if (regex[key]) {
      let value: any;
      let success;
      if (isEmpty(form[key]) || !regex[key].test(form[key])) {
        value = `Invalid ${
          regexValue.charAt(0).toUpperCase() + regexValue.slice(1)
        }`;
        success = false;
      } else {
        value = null;
        success = true;
      }
      setForm((prev: any) => ({
        ...prev,
        errors: {
          ...prev.errors,
          [key]: value,
        },
      }));
      return success;
    } else {
      let value: any;
      let success;
      if (isEmpty(form[key])) {
        value = `Invalid ${
          regexValue.charAt(0).toUpperCase() + regexValue.slice(1)
        }`;
        success = false;
      } else {
        value = null;
        success = true;
      }
      setForm((prev: any) => ({
        ...prev,
        errors: {
          ...prev.errors,
          [key]: value,
        },
      }));
      return success;
    }
  });
};
