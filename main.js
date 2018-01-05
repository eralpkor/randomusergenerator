// Randon User Gererator 
// Author: Eralp
// Date: 01/05/18

var url = 'https://randomuser.me/api/';
var avatar = document.getElementById('avatar');
var fullName = document.querySelector('#fullname');
var userName = document.getElementById('username');
var email = document.querySelector('#email');
var city = document.getElementById('city');
var btn = document.querySelector('#btn');

function nextUser() {
  fetch(url)
	.then(handleErrors)
  .then(parseJson)
	.then(updateProfile)
	.catch(function(err) {
		console.log(err);
	  	console.log('Something went wrong!')
	})
}

btn.onclick = function() {
	return nextUser();
}
function handleErrors(response) {
	if(!response.ok){
		throw Error(response.status);
	}
	return response;
}
function parseJson(response) {
    console.log(response);
    return response.json().then(function(data) {
			return data.results[0];
		});
  }
function updateProfile(data) {
		var firstNameDisp = data.name.first;
		var lastNameDisp = data.name.last;
		var userNameDisp = data.login.username;
		fullName.innerText = firstNameDisp + ' ' + lastNameDisp;
		userName.innerText = userNameDisp;
		email.innerText = data.email;
		city.innerText = data.location.city;
		avatar.src = data.picture.medium;
	}
