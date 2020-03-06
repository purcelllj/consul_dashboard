const getServices = async () => {
  let response;
  try {
    response = await fetch('/services', { method: 'GET' });
    console.log(typeof response);
  } catch (e) {
    return new Error(e);
  }
  return response;
};

export default getServices;
