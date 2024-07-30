let tg = window.Telegram.WebApp;
tg.expand();


const firstName = tg.initData.user.first_name;

function malou() {
    document.getElementById('user_name').innerHTML = firstName;
}