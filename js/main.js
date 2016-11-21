document.querySelector("#user-form").addEventListener("submit", function(event){
	event.preventDefault()
	const username = event.target[0].value
	getUser(username).then(showUser);
	getRepos(username).then(showRepos);
});

function showUser(response) {
	let userInfo = JSON.parse(response)
	let userHtml=''
	userHtml += '<div class="user-img"><img src="'+userInfo.avatar_url+'"></div>'
	userHtml += '<div class="user-info">'
	userHtml += '<p><i>@'+userInfo.login+'</i></p>'
	userHtml += '<h1>'+userInfo.name+'</h1>'
	userHtml += '<p>'+userInfo.bio+'</p>'
	userHtml += '</div>'
	document.querySelector("#user").innerHTML=userHtml	
}

function showRepos(response) {
	let reposList = JSON.parse(response)
	let reposHtml = '<h3 class="title">Repositories</h3>'
	reposList.forEach((repo)=>{
		reposHtml += '<div class="repo-container">'
		reposHtml += '<div class="repo-name"><h3>' + repo.name + '</h3></div>'
		reposHtml += '<div class="repo-info"><p>f: ' + repo.forks
		reposHtml += ' w:'+  repo.watchers +'</p></div>'
		reposHtml += '</div>'
	})
	document.querySelector("#repos").innerHTML=reposHtml	
}