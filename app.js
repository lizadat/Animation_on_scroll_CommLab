window.addEventListener('scroll', ()=> {
	let content = document.querySelector('.row');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight/1.7;
	if(contentPosition < screenPosition){
		content.classList.add('active');
	} else{
		content.classList.remove('active');
	}
})

window.addEventListener('scroll', ()=> {
	let content = document.querySelector('.row2');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight/1.4;
	if(contentPosition < screenPosition){
		content.classList.add('active');
	} else{
		content.classList.remove('active');
	}
})

window.addEventListener('scroll', ()=> {
	let content = document.querySelector('.row3');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight/1.3;
	if(contentPosition < screenPosition){
		content.classList.add('active');
	} else{
		content.classList.remove('active');
	}
})
