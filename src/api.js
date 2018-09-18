import axios from 'axios';

const baseUrl = 'http://localhost:8080';
const servantsUrl = `${baseUrl}/servants`;

export default {
  servants: {
    async all() {
      console.log(servantsUrl);
      const response = await axios.get(servantsUrl);
      return response;
    },
  },
};
