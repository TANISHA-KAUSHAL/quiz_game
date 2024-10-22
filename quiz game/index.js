const form = document.querySelector('.form');
const login_button = document.querySelector('.login_button');
const icon_close = document.querySelector('.icon_close');
const login_link = document.querySelector('.login_link');
const register_link = document.querySelector('.register_link');
	login_button.addEventListener('click',()=> {
	    form.classList.add('active_popup');
	});
	icon_close.addEventListener('click',()=> {
	    form.classList.remove('active_popup');
	});
	login_link.addEventListener('click',()=> {
	    form.classList.add('active');
	});
	
	register_link.addEventListener('click',()=> {
	    form.classList.remove('active');
	});
	