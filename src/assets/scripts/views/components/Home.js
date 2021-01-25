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
    <nav class="side-bar">
      <section class="side-bar__content" id="sideBarContent"></section>
    </nav>
    <section class="main">
      <section class="content">
        <section class="content-principal" id="modalPrincipal" style="display: none;"></section>
        <section class="content-list" id="modalList" style="display: none;"></section>
      </section>
    </section>`;
    return template;
  },
  addEventListeners: function () {
    $('#hamburguer').on('click', actions.toggleSideBar);
  },
  showSideBar: function () {
    $('.side-bar').css({ left: '0', transition: 'left 1s ease-out' });
  },
  hiddeSideBar: function () {
    $('.side-bar').css({ left: '-100%', transition: 'left 1s ease-in' });
  },
  showModal: function () {
    $('.content').css({ animation: 'showModal 1s ease-out' });
    $('.content').css({ width: '80%', height: '80%' });
  },
  hiddeModal: function () {
    $('.content').css({ animation: 'hiddeModal 1s ease-in' });
    $('.content').css({ width: '0%', height: '0%' });
  },
  hiddeContent: function () {
    $('.content-principal').fadeOut();
    $('.content-list').fadeOut();
  },
  showContent: function () {
    $('.content-principal').fadeIn();
    $('.content-list').fadeIn();
  },
};
