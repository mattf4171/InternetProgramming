document.querySelector("#searchButton").addEventListener("click", findSearch);

//functions
displayBackground();


async function findSearch() {
	console.log("findSearch");
	document.querySelector("#imagesContainer").innerHTML = "";
	document.querySelector("#error").innerHTML = "";
	let keyWord = document.querySelector("#searchBox").value;
	let orientation = document.querySelector("#orientationDropDown").value;
	if (keyWord.length < 3){
      console.log("error");
      document.querySelector("#error").innerHTML = "Please enter a word with at least 3 characters!";
    }else {
		console.log(keyWord);
		console.log(orientation);
		let url = `https://pixabay.com/api/?key=25943343-859d6eb56d37242a017f0c9b6&q=${keyWord}&orientation=${orientation}`;
		let response = await fetch(url);
		let data = await response.json();
		if(data.hits ==0){ // check to see if keyword is found in api
			document.querySelector("#error").innerHTML = "Keyword not found in Pixabay API, try another keyword";
			return;
		}
		// console.log(data);
		// select 5 different random photos
		let arr = [];
		while(arr.length < 5){ // fill array with 5 random numbers based off hit.length
			var r = Math.floor(Math.random() * data.hits.length); 
			if(arr.indexOf(r) === -1){
				document.querySelector("#imagesContainer").innerHTML += `<div><h6 align="center">Likes: ${data.hits[r].likes}</h6> <img src=${data.hits[r].webformatURL} width = "150" height ="200" ></div>`;
				arr.push(r);
			}
		}
		console.log(arr); // sanity check that all 5 values are unique
// 		TODO: The images are displayed according to the orientation selected (vertical, horizontal)	15 pts
	}
}

async function displayBackground(){
  let imageUrl = "https://pixabay.com/api/?key=25943343-859d6eb56d37242a017f0c9b6&q=zoo"; // hardcoded key
	let response = await fetch(imageUrl);
	let data = await response.json();
	let val = Math.floor(Math.random() * data.hits.length); // random image
	// console.log(val);
 //    console.log(data.hits[val].webformatURL);
	document.body.style.background = `url(${data.hits[val].webformatURL})`;
	document.body.style.backgroundRepeat = 'no-repeat'; // only display one image, default will repeat image
    document.body.style.backgroundSize = "cover";
}
