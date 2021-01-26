export const character = {
  html: function (data) {
    const fragment = $(document.createDocumentFragment());
    const character = function ({
      image,
      status,
      name,
      species,
      gender,
      origin,
    }) {
      const template = `
      <section class="modal-character">
        <section class="modal-character__flex">
          <section class="modal-character__img" style="background-image: url(${image});"></section>
          <section class="character-content">
            <p class="character-content__name">${name} | ${species}</p>
            <p class="character-content__status ${status}">${status}</p>
            <p class="character-content__gender">${gender}</p>
            <p class="character-content__origin" data-origin="${origin.url}">${origin.name}</p>
          </section>
        </section>
        <hr>
        <h2 class="modal-episode__list-title">Seen in:</h2>
      </section>`;
      return template;
    };
    $(fragment).append(character(data.data));
    return fragment;
  },
  addEventListeners: function () {
    //Todo añadir escuchador al origen
    console.log('añadir escuchador al origen');
  },
};
