export const episode = {
  html: function (data) {
    const fragment = $(document.createDocumentFragment());
    const episode = function ({ name, air_date, episode }) {
      const template = `
        <section class="modal-episode">
          <p class="modal-episode__name">${name}</p>
          <p class="modal-episode__code">${episode}</p>
          <p class="modal-episode__air_date">${air_date}</p>
        </section>
        <hr>
        <h2 class="modal-episode__list-title">Characters:</h2>`;
      return template;
    };
    $(fragment).append(episode(data.data));
    return fragment;
  },
  addEventListeners: function () {
    return;
  },
};
