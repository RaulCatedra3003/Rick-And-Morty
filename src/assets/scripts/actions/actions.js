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
      .catch(() => {
        console.log('theres no more episodes.... yet!');
      });
  },
  showEpisode: function (e) {
    get.data($(e.target).closest('button').data('episode')).then(data1 => {
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
  showCharacter: function (e) {
    get.data($(e.target).closest('button').data('character')).then(data1 => {
      const character = data1;
      const episodesPromises = [];
      character.data.episode.forEach(element => {
        episodesPromises.push(axios.get(element));
      });
      get.all(episodesPromises).then(data2 => {
        character.data.episode = data2;
        dispacher.emit('showCharacter', character);
      });
    });
  },
  showOrigin: function (e) {
    get.data($(e.target).data('origin')).then(data1 => {
      const origin = data1;
      const residentsPromises = [];
      origin.data.residents.forEach(element => {
        residentsPromises.push(axios.get(element));
      });
      get.all(residentsPromises).then(data2 => {
        origin.data.residents = data2;
        dispacher.emit('showOrigin', origin);
      });
    });
  },
};
