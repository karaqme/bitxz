let tg = window.Telegram.WebApp;
tg.expand();

const firstName = tg.initData.user.first_name;
document.getElementById('user_name').innerText = firstName;
