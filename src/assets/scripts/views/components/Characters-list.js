import { actions } from '../../actions/actions';

export const charactersList = {
  html: function (data) {
    const fragment = $(document.createDocumentFragment());
    const character = function ({ image, status, name, species, url }) {
      const template = `
        <button class="modal-characters" data-character="${url}">
          <section class="modal-characters__img" style="background-image: url(${image});"></section>
          <section class="characters-content">
            <p class="characters-content__name">${name} | ${species}</p>
            <p class="characters-content__status ${status}">${status}</p>
          </section>
        </button>`;
      return template;
    };
    data.data[data.data.characters ? 'characters' : 'residents'].forEach(
      element => {
        $(fragment).append(character(element.data));
      },
    );
    return fragment;
  },
  addEventListeners: function () {
    $('.modal-characters__img').on('click', actions.showCharacter);
  },
};
