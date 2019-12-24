const getServices = async () => {
  let response;
  try {
    response = await fetch('/services', { method: 'GET' });
  } catch (e) {
    throw new Error(e);
  }
  return response;
};

export default getServices;
