import '../styles/reset.css';
import '../styles/index.css';
import { actions } from './actions/actions';

$(function () {
  actions.init();
});

/* const showSideBar = e => {
  if ($(e.target).data('status') === 'close') {
    $('.side-bar').css({ left: '0', transition: 'left 1s linear' });
    $(e.target).data('status', 'open');
  } else {
    $('.side-bar').css({ left: '-100%', transition: 'left 1s linear' });
    $(e.target).data('status', 'close');
  }
};

$('#hamburguer').on('click', showSideBar); */
