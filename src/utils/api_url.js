
export const basePath = `/ps-score/v1`;

export const getApiURL = (ENV=process.env.NODE_ENV, path=basePath) => {

  const domain = `${process.env.API_DOMAIN}${path}`;

  let protocol = 'http://';

  if(ENV !== 'staging' && ENV !== 'production'){
    protocol = 'http://';
  }

  return `${protocol}${domain}`;
};

export const API_URL = getApiURL();
