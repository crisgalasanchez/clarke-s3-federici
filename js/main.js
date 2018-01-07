'use strict';

// efecto transicion burger menu-x
document.querySelector( "#burger" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });


// desplegable burger
var burger = document.querySelectorAll('.burger');
function menu(event){
	var burgerId = event.currentTarget.getAttribute('burger');
	var desplegable = document.getElementById(burgerId);
	if (desplegable.style.display == 'block'){
		desplegable.style.display = 'none';
	} else {
		desplegable.style.display = 'block';
	}
}

burger.addEventListener('click', menu);

// burger.addEventListener('click', menu);
