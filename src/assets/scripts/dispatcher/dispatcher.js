import { store } from '../store/store';

export const dispacher = {
  emit: function (action, data) {
    Object.values(store.onAction).forEach(element => {
      element({ name: action, payload: data });
    });
  },
};
