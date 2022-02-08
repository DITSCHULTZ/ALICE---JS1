
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
