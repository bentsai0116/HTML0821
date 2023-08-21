// LOG-IN  BTN 

const modal = document.querySelector('.modal'); 
const loginBtn = document.querySelector('.btn-Log-In');
const closeBtn = document.querySelector('.close');

// 執行openModal函式
loginBtn.addEventListener('click', openModal);

// closeModal函式
closeBtn.addEventListener('click', closeModal);

// 當點擊任意地方時，會執行outsideClick函式 // 當點擊表單以外的區域時會跳出表單
window.addEventListener('click', outsideClick);

// 定義openModal函式，用於打開彈出視窗 打開log in頁面
function openModal() {
  modal.style.display = 'block'; // 將彈出視窗的顯示設定為'block'，使其可見
  document.body.classList.toggle('no-scroll');
}

// 關閉彈出視窗
function closeModal() {
  modal.style.display = 'none'; 
}

// 點擊視窗外部時自動關閉視窗的功能
function outsideClick(e) {
  // 檢查點擊的目標是否為彈出視窗本身
  if (e.target == modal) {
    closeModal(); // 如果點擊目標是彈出視窗本身，則呼叫closeModal函式關閉視窗
  }
}

/*  MOBILE-MENU */


const btn = document.getElementById('menu-btn');

const nav = document.getElementById('menu');


function navToggle() {

  btn.classList.toggle('open');

  nav.classList.toggle('hidden');

  document.body.classList.toggle('no-scroll');
}

// 當按鈕被點擊時，執行navToggle函式
btn.addEventListener('click', navToggle);


