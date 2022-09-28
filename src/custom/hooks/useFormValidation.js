import { useState } from "react";

export const useFormValidation = (options) => {
  const [data, setData] = useState(options?.initialValues || {});
  const [errors, setErrors] = useState({});

  const handleChange = (key) => (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleAdd = (key, newValuesToKey) => {
    setData({
      ...data,
      [key]: newValuesToKey,
    });
  };

  const handleSubmit = async (submitFunction) => {
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors = {};

      for (const key in validations) {
        const value = data[key];
        console.log(value);
        const validation = validations[key];
        if (validation?.required?.value && !value && value === "") {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (valid && pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (valid && custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }
    setErrors({});
    if (submitFunction !== null) submitFunction();
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
    handleAdd,
    setData,
  };
};
