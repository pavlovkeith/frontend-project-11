import * as yup from 'yup';

const validateUrl = (url, existingUrls) => {
  const schema = yup
    .string()
    .url('Invalid URL')
    .notOneOf(existingUrls, 'RSS already exists');

  return schema.validate(url);
};

export default validateUrl;
