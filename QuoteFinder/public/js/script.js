let authorLinks = document.querySelectorAll("a"); // returns an array
for(let i=0; i <authorLinks.length; i++){
	authorLinks[i].addEventListener("click", displayAuthorInfo)
}

async function displayAuthorInfo() {
	// alert(this.id);
	var myModal = new bootstrap.Modal(document.getElementById('authorModel'));
	myModal.show()
	// alert(this.getAttribute("id"));
	let authorId = this.id;
	let url = `/api/author/${authorId}`;
	let response = await fetch(url);
	let data = await response.json();

	document.querySelector("#authorTitle").innerHTML = "<h2>"+data[0].firstName + " " + data[0].lastName + "</h2>";
	console.log(data[0].dob);
	document.querySelector("#authorInfo").innerHTML = "<b>Born:</b> "+data[0].dob + "<br><b>Died:</b> " + data[0].dod + "<br><b>Sex:</b> " +data[0].sex+"<br><b>Profession:</b> "+ data[0].profession + "<br><b>Country:</b> "+data[0].country+"<br>";
	document.querySelector("#authorInfo").innerHTML += `<img src="${data[0].portrait}" width="200"><br>`;
	document.querySelector("#authorInfo").innerHTML += data[0].biography;
}