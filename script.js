let tg = window.Telegram.WebApp;
tg.expand();

function malou() {
    document.getElementById('user_name').innerHTML = tg.initData.user.first_name;;
}