import { renderView } from '../views/renderview';
import { home } from '../views/components/Home';

export const store = {
  state: { value: 0, status: 'home', sideBar: 'open' },
  onAction: {
    init: function (action) {
      if (action.name === 'init') {
        renderView(home);
      }
    },
    toggleSideBar: function (action) {
      if (action.name === 'toggleSideBar') {
        if (store.state.sideBar === 'open') {
          store.state.sideBar = 'close';
          home.showSideBar();
        } else if (store.state.sideBar === 'close') {
          store.state.sideBar = 'open';
          home.hiddeSideBar();
        }
      }
    },
  },
  getState: function () {
    return Object.assign({}, this.state);
  },
};
