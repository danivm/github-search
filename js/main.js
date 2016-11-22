document.querySelector("#user-form").addEventListener("submit", function(event){
	event.preventDefault()
	const username = event.target[0].value
	const oUser = document.querySelector("#user");
	const oRepos = document.querySelector("#repos")
	getUser(username)
		.then( showUser.bind(null,oUser) )
		.catch( showError.bind(null,oUser,oRepos) )
	getRepos(username)
		.then( showRepos.bind(null,oRepos) )
		.catch( console.log )
});

function showUser(oElem, response) {
	oElem.innerHTML = generateHtmlUser(response)	
}

function generateHtmlUser(response) {
	let userInfo = JSON.parse(response)
	let userHtml=''
	userHtml += '<div class="user-img"><img src="'+userInfo.avatar_url+'"></div>'
	userHtml += '<div class="user-info">'
	userHtml += '<p><i>@'+userInfo.login+'</i></p>'
	userHtml += '<h1>'+userInfo.name+'</h1>'
	userHtml += '<p>'+userInfo.bio+'</p>'
	userHtml += '</div>'
	return userHtml;
}

function showRepos( oElem, response) {
	oElem.innerHTML= generateHtmlReposUser(response)
}
function generateHtmlReposUser(response) {
	let reposList = JSON.parse(response)
	let reposHtml = '<h3 class="title">Repositories</h3>'
	reposHtml += '<div class="repo-list">'
	reposList.forEach((repo)=>{
		reposHtml += '<div class="repo-container">'
		reposHtml += '<div class="repo-name"><h3>' + repo.name + '</h3></div>'
		reposHtml += '<div class="repo-info">'
		reposHtml += '<p><i <i class="fa fa-star"></i>:'+  repo.watchers
		reposHtml += ' <i class="fa fa-code-fork"></i>:' + repo.forks +'</p></div>'
		reposHtml += '</div>'
	})
	reposHtml += '</div>'
	return reposHtml;
}

function showError( oUser, oRepos, error) {
	oUser.innerHTML= generateHtmlError(error)
	oRepos.innerHTML = ''
}
function generateHtmlError(error) {
	let reposHtml = '<p class="error">'+error+'</p>'
	return reposHtml;
}


