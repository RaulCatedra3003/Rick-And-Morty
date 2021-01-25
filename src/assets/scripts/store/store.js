import { renderView } from '../views/renderview';
import { home } from '../views/components/Home';
import { sidebarList } from '../views/components/SidebarList';

export const store = {
  appState: {
    value: 0,
    status: 'home',
    sideBar: 'open',
    page: 1,
    modal: 'open',
  },
  onAction: {
    init: function (action) {
      if (action.name === 'init') {
        renderView(home, home.html());
        renderView(
          sidebarList,
          sidebarList.html(action.payload),
          '#sideBarContent',
        );
      }
    },
    toggleSideBar: function (action) {
      if (action.name === 'toggleSideBar') {
        if (store.appState.sideBar === 'open') {
          store.appState.sideBar = 'close';
          home.showSideBar();
        } else if (store.appState.sideBar === 'close') {
          store.appState.sideBar = 'open';
          home.hiddeSideBar();
        }
      }
    },
    changePage: function (action) {
      if (action.name === 'changePage') {
        store.appState.page = parseInt(action.payload.config.url.split('=')[1]);
        renderView(
          sidebarList,
          sidebarList.html(action.payload),
          '#sideBarContent',
        );
      }
    },
    showEpisode: function (action) {
      if (action.name === 'showEpisode') {
        console.log(action.payload);
        if (store.appState.modal === 'open') {
          store.appState.modal = 'close';
          store.appState.sideBar = 'open';
          home.hiddeSideBar();
          //todo introducir datos del capitulo en el modal
          home.showModal();
        } else if (store.appState.modal === 'close') {
          store.appState.modal = 'open';
          store.appState.sideBar = 'open';
          home.hiddeSideBar();
          home.hiddeModal();
          setTimeout(function () {
            store.appState.modal = 'close';
            store.appState.sideBar = 'open';
            home.hiddeSideBar();
            //todo introducir datos del capitulo en el modal
            home.showModal();
          }, 2000);
        }
      }
    },
  },
  getState: function () {
    return Object.assign({}, this.appState);
  },
};
