let tg = window.Telegram.WebApp;


document.getElementById('user_name').value.innerHTML = tg.initDataUnsafe.user.first_name;