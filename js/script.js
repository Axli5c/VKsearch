//504e8112911c67847ca9ac7cc05fa75ac55451dad6c25d6ccf543a3cd69585d7b20cd669d44afb6bb4145
//https://oauth.vk.com/authorize?client_id=6834910&redirect_uri=&display=page&scope=&response_type=token&v=5.92


var idblock = 0;
var lastinput = localStorage.getItem('lastinput');

var all = {};
if(document.title == 'VKsearch')
loadUsers(lastinput);

function getUrl(method, params)
{
	if (!method) throw new Error ('ВЫ не указали метод!');
	params=params  || {};
	params['access_token'] = '52e224afca5e040a9c1d7f486524517ce37812c65972ca46bc0c2df5d5403965a54c644254844d06f5116';
	return 'https://api.vk.com/method/'+ method + '?' + $.param (params);
}

function sendRequest(method, params, func) {
	$.ajax({
	url: getUrl(method,params),
	method:'GET',
	dataType: 'JSONP',
	success: function(data){
		var block = document.getElementById("group");
		block.innerHTML = '';
		idblock = 0 ;
		all = data.response.items;
		console.log(data);
	list ();
}
	});
}

window.onload = function(){

document.getElementById('searchpeople').value = lastinput;
}
function loadUsers(searchString) {
	sendRequest('users.search', {q: searchString , count: 100, fields: 'photo_max,online', v: '5.92' }, function (data) {
	
});
}

function list (){

	var block = document.getElementById("group");
	var status = '';
	
	
if(idblock<all.length - 1){



	for(var i=0;i<10;i++)
		{

			if (all[idblock].online == 0)
				{
					status = 'statusUsers ofline';

				}
			else
				{
					status = 'statusUsers';
				}

	block.innerHTML += '<a class="people" onclick="profileusers(this);" id="'+idblock+'">'
	+'<img class="photo" src="'+all[idblock].photo_max+'"</a>'+
	'<h4 class="first_name">'+all[idblock].first_name+'</h4>'+
	'<h3 class="last_name">'+all[idblock].last_name+'</h3> <div class="'+ status +'"></div> </div>';

		idblock+=1;
		if (idblock>=all.length){
			break;
		}

		}
}
}

function search() {
	
	var inputUsers = document.getElementById('searchpeople');
	localStorage.setItem('lastinput', inputUsers.value);
	if(document.title == 'VK user'){
		document.location.href = 'index.html';
	}
	loadUsers (inputUsers.value);

}

function enter(keyboard) {
    if (keyboard.keyCode == 13) {
      search();
    }

}





function profileusers(userblock){

	localStorage.setItem('savedata', JSON.stringify(all[userblock.id]));
	localStorage.setItem('linedata', JSON.stringify(all));
	document.location.href ='indexuser.html';

}
function loadprofile(){
	var dufp = JSON.parse(localStorage.getItem('savedata'));
	var userphoto = document.getElementById('userphoto');
	var first_name = document.getElementById('first_name');
	var last_name = document.getElementById('last_name');
	var statustext = document.getElementById('statustext');
	var statusIcon = document.getElementById('statusIcon');
	var id = document.getElementById('idusers');	
	userphoto.src = dufp.photo_max;
	console.log(dufp);
	first_name.innerHTML = dufp.first_name+ ' ' + dufp.last_name;
	id.innerHTML = '<a href="https://vk.com/id'+dufp.id+'"">перейти на страницу пользователя</a>';
	
	
	if(dufp.online == 0){
		statusIcon.className = 'statusProfile ofline';
		statustext.innerHTML = "offline";	
	}
	else{
		statusIcon.className = 'statusProfile';
		statustext.innerHTML = "online";


	}

}

