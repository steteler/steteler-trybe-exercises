const BTN_CLICK_COUNT = document.getElementById('button-click-count');
const LBL_CLICK_COUNT = document.getElementById('click-count');

BTN_CLICK_COUNT.addEventListener('click', () => { LBL_CLICK_COUNT.innerText = parseInt(LBL_CLICK_COUNT.innerText) + 1 });