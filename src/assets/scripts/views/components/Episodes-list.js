import { actions } from '../../actions/actions';

export const episodesList = {
  html: function (data) {
    const fragment = $(document.createDocumentFragment());
    const episode = function ({ name, episode, url }) {
      const template = `
        <button class="modal-episodes" data-episode="${url}">
          <p class="modal-episodes__name">${name}</p>
          <p class="modal-episodes__code">${episode}</p>
        </button>`;
      return template;
    };
    data.data.episode.forEach(element => {
      $(fragment).append(episode(element.data));
    });
    return fragment;
  },
  addEventListeners: function () {
    $('.modal-episodes').on('click', actions.showEpisode);
  },
};
