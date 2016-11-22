const getUser = ( username ) => {
	return new Promise( (resolve, reject) => {
			var xhr = new XMLHttpRequest(),
			method = "GET",
			url = "https://api.github.com/users/"+username;
			xhr.open(method, url, true);
			xhr.onreadystatechange = () => {
				if ( xhr.status === 200 ) {
					if ( xhr.readyState === XMLHttpRequest.DONE ) {
						resolve(xhr.responseText)
					} 					
				} else {
					reject('Does not exist.')
				}
			};
			xhr.send();
	})
}

const getRepos = ( username ) => {
	return new Promise( (resolve, reject) => {
			var xhr = new XMLHttpRequest(),
			method = "GET",
			url = "https://api.github.com/users/"+username+"/repos";
			xhr.open(method, url, true);
			xhr.onreadystatechange = () => {
				if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
					resolve(xhr.responseText)
				} 
			};
			xhr.send();
	})
}
