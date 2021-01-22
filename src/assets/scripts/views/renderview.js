export const renderView = (fragment, element = '#root') => {
  $(element).html(fragment);
  addEventListeners(status);
};
