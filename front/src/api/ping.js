import axios from 'axios';

const url = `/api/ping`;

export default {
  ping: async string => {
    return axios
      .post(url, {
        params: {
          string: string,
        }
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return null;
      });
  },
};
