import { dispacher } from '../dispatcher/dispatcher';

export const actions = {
  init: function () {
    //Todo metodo get a la api para recoger los episodios.
    dispacher.emit('init', {});
  },
  toggleSideBar: function () {
    dispacher.emit('toggleSideBar', {});
  },
};
