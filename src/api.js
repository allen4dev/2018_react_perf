import axios from 'axios';

const baseUrl = 'http://localhost:8080';
const servantsUrl = `${baseUrl}/servants`;
const avatarsUrl = `${baseUrl}/avatars`;

export default {
  servants: {
    async all() {
      return await axios.get(servantsUrl);
    },
  },

  avatars: {
    async all() {
      return await axios.get(avatarsUrl);
    },
  },
};
