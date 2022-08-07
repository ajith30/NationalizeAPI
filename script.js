//Nav bar
const navDiv = document.createElement("div");
navDiv.setAttribute("class", "container-fluid");
navDiv.innerHTML = "<span>Welcome to Country Finder!<span>"
const nav = document.createElement("nav");
nav.setAttribute("class", "navbar navbar-dark bg-dark");
nav.append(navDiv);
document.body.append(nav);

const inputElement = document.createElement("input");
inputElement.setAttribute("type", "search");
inputElement.setAttribute("class", "form-control");
inputElement.setAttribute("id", "username");
inputElement.setAttribute("placeholder", "Enter your name");
inputElement.setAttribute("required","");


const buttonElement = document.createElement("button");
buttonElement.setAttribute("onclick", "checkNationality()");
buttonElement.setAttribute("class", "btn btn-primary");
buttonElement.innerText = "Search";

const divOneElement = document.createElement("div");

divOneElement.setAttribute("class", "search");
divOneElement.append(inputElement,buttonElement);

const divTwoElement = document.createElement("div");
divTwoElement.setAttribute("class", "col-md-8");

const divThreeElement = document.createElement("div");
divThreeElement.setAttribute("class", "row height d-flex justify-content-center align-items-center");

const divFourElement = document.createElement("div");
divFourElement.setAttribute("class", "container");

divTwoElement.append(divOneElement);
divThreeElement.append(divTwoElement);
divFourElement.append(divThreeElement);
document.body.append(divFourElement);


const topTwo =  document.createElement("h3");
topTwo.innerText = "Top 2  countries with Probability Below:";
const headingElement1 = document.createElement("h3");
const probHeading1 = document.createElement("h3");
const headingElement2 = document.createElement("h3");
const probHeading2 = document.createElement("h3");

divOneElement.append(topTwo,headingElement1,probHeading1, headingElement2, probHeading2);



//Getting  name from search bar and concatenating with nationalizeApi
const userName = document.getElementById("username");
const nationalizeApi = `https://api.nationalize.io?name=`;

const checkNationality = async () => {
    try {
    const response = await fetch(`${nationalizeApi}${userName.value.toLowerCase()}`);
    const responseJason = await response.json();
    const countryArr = responseJason.country;

    headingElement1.innerHTML = `Country: ${countryArr[0].country_id}`;
    probHeading1.innerHTML = `Probability: ${countryArr[0].probability}`;

    headingElement2.innerHTML = `Country: ${countryArr[1].country_id}`;
    probHeading2.innerHTML = `Probability: ${countryArr[1].probability}`;

    console.log(responseJason);
    console.log(countryArr[0].country_id);
    console.log(countryArr[0].probability);
    console.log(countryArr[1].country_id);
    console.log(countryArr[1].probability);

    } catch(error) {
        console.log("! Inavalid name. Please Search for the valid name. ");
        alert("! Inavalid name. Please Search for the valid name. ");
    }

}






