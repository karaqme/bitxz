let tg = window.Telegram.WebApp;
tg.expand();

if (tg && tg.initData && tg.initData.user) {
    const firstName = tg.initData.user.first_name;
    document.getElementById('user_name').innerText = firstName;
  } else {
    console.error('Error: Failed to retrieve user data');
  }