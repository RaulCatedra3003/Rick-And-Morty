export const episodesList = {
  html: function (data) {
    const fragment = $(document.createDocumentFragment());
    const episode = function ({ name, air_date, episode, url }) {
      const template = `
        <button class="modal-episodes" data-episode="${url}">
          <p class="modal-episodes__name">${name}</p>
          <p class="modal-episodes__code">${episode}</p>
          <p class="modal-episodes__air_date">${air_date}</p>
        </button>`;
      return template;
    };
    data.data.episode.forEach(element => {
      $(fragment).append(episode(element.data));
    });
    return fragment;
  },
  addEventListeners: function () {
    console.log('añadir escuchadores a los botones de episodio');
    //Todo añadir escuchadores a los botones de episodio;
  },
};
