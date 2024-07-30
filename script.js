let tg = window.Telegram.WebApp;
tg.expand();

document.getElementById('user_name').value = tg.initDataUnsafe.user.first_name;