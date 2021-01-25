export const renderView = (component, fragment, element = '#root') => {
  $(element).html(fragment);
  component.addEventListeners();
};
