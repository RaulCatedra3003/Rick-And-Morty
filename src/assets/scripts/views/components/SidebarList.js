import { actions } from '../../actions/actions';
import { store } from '../../store/store';

export const sidebarList = {
  html: function (data) {
    const fragment = $(document.createDocumentFragment());
    const buttons = function ({ page }, { pages, prev, next }) {
      const template = `
      <section class="side-bar__buttons">
        <button class="side-bar__buttons-button bx bx-left-arrow" data-page="${prev}"></button>
        <p class="side-bar__buttons-page">${page}/${pages}</p>
        <button class="side-bar__buttons-button bx bx-right-arrow" data-page="${next}"></button>
      </section>`;
      return template;
    };
    const component = function ({ name, episode, url }) {
      const template = `
      <button class="side-bar__episode" data-episode="${url}">
        <p class="side-bar__episode-name">${name}</p>
        <p class="side-bar__episode-episode">${episode}</p>
      </button>`;
      return template;
    };
    $(fragment).append(buttons(store.appState, data.data.info));
    data.data.results.forEach(element => {
      $(fragment).append(component(element));
    });
    return fragment;
  },
  addEventListeners: function () {
    $('.side-bar__buttons-button').on('click', actions.changePage);
    $('.side-bar__episode').on('click', actions.showEpisode);
  },
};
