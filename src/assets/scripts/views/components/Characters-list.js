export const charactersList = {
  html: function (data) {
    const fragment = $(document.createDocumentFragment());
    const character = function ({ image, status, name, species, url }) {
      const template = `
        <button class="modal-character" data-character="${url}">
          <section class="modal-character__img" style="background-image: url(${image});"></section>
          <section class="character-content">
            <p class="character-content__name">${name} | ${species}</p>
            <p class="character-content__status ${status}">${status}</p>
          </section>
        </button>`;
      return template;
    };
    data.data.characters.forEach(element => {
      $(fragment).append(character(element.data));
    });
    return fragment;
  },
  addEventListeners: function () {
    //todo añadir escuchadores del modal.
  },
};
