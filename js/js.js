/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

//<!-- Med inspiration fra https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp-->
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "260px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//sæt billede ind
let res = document.getElementById('billede');
//res.innerHTML += '<img src=./images/lasagne.jpg alt="lasagne" style="width:100%;">';



const pers = [  "Alice, Restaurantchef/Altmuligkvinde",
"Kok/Køkkenchef, Ernesto",
"Souschef, Alejandro",
"Tjener, Sandra",
"Tjener, Emil",
"Tjener, Pippi",
"Opvasker, Casper",
"Opvasker, Jesper",
"Køkkenmedhjælper, Jonathan"];
let fLen = pers.length;



pers.sort();

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
text += "<li>" + pers[i] + "</li>";
}
text += "</ul>";

document.getElementById("personale").innerHTML = text;

const d = new Date();
document.getElementById("footer").innerHTML = d;



// Inspiration fra https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_address_create
function myFunction() {
  var x = document.createElement("ADDRESS");
  var t = document.createTextNode("Volden 43, 8000 Århus C, Danmark");
  x.appendChild(t);
  document.body.appendChild(x);
}



let citater = [
  '"Andre lever for at spise, jeg spiser for at leve" <br> Sokrates',
  '"Den letteste dag under en slankekur, er den tredje dag, for da har man nemlig opgivet den" <br> Kurt Grosskurth',
  '"Der findes ingen sandere kærlighed end kærlighed til mad." <br> George Bernard Shaw',
  '"Jeg kommer fra en familie, hvor sovs betragtes som en drikkevare" <br> Erma Bombeck',
  '"Spis dig halvmæt, drik dig halvfuld, og du lever et århundrede" <br> Russisk ordsprog',
  '"Vin i glasset og mad på tallerkenen, hvad er bedre end det?"<br> Alice'
];

// selvkørende funktion
(function dagensCitat() {
  rndNo = Math.floor(Math.random() * citater.length );
  citat.innerHTML = '<em>' +  citater[ rndNo ] + '</em>';
})();




//booking//form del 1
btn1.addEventListener('click',function(){
  f2.style.display = 'block';
  f1.style.display = 'none';
})

//form del 2
btn2.addEventListener('click',function(){
  f3.style.display = 'block';
  f2.style.display = 'none';
})

//form del 3

//form del 3
btn3.addEventListener('click',function(){
  f4.style.display = 'block';
  f3.style.display = 'none';
})



//fortsætte videre ... indtil brugeren taster send på lastfield.
/**
 * Youtube: control the player by JavaScript
 * Play video when the containing tag is visible
*/

// Load the IFrame Player API code asynchronously.

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '360',
    width: '640',
    videoId: '1o645n7OeeA',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

/* Player kontrolleres af funktioner */
function onPlayerReady(event) {
  console.log("player is ready");
  event.target.pauseVideo();
}

function playItSam(event) {
  console.log("player is ready");
  event.target.playVideo(); // event from player
}

function onPlayerStateChange() {
  console.log("player state change");

  if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(stopVideo, 6000);
    done = true;
  }
}

/* is element visible? if ok playVideo() */
var elementet = document.getElementById("synlig");

window.addEventListener("scroll", function() {

  if (elFllVsbl(elementet)) {
    console.log("play video");
    player.playVideo(); // with player you can manipulate the video
  } else {
    console.log("pause video")
    player.pauseVideo();
  }
}); // end eventlistener

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}

/**
WHERE TO GO FROM HERE
* Control the video when the user clicks on an icon.
* Control via eventlisteners, such as mouse over, mouse out etc.
**/


//FOOTER
// globale variabler

/*
let d = new Date(); // kan genbruges andre steder
let uge = ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'];
let maaneder = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];
*/
// footer som objekt

/*
const info = {
  author: 'Per Thykjær Jensen', // Spørgsmål 1
  dag: uge[ d.getDay() ],
  maaned: maaneder[ d.getMonth() ],
  dagImaaned: d.getDate(),
  aar: d.getFullYear(),
  time: d.getHours(),
  minut: d.getMinutes(),
  restaurant: 'Alice\'s Restaurant', // Spørgsmål 2
  adresse: 'Volden 234 <br>8000 Aarhus C', // Spørgsmål 2
  telefon: '4243 4445',
  // Metoder
  skrivTilFooter: function() {
    console.log('footeren.skrivTilFooter() = aktiv');
    footerInfo.innerHTML += `
      <div>
        &copy; Tutorial - imaginary restaurant<br>
        by ${this.author}
        ${this.dag}
        ${this.dagImaaned}.
        ${this.maaned}
        ${this.aar}.
      </div>
    `;
  },
  skrivAdresse: function() {
    footerInfo.innerHTML += `
      <div class="adresse">
        <h3>${this.restaurant}</h3>
        <p>
          ${this.adresse}<br>
          ${this.telefon}
        </p>
      </div>
    `
  }
}

info.skrivAdresse(); // Spørgsmål 2
info.skrivTilFooter(); // Spørgsmål 1
*/
