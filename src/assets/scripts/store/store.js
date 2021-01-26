import { renderView } from '../views/renderview';
import { home } from '../views/components/Home';
import { sidebarList } from '../views/components/SidebarList';
import { episode } from '../views/components/Episode';
import { charactersList } from '../views/components/Characters-list';
import { character } from '../views/components/Character';
import { episodesList } from '../views/components/Episodes-list';
import { origin } from '../views/components/Origin';
import { helper } from '../helpers/helper';

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
        if (store.appState.modal === 'open') {
          helper.closeSidebarAndRender(action, episode, charactersList);
        } else if (store.appState.modal === 'close') {
          helper.animateAndRender(action, episode, charactersList);
        }
      }
    },
    showCharacter: function (action) {
      if (action.name === 'showCharacter') {
        helper.animateAndRender(action, character, episodesList);
      }
    },
    showOrigin: function (action) {
      if (action.name === 'showOrigin') {
        helper.animateAndRender(action, origin, charactersList);
      }
    },
  },
};
