/*
var iconNav = document.querySelector(".iconNav");
iconNav.addEventListener("click",function(){
	console.log("click");
	mostrarOpc();
});


function mostrarOpc(){
	var li = document.querySelector("nav ul");
	console.log(li);
	li.style.display = "block"
}
console.log(iconNav);*/
var abrir = document.querySelector(".fa-bars");
var cerrar = document.querySelector('.fa-times-circle');
abrir.addEventListener("click",function(){
	var ul = document.querySelectorAll("#menu ul li");
	//ul.style.display = "block";
	for(var i=0; i<ul.length;i++){
		ul[i].style.display="block"
		//ul[i].classList.add('visible');
	}
	abrir.style.display="none";
	cerrar.style.display="block";
});

cerrar.addEventListener("click",function(){
	var li = document.querySelectorAll("#menu ul li");
	//ul.style.display = "block";
	for(var i=0; i<li.length;i++){
		li[i].style.display="none"
		//ul[i].classList.add('visible');
	}
	cerrar.style.display="none";
	abrir.style.display="block";
});