const mainNav = document.querySelector(".main-nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const btn = document.querySelector(".cta-btn");
const navLink = document.querySelector(".nav-link");


hamburgerMenu.addEventListener("click", function() {
  mainNav.classList.toggle("open");
});
navLink.addEventListener("click", function() {
  mainNav.classList.toggle("open");
});

function hideFact(){
  const questionMark = document.getElementById("questionMark");
  const funFact = document.getElementById("funFact");
  questionMark.addEventListener("click", function() {

    if (funFact.style.visibility === "visible") {
      funFact.style.visibility = "hidden";
    } else {
      funFact.style.visibility = "visible";
    }

  });

};

gsap.fromTo(".hero-clipped", {
  scaleX: 0
}, {
  duration: 2,
  delay: 1,
  scaleX: 1,
  opacity: 1
});
gsap.fromTo(".logo", {
  x: -200,
  opacity: 0
}, {
  duration: 1,
  delay: .5,
  x: 0,
  opacity: 1
});
gsap.fromTo(".hamburger-menu", {
  x: 200,
  opacity: 0
}, {
  duration: 1,
  delay: .8,
  x: 0,
  opacity: 1
});
gsap.fromTo(".hero-textbox", {
  yPercent: 40,
  opacity: 0
}, {
  duration: 1,
  delay: 1.3,
  yPercent: -50,
  opacity: 1

});

var listOfCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cape Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic (CAR)", "Chad", "Chile", "China", "Colombia", "Comoros", "The Democratic Republic of Congo", "The Republic of Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (formerly Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States of America (USA)", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City (Holy See)", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

function generateCountry() {

  var randomCountryIndex = Math.floor(Math.random() * 195);
  var randomCountries = listOfCountries[randomCountryIndex];
  var country = document.getElementById("countryGenerator");
  country.querySelector(".country").innerHTML = randomCountries;
  country.querySelector(".recipe").style.visibility = "visible";
  localStorage.setItem("storageName", randomCountries);
};

$(".letter").on('click', 'li', function() {
  var randomCountries = $(this).text();
  localStorage.setItem("storageName", randomCountries);
  console.log(randomCountries);

});

function switchText() {
  var randomCountries = localStorage.getItem("storageName");

  var countryInfo = {
    title: "",
    heroImg: "",
    name: "",
    flag: "",
    funFact: "",
    para: ""
  };

  switch (randomCountries) {
    case "Afghanistan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "url(https://c0.wallpaperflare.com/preview/997/691/601/afghanistan-kabul-mountains-airplane.jpg)";
      countryInfo.name = "Afghanistan";
      countryInfo.flag = "http://teachmideast.org/wp-content/uploads/2015/08/Afghanistan-Flag.png";
      countryInfo.funFact = "Did you know the people of Afghanistan are called Afghans and their currency is Afghanis. Most of the time, people get confused between the use of these two terms.";
      countryInfo.para = "Afghanistan is a landlocked country in Asia. Afghanistan is bordered by Pakistan to the east and south; Iran to the west; Turkmenistan, Uzbekistan, and Tajikistan to the north; and China to the northeast. Occupying 652,000 square kilometers, it is a mountainous country with plains in the north and southwest. Kabul is the capital and largest city. The population is 32 million, mostly composed of ethnic Pashtuns, Tajiks, Hazaras and Uzbeks.";

      break;
    case "Albania":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Albania";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg";
      countryInfo.funFact = "Did you know that more Albanians live outside of Albania than within.";
      countryInfo.para = "Albania is a country in Southeast Europe on the Adriatic and Ionian Sea within the Mediterranean Sea. It shares land borders with Montenegro to the northwest, Kosovo to the northeast, North Macedonia to the east, Greece to the south and maritime borders with Greece, Montenegro and Italy to the west. It has an area of 28,748 square km. Tirana is its capital and largest city. Albanian is its official language. Its official currency is Lek.";

      break;
    case "Algeria":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Algeria";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png";
      countryInfo.funFact = "Did you know the national animal of Algeria is the Fennec Fox (is the smallest of all the world’s foxes) and their national football team is named after the animal: “Les Fennecs”. ";
      countryInfo.para = "Algeria is the largest country in Africa followed by Democratic Republic of the Congo (2,345,411 sq km). It has a beautiful setting on the coast of the Mediterranean ocean with its pleasant year-round climate. It has a total area of 2,381,741 square km. Algiers is its capital and largest city. Arabic and Berber are its official languages. Its official currency is Dinar. Algeria is land bordered by the Morocco, Mauritania, Mali, Niger, Libya, Tunisia, and Western Sahara.";

      break;
    case "Andorra":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Andorra";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/800px-Flag_of_Andorra.svg.png";
      countryInfo.funFact = "Did you know that according to some estimates, Andorra is the world’s 14th oldest country";
      countryInfo.para = "Andorra is a sovereign landlocked microstate on the Iberian Peninsula, in the eastern Pyrenees, bordered by France to the north and Spain to the south. Believed to have been created by Charlemagne, Andorra was ruled by the count of Urgell until 988, when it was transferred to the Roman Catholic Diocese of Urgell. The present principality was formed by a charter in 1278. It is known as a principality as it is a diarchy headed by two princes: the Catholic bishop of Urgell in Catalonia, Spain, and the president of the French Republic. ";

      break;
    case "Angola":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Angola";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/900px-Flag_of_Angola.svg.png";
      countryInfo.funFact = "Did you know that Angola has vast mineral and petroleum reserves, and its economy is among the fastest-growing in the world.";
      countryInfo.para = "Angola is the seventh-largest country in Africa, bordered by Namibia to the south, the Democratic Republic of the Congo to the north, Zambia to the east, and the Atlantic Ocean to the west.The capital and largest city of Angola is Luanda.";

      break;
    case "Antigua and Barbuda":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Antigua and Barbuda";
      countryInfo.flag = "https://flagpedia.net/data/flags/ultra/ag.png";
      countryInfo.funFact = "Did you know that the island of Antigua was explored by Christopher Columbus in 1493 and named for the Church of Santa María La Antigua.";
      countryInfo.para = "Antigua and Barbuda is an island sovereign state in the West Indies in the Americas, lying between the Caribbean Sea and the Atlantic Ocean. It consists of two major islands, Antigua and Barbuda, and a number of smaller islands (including Great Bird, Green, Guiana, Long, Maiden and York Islands and further south, the island of Redonda).";

      break;
    case "Argentina":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Argentina";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Argentina is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Armenia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Armenia";
      countryInfo.flag = "https://img5.goodfon.com/wallpaper/nbig/6/43/armenia-flag-armenian-armenian-flag-flag-of-armenia-republic.jpg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Armenia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Australia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Australia";
      countryInfo.flag = "https://www.publicdomainpictures.net/pictures/230000/nahled/australia-flag.jpg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Australia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Austria":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Austria";
      countryInfo.flag = "https://www.prntr.com/images/austria-flag-1.jpg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Austria is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Azerbaijan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Azerbaijan";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/e/ee/Flag_of_Azerbaijan_1918_variant.PNG";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Azerbaijan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Bahamas":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Bahamas";
      countryInfo.flag = "https://ladylibertyflag.com/wp-content/uploads/2013/03/Bahamas.gif";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Bahamas is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Bahrain":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Bahrain";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Bahrain is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Bangladesh":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Bangladesh";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Bangladesh is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Barbados":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Barbados";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/2000px-Flag_of_Barbados.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Barbados is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Belarus":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Belarus";
      countryInfo.flag = "https://flagsinternational.com/wp-content/uploads/2018/02/belarus015.jpg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Belarus is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Belgium":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Belgium";
      countryInfo.flag = "https://elmersflag.com/wp-content/uploads/2013/08/belgium-flag.jpg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Belgium is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Belize":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Belize";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1200px-Flag_of_Belize.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Belize is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Benin":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Benin";
      countryInfo.flag = "https://flagpedia.net/data/flags/ultra/bj.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Benin is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Bhutan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Bhutan";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Bhutan_alternate.svg/1200px-Flag_of_Bhutan_alternate.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Bhutan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Bolivia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Bolivia";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Flag_of_Bolivia_%28military%29.svg/800px-Flag_of_Bolivia_%28military%29.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Bolivia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Bosnia and Herzegovina":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Bosnia and Herzegovina";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Bosnia and Herzegovina is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Botswana":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Botswana";
      countryInfo.flag = "https://www.worldatlas.com/webimage/flags/countrys/zzzflags/bwlarge.gif";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Botswana is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Brazil":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Brazil";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Brazil is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Brunei":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Brunei";
      countryInfo.flag = "https://images-na.ssl-images-amazon.com/images/I/61XNbuaGxjL._AC_SX466_.jpg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Brunei is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Bulgaria":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Bulgaria";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/800px-Flag_of_Bulgaria.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Bulgaria is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Burkina Faso":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Burkina Faso";
      countryInfo.flag = "https://flagpedia.net/data/flags/ultra/bf.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Burkina Faso is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Burundi":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Burundi";
      countryInfo.flag = "https://flagpedia.net/data/flags/ultra/bi.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Burundi is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Cape Verde":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Cape Verde";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Cape Verde is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Cambodia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Cambodia";
      countryInfo.flag = "https://symondsflags.com/wp-content/uploads/2014/09/cambodia-flag.jpg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Cambodia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Cameroon":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Cameroon";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/2000px-Flag_of_Cameroon.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Cameroon is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Canada":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Canada";
      countryInfo.flag = "https://dynamicmedia.zuza.com/zz/m/original_/9/4/94747413-5e9e-45f1-a73e-f5a42936126d/LIST_FlagfactsFeb15_Gallery.jpg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Canada is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Central African Republic (CAR)":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Central African Republic (CAR)";
      countryInfo.flag = "https://flagpedia.net/data/flags/w580/cf.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Central African Republic (CAR) is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Chad":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Chad";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/2000px-Flag_of_Chad.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Chad is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Chile":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Chile";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/cl.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Chile is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "China":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "China";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "China is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Colombia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Colombia";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Colombia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Comoros":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Comoros";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/1200px-Flag_of_the_Comoros.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Comoros is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "The Democratic Republic of Congo":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "The Democratic Republic of Congo";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/1280px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "The Democratic Republic of Congo is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "The Republic of Congo":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "The Republic of Congo";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/2000px-Flag_of_the_Republic_of_the_Congo.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "The Republic of Congo is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Costa Rica":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Costa Rica";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1280px-Flag_of_Costa_Rica.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Costa Rica is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Croatia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Croatia";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Croatia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Cuba":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Cuba";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1280px-Flag_of_Cuba.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Cuba is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Cyprus":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Cyprus";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Cyprus is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Czech Republic":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Czech Republic";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/900px-Flag_of_the_Czech_Republic.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Czech Republic is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Denmark":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Denmark";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Denmark_%283-2%29.svg/1200px-Flag_of_Denmark_%283-2%29.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Denmark is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Djibouti":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Djibouti";
      countryInfo.flag = "https://cdn.webshopapp.com/shops/94414/files/52379732/flag-of-djibouti.jpg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Djibouti is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Dominica":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Dominica";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Dominica is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Dominican Republic":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Dominican Republic";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Dominican Republic is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "East Timor":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "East Timor";
      countryInfo.flag = "https://fotw.info/images/t/tl!un_o.gif";
      countryInfo.funFact = "did you know";
      countryInfo.para = "East Timor is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Ecuador":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Ecuador";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1200px-Flag_of_Ecuador.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Ecuador is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Egypt":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Egypt";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Egypt is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "El Salvador":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "El Salvador";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/1005px-Flag_of_El_Salvador.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "El Salvador is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Equatorial Guinea":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Equatorial Guinea";
      countryInfo.flag = "https://cdn.countryflags.com/thumbs/equatorial-guinea/flag-800.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Equatorial Guinea is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Eritrea":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Eritrea";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Eritrea_Flag_plain.svg/1200px-Eritrea_Flag_plain.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Eritrea is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Estonia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Estonia";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Estonia_%283-2%29.svg/1200px-Flag_of_Estonia_%283-2%29.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Estonia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Eswatini (formerly Swaziland)":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Eswatini (formerly Swaziland)";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/1200px-Flag_of_Eswatini.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Eswatini (formerly Swaziland) is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Ethiopia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Ethiopia";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1280px-Flag_of_Ethiopia.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Ethiopia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Fiji":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Fiji";
      countryInfo.flag = "https://flagpedia.net/data/flags/ultra/fj.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Fiji is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Finland":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Finland";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Finland is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "France":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "France";
      countryInfo.flag = "https://cdn.webshopapp.com/shops/94414/files/52383156/flag-of-france.jpg";
      countryInfo.funFact = "did you know";
      countryInfo.para = "France is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Gabon":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Gabon";
      countryInfo.flag = "https://flagpedia.net/data/flags/ultra/ga.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Gabon is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Gambia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "The Gambia";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/gm.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "The Gambia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Georgia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Georgia";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/ge.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Georgia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Germany":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Germany";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/de.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Germany is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Ghana":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Ghana";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/gh.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Ghana is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Greece":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Greece";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/gr.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Greece is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Grenada":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Grenada";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/gd.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Grenada is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Guatemala":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Guatemala";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/gt.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Guatemala is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Guinea":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Guinea";
      countryInfo.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/2000px-Flag_of_Guinea.svg.png";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Guinea is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Guinea-Bissau":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Guinea-Bissau";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/gw.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Guinea-Bissau is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Guyana":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Guyana";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/gy.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Guyana is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Haiti":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Haiti";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/ht.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Haiti is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Honduras":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Honduras";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/hn.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Honduras is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;

    case "Hungary":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Hungary";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/hu.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Hungary is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Iceland":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Iceland";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/is.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Iceland is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "India":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "India";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/in.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "India is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Indonesia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Indonesia";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/id.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Indonesia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Iran":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Iran";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/ir.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Iran is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Iraq":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Iraq";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/iq.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Iraq is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Ireland":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Ireland";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/ie.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Ireland is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Israel":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Israel";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/il.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Israel is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Italy":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Italy";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/it.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Italy is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Ivory Coast":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Ivory Coast";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/ci.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Ivory Coast is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Jamaica":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Jamaica";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/jm.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Jamaica is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Japan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Japan";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/jp.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Japan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Jordan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Jordan";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/jo.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Jordan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Kazakhstan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Kazakhstan";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/kz.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Kazakhstan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Kenya":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Kenya";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/ke.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Kenya is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Kiribati":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Kiribati";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/ki.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Kiribati is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "The Rebublic of Kosovo":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "The Rebublic of Kosovo";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/xk.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "The Rebublic of Kosovo is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Kuwait":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Kuwait";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/kw.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Kuwait is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Kyrgyzstan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Kyrgyzstan";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/kg.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Kyrgyzstan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Laos":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Laos";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/la.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Laos is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Latvia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Latvia";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/lv.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Latvia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Lebanon":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Lebanon";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/lb.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Lebanon is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Lesotho":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Lesotho";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/ls.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Lesotho is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Liberia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Liberia";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/lr.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Liberia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Libya":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Libya";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/ly.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Libya is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Liechtenstein":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Liechtenstein";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/li.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Liechtenstein is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Lithuania":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Lithuania";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/lt.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Lithuania is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Luxembourg":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Luxembourg";
      countryInfo.flag = "https://flagpedia.net/data/flags/w1160/lu.webp";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Luxembourg is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Macedonia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Macedonia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Macedonia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Madagascar":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Madagascar";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Madagascar is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Malawi":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Malawi";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Malawi is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Malaysia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Malaysia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Malaysia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Maldives":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Maldives";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Maldives is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Mali":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Mali";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Mali is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Malta":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Malta";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Malta is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Marshall Islands":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Marshall Islands";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Marshall Islands is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Mauritania":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Mauritania";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Mauritania is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Mauritius":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Mauritius";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Mauritius is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Mexico":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Mexico";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Mexico is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Micronesia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Micronesia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Micronesia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Moldova":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Moldova";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Moldova is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Monaco":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Monaco";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Monaco is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Mongolia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Mongolia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Mongolia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Montenegro":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Montenegro";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Montenegro is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Morocco":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Morocco";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Morocco is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Mozambique":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Mozambique";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Mozambique is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Myanmar (formerly Burma)":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Myanmar (formerly Burma)";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Myanmar (formerly Burma) is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Namibia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Namibia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Namibia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Nauru":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Nauru";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Nauru is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Nepal":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Nepal";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Nepal is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Netherlands":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Netherlands";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Netherlands is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "New Zealand":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "New Zealand";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "New Zealand is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Nicaragua":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Nicaragua";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Nicaragua is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Niger":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Niger";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Niger is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Nigeria":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Nigeria";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Nigeria is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "North Korea":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "North Korea";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "North Korea is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Norway":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Norway";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Norway is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Oman":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Oman";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Oman is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Pakistan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Pakistan";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Pakistan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Palau":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Palau";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Palau is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Palestine":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Palestine";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Palestine is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Panama":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Panama";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Panama is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Papua New Guinea":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Papua New Guinea";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Papua New Guinea is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Paraguay":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Paraguay";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Paraguay is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Peru":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Peru";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Peru is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Philippines":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Philippines";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Philippines is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Poland":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Poland";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Poland is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Portugal":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Portugal";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Portugal is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Qatar":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Qatar";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Qatar is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Romania":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Romania";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Romania is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Saint Kitts and Nevis":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Saint Kitts and Nevis";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Saint Kitts and Nevis is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Saint Lucia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Saint Lucia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Saint Lucia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Saint Vincent and the Grenadines":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Saint Vincent and the Grenadines";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Saint Vincent and the Grenadines is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Samoa":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Samoa";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Samoa is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "San Marino":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "San Marino";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "San Marino is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Sao Tome and Principe":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Sao Tome and Principe";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Sao Tome and Principe is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Saudi Arabia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Saudi Arabia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Saudi Arabia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Senegal":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Senegal";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Senegal is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Serbia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Serbia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Serbia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Seychelles":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Seychelles";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Seychelles is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Sierra Leone":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Sierra Leone";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Sierra Leone is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Singapore":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Singapore";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Singapore is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Slovakia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Slovakia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Slovakia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Slovenia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Slovenia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Slovenia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Solomon Islands":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Solomon Islands";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Solomon Islands is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Somalia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Somalia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Somalia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "South Africa":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "South Africa";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "South Africa is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "South Korea":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "South Korea";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "South Korea is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "South Sudan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "South Sudan";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "South Sudan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Spain":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Spain";
      countryInfo.flag = "";
      countryInfo.funFact = "Did you know? With 3,000 hours of sunshine a year, there are also few better places to top up your tan. And any budding naturists out there will be pleased to know nudity is legal in Spain.";
      countryInfo.para = "Spain is the second-largest country in the European Union after France. It measures up at around 506,000 square kilometers if you include the Canary Islands and the Spanish territories along the North African coastline. ";

      break;
    case "Sri Lanka":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Sri Lanka";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Sri Lanka is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Sudan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Sudan";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Sudan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Suriname":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Suriname";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Suriname is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Sweden":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Sweden";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Sweden is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Switzerland":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Switzerland";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Switzerland is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Syria":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Syria";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Syria is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Taiwan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Taiwan (Republic of China)";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Taiwan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Tajikistan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Tajikistan";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Tajikistan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Tanzania":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Tanzania";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Tanzania is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Thailand":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Thailand";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Thailand is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Togo":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Togo";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Togo is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Tonga":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Tonga";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Tonga is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Trinidad and Tobago":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Trinidad and Tobago";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Trinidad and Tobago is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Tunisia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Tunisia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Tunisia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Turkey":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Turkey";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Turkey is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Turkmenistan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Turkmenistan";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Turkmenistan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Uganda":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Uganda";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Uganda is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Ukraine":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Ukraine";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Ukraine is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "United Arab Emirates":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "United Arab Emirates";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "United Arab Emirates is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "United Kingdom":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "United Kingdom";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "United Kingdom is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "United States of America":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "United States of America";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "United States of America is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Uruguay":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Uruguay";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Uruguay is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Uzbekistan":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Uzbekistan";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Uzbekistan is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Vanuatu":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Vanuatu";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Vanuatu is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Vatican City (Holy See)":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Vatican City (Holy See)";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Vatican City (Holy See) is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Venezuela":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Venezuela";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Venezuela is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Vietnam":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Vietnam";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Vietnam is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Yemen":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Yemen";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Yemen is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Zambia":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Zambia";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Zambia is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    case "Zimbabwe":
      countryInfo.title = randomCountries + " | Dyn-at-Mine";
      countryInfo.heroImg = "";
      countryInfo.name = "Zimbabwe";
      countryInfo.flag = "";
      countryInfo.funFact = "did you know";
      countryInfo.para = "Zimbabwe is the alkj labjlaksjdfl jalsfdj alkjdf";

      break;
    default:
      break;
  };
  newCountry = countryInfo;
  document.title = newCountry.title;
  document.getElementById("countryHero").style.background = newCountry.heroImg;
  document.getElementById("countryHero").style.backgroundSize = "cover";
  document.getElementById("countryHeroName").innerHTML = newCountry.name;
  document.getElementById("countryFlag").src = newCountry.flag;
  document.getElementById("countryName").innerHTML = newCountry.name;
  document.getElementById("countryPara").innerHTML = newCountry.para;
  document.getElementById("funFact").innerHTML = newCountry.funFact;


};
