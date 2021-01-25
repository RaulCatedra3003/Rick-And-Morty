import axios from 'axios';

export const get = {
  episodesPage: function (page) {
    return axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
  },
  data: function (url) {
    return axios.get(`${url}`);
  },
};
