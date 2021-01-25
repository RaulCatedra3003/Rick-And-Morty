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
    get.data($(e.target).parent().data('episode')).then(data => {
      dispacher.emit('showEpisode', data);
    });
  },
};
