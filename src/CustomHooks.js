import { useState } from "react";

const useSubmitForm = (state, callback) => {
  const [inputs, setInputs] = useState(state);
  const [validated, setValidated] = useState(false);
  const handleSubmit = event => {
    const form = event.currentTarget;

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (form.checkValidity()) {
      callback();
    }

    setValidated(true);
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
    validated
  };
};

export default useSubmitForm;
