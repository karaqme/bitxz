var number_of_star = 150;

var random_number = function(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
};

var createStars = function(){
	var star_rotation = 'move_right;';
	for(var i=0; i<number_of_star; i++){
		rot= (star_rotation=='move_right;'?'move_left;':'move_right;');
		var star_top = random_number(0,document.documentElement.clientHeight);
		var star_left = random_number(0,document.documentElement.clientWidth);
		var star_radius = random_number(0,4);
		var  star_duration= random_number(6,16);

		document.body.innerHTML += "<div class='star' style='top: "+star_top+"px; left: "+star_left+"px; width: "+star_radius+"px; height: "+star_radius+"px; "+
		"animation-name:"+star_rotation+"; animation-duration: "+star_duration+"s;'></div>";
	}
};

createStars();





// Import the Telegram Mini Apps SDK
const { TelegramMiniApp } = require('telegram-mini-apps-sdk');

// Initialize the SDK with your bot token
const app = new TelegramMiniApp({
  botToken: '7234034998:AAHwu_LN_vuHgQyDUDCOru5WCI704-Wh_dg',
});

// Get the user's chat ID
app.getChatId().then((chatId) => {
  // Use the chat ID to fetch user information
  fetch(`https://api.telegram.org/bot${app.botToken}/getChat?chat_id=${chatId}`)
    .then((response) => response.json())
    .then((data) => {
      // Display the user's information in your app
      const userInfo = data.result;
      const html = `
        <h1>${userInfo.first_name} ${userInfo.last_name}</h1>
        <p>Username: ${userInfo.username}</p>
        <p>Chat ID: ${chatId}</p>
      `;
      document.getElementById('user-info').innerHTML = html;
    });
});