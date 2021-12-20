//loader
function load() {
  let load = document.querySelector('.loader');
  window.addEventListener('load', () => {
document.querySelector('.loader').style.display = 'none';
  });
}
load();

//nav 

function nav() {
  let box = document.querySelector('.box');
  let ul = document.querySelector('.main-ul');
  let nav = false;
  box.addEventListener('click', () => {
if(!nav) {
nav = true;
box.classList.add('open');
document.querySelector('.main-ul').style.opacity = 1;
}else {

  nav = false;
  box.classList.remove('open');
  document.querySelector('.main-ul').style.opacity = 0;
}
  });
}
nav();

//arrow function

function down() {
  let down = document.querySelector('.down');
  let up = document.querySelector('.up');
  let child = document.querySelector('.child-input');
  let infant = document.querySelector(".infant-input");
  down.addEventListener("click", () => {
document.querySelector(".down").style.display = "none";
document.querySelector(".up").style.display = "flex";
document.querySelector('.child-input').style.display = "flex";
document.querySelector('.infant-input').style.display = "flex";
  });
}
down();

function up() {
  let aDown = document.querySelector('.down');
  let aUp = document.querySelector('.up');
  let inputChild = document.querySelector('.child-input');
  let = inputInfant = document.querySelector('.infant-input');
  aUp.addEventListener("click", () => {
    document.querySelector(".down").style.display = "flex";
    document.querySelector(".up").style.display = "none";
    document.querySelector('.child-input').style.display = "none";
    document.querySelector('.infant-input').style.display = "none";
  });
}
up();

//verifcation 

function travel() {
  let form = document.querySelector('.travel');
  let name = document.querySelector('.name-input');
  let adult = document.querySelector('.adult-input');
  let error = document.querySelector('.error');
  form.addEventListener('submit', (e) => {
    let errorTravel = []
   
if(name.value === '' || name.value == null){
errorTravel.push('what is your name')
}

if(errorTravel.length > 0) {
  e.preventDefault()
  error.innerText = errorTravel.join(', ')
}

if(adult.value === '' || adult.value == null){
  errorTravel.push('you forgot how many will travel')
  }
  
  if(errorTravel.length > 0) {
    e.preventDefault()
    error.innerText = errorTravel.join(', ')
  }
  });
}
travel();

