const getServices = async (name = null) => {
  let response;
  if (!name) {
    try {
      response = await fetch('/services', { method: 'GET' });
    } catch (e) {
      return new Error(e);
    }
  } else {
    try {
      response = await fetch(`/service_detail/${name}`, { method: 'GET' });
    } catch (e) {
      return new Error(e);
    }
  }
  return response;
};

export default getServices;
