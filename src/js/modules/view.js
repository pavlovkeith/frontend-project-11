const renderFormState = (form, elements) => {
    const { input, feedback } = elements;
  
    if (form.state === 'valid') {
      input.classList.remove('is-invalid');
      feedback.textContent = '';
      input.value = '';
      input.focus();
    }
  
    if (form.state === 'invalid') {
      input.classList.add('is-invalid');
      feedback.textContent = form.errors;
    }
  };
  
  export const render = (state, elements) => {
    const { form } = state;
  
    renderFormState(form, elements);
  };
  