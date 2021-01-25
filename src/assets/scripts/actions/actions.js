import axios from 'axios';
import { get } from '../API-utils/get';
import { dispacher } from '../dispatcher/dispatcher';
import { store } from '../store/store';

export const actions = {
  init: function () {
    get.episodesPage(store.appState.page).then(data => {
      dispacher.emit('init', data);
    });
  },
  toggleSideBar: function () {
    dispacher.emit('toggleSideBar', {});
  },
  changePage: function (e) {
    get
      .data($(e.target).data('page'))
      .then(data => {
        dispacher.emit('changePage', data);
      })
      .catch(error => {
        console.log(error);
        console.log('theres no more episodes.... yet!');
      });
  },
  showEpisode: function (e) {
    get.data($(e.target).parent().data('episode')).then(data1 => {
      const episode = data1;
      const charactersPromises = [];
      episode.data.characters.forEach(element => {
        charactersPromises.push(axios.get(element));
      });
      get.all(charactersPromises).then(data2 => {
        episode.data.characters = data2;
        dispacher.emit('showEpisode', episode);
      });
    });
  },
};
