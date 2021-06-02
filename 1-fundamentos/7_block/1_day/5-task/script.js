const LBL_CLICK_COUNT = document.getElementById('click-count');
let clickCount = 0;

document.getElementById('button-click-count').addEventListener('click', () => {
  clickCount += 1;
  LBL_CLICK_COUNT.innerText = clickCount;
});
