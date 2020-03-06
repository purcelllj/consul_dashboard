const getService = async name => {
  if (!name) {
    return new Error(`Expected the name of a service but received ${name}`);
  }
  let response;
  try {
    response = await fetch(`/service_detail/${name}`, { method: 'GET' });
  } catch (e) {
    return new Error(e);
  }
  return response;
};

export default getService;
