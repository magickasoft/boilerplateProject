export const isEmptyObject = obj =>
  Object.getOwnPropertyNames(obj).length === 0;

export const processingRequest = async request => {
  try {
    const response = await request;
    return response?.data;
  } catch (e) {
    const error = isEmptyObject(e)
      ? {globalError: 'Something wrong... Try again.'}
      : e?.data;
    return Promise.reject(error);
  }
};

export const fileFormData = fields => {
  const formData = new FormData();
  formData.append('file', {
    uri: fields.filepath,
    type: fields.filetype,
    name: fields.filename,
  });
  return formData;
};
