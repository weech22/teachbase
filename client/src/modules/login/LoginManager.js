import ENDPOINTS from '../../API';

// eslint-disable-next-line import/prefer-default-export
export const login = ({ body }) =>
  fetch(ENDPOINTS.LOGIN(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(({ token, error }) => {
      if (error) {
        throw error;
      }
      return token;
    })
    .catch((ex) => {
      throw ex;
    });
