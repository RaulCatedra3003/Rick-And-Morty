export const origin = {
  html: function (data) {
    const fragment = $(document.createDocumentFragment());
    const origin = function ({ name, type, dimension }) {
      const template = `
      <section class="modal-origin">
        <section class="origin-content">
          <p class="modal-origin__name">${name}</p>
          <p class="modal-origin__type">${type}</p>
          <p class="modal-origin__dimension">${dimension}</p>
        </section>
        <hr>
        <h2 class="modal-episode__list-title">Residents:</h2>
      </section>`;
      return template;
    };
    $(fragment).append(origin(data.data));
    return fragment;
  },
  addEventListeners: function () {
    return;
  },
};
