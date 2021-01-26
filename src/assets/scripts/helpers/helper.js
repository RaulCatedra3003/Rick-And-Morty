import { store } from '../store/store';
import { home } from '../views/components/Home';
import { renderView } from '../views/renderview';

export const helper = {
  closeSidebarAndRender: function (action, component1, component2) {
    store.appState.modal = 'close';
    store.appState.sideBar = 'open';
    home.hiddeSideBar();
    renderView(component1, component1.html(action.payload), '#modalPrincipal');
    renderView(component2, component2.html(action.payload), '#modalList');
    home.showModal();
    setTimeout(function () {
      home.showContent();
    }, 1000);
  },
  animateAndRender: function (action, component1, component2) {
    store.appState.modal = 'open';
    store.appState.sideBar = 'open';
    home.hiddeSideBar();
    home.hiddeContent();
    home.hiddeModal();
    setTimeout(function () {
      store.appState.modal = 'close';
      store.appState.sideBar = 'open';
      home.hiddeSideBar();
      renderView(
        component1,
        component1.html(action.payload),
        '#modalPrincipal',
      );
      renderView(component2, component2.html(action.payload), '#modalList');
      home.showModal();
      setTimeout(function () {
        home.showContent();
      }, 1000);
    }, 1300);
  },
};
