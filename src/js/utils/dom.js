export const $ = selector => document.querySelector(selector);

export const showElement = $target => $target.classList.remove('d-none');
export const hideElement = $target => $target.classList.add('d-none');
