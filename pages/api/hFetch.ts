type FetchType = 'post' | 'get';

export const hFetch = async (url: string, type: FetchType, body?: any) => {
  let headers = {
    'Content-Type': 'application/json',
  };

  return await fetch(url, {
    method: type,
    body: JSON.stringify(body),
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
