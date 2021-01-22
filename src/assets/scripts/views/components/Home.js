import { actions } from '../../actions/actions';

export const home = {
  html: function () {
    const template = `
    <header class="header">
      <button class="hamburguer bx bx-menu" id="hamburguer" data-status="close"></button>
      <section class="title">
        <img class="title__img"
          src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
          alt="logo">
        <p class="title__subtitle">World</p>
      </section>
    </header>
    <section class="main">
      <nav class="side-bar"></nav>
      <section class="content"></section>
    </section>`;
    return template;
  },
  addEventListeners: function () {
    $('#hamburguer').on('click', actions.toggleSideBar);
  },
  showSideBar: function () {
    $('.side-bar').css({ left: '0', transition: 'left 1s linear' });
  },
  hiddeSideBar: function () {
    $('.side-bar').css({ left: '-100%', transition: 'left 1s linear' });
  },
};
