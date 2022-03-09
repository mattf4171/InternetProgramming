// Fns to call 
document.querySelector("#zip").addEventListener("change", getCity);
document.querySelector("#passWord").addEventListener("click", recommendPassWord);
document.querySelector("#username").addEventListener("change", isAvailable);
// get the appropriate counties for state
findState(); 
document.querySelector("#states").addEventListener("change", countyName);
document.querySelector('#submitButton').addEventListener("click", submitFunc);


async function getCity() {
	console.log("getting city info...");
	let key = document.querySelector("#zip").value;
	let url = `https://cst336.herokuapp.com/projects/api/cityInfoAPI.php?zip=${key}`;
	let response = await fetch(url);
	let data = await response.json();
  if (data == false){
    document.querySelector("#zipError").innerHTML = "Zip code not found";
    console.log(data);
  	document.querySelector("#city").innerHTML = data["city"];
  	document.querySelector("#latitude").innerHTML = data["latitude"];
  	document.querySelector("#longitude").innerHTML = data["longitude"];
    document.querySelector("#state").innerHTML = data["state"];
  } else {
    document.querySelector("#zipError").innerHTML = "";
  	console.log(data);
  	document.querySelector("#city").innerHTML = data["city"];
  	document.querySelector("#latitude").innerHTML = data["latitude"];
  	document.querySelector("#longitude").innerHTML = data["longitude"];
  }
}

async function recommendPassWord() {
	console.log("recommended PW");
	let url = "https://webspace.csumb.edu/~lara4594/ajax/suggestedPwd.php?length=8";
	let response = await fetch(url);
	let data = await response.json();
	console.log(data);
	console.log("?");
	document.querySelector("#suggestedPassWord").innerHTML = `Suggested Password: ${data.password}`;
}

async function isAvailable() {
  	let name = document.querySelector("#username").value;
	let url = `https://cst336.herokuapp.com/projects/api/usernamesAPI.php?username=${name}`;
	let response = await fetch(url);
	let data = await response.json();
	if(data.available && name.length!=0){
    	document.querySelector("#notavailable").innerHTML = "";
		document.querySelector("#available").innerHTML = "Username Available";
	}else if(name.length ==0){
    	document.querySelector("#notavailable").innerHTML = "";
   	 	document.querySelector("#available").innerHTML = "";
	}else{
   	 	document.querySelector("#available").innerHTML = "";
		document.querySelector("#notavailable").innerHTML = "Username NOT Available";
	}
}
async function findState(){

	let url = 'https://cst336.herokuapp.com/projects/api/state_abbrAPI.php' // URL of all states
	  // format.. [{"id":"1","state":"Alabama","usps":"AL","ap":"Ala."},{"id":"2","state":"Alaska","usps":"AK","ap":"Alaska"}
	let response = await fetch(url);
	let data = await response.json();
	var options ="";
  	// sanity check, make sure we get appropriate data
	console.log(data[0].usps);
	for(let i =0; i < data.length; i++){
		let state = data[i].usps; // get the abbreviation of the state
		options += `<option>${state}</option>`;
	}
	document.querySelector("#states").innerHTML = options; 
	countyName();
}

async function countyName() {

	var select = document.getElementById('states');
	var value = select.options[select.selectedIndex].value;
	console.log(value); // en
	
    // let county_by_state = document.querySelector("#states").value;
    let url = `https://cst336.herokuapp.com/projects/api/countyListAPI.php?state=${value}`;
    // get list of all states from api
    let response = await fetch(url);
    let data = await response.json();
	// sanity check, make sure we get appropriate data
    console.log(data);
	// loop through all counties and show them in dropdown
    var options ="";
	for(let i =0; i < data.length; i++){
		let county = data[i].county; // get the abbreviation of the state
		options += `<option>${county}</option>`;
	}
	document.querySelector("#counties").innerHTML = options;
}
function submitFunc(){
	console.log("submit...");
	let usrName = document.querySelector("#username").value;
	if(usrName.length == 0){
		document.querySelector("#available").innerHTML = "";
		document.querySelector("#notavailable").innerHTML = "";
		document.querySelector("#usrnameError").innerHTML = "Please enter valid Username";

	}else{
		document.querySelector("#usrnameError").innerHTML = "";
	}

    let passwordEntered = document.querySelector("#passWord").value;
    let secondPassword = document.querySelector("#retypePassword").value;
	if (passwordEntered.length < 6){
	  // clear pw suggestion
	  	document.querySelector("#suggestedPassWord").innerHTML = "";
    	document.querySelector("#passwordError").innerHTML = "Password has to contain at least 6 characters!";
	} else {
	    document.querySelector("#passwordError").innerHTML = "";
	}
	if ( !(secondPassword === passwordEntered) ){
		// console.log("not equal pws");
	    document.querySelector("#password2").innerHTML = "Retype Password";
	} else {
		// console.log("equal pw");
    	document.querySelector("#password2").innerHTML = "";
  }
}