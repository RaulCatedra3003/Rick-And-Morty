import { store } from '../store/store';

export const renderView = (fragment, element = '#root') => {
  $(element).html(fragment.html);
  fragment.addEventListeners();
};
