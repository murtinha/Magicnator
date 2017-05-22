function hideLabel(wrappers){
	for(i=0;i<wrappers.length;i++){
		if(!(!!~wrappers[i].className.indexOf('hide'))){
			wrappers[i].className += ' hide' 
		}
	}
	return wrappers
}


function showInput(option) {

	var selectedOption = document.querySelector('#cardrequest').value;
	var inputField = document.createElement('input')
	var divWrapper = document.createElement('div')
	divWrapper.setAttribute('class','divWrapper')
	inputField.setAttribute('id', 'userInput')
	inputField.setAttribute('type', 'text')
	switch(selectedOption) {

		case 'Colors':
			wrappers = document.querySelectorAll('.divWrapper')
			hideLabel(wrappers)
			label = document.createElement('label')
			label.setAttribute('id','colorsLabel')
			label.innerHTML = 'Colors'
			divWrapper.appendChild(label)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
			break
		
		case 'Users':
			wrappers = document.querySelectorAll('.divWrapper')
			hideLabel(wrappers)
			label = document.createElement('label')
			label.setAttribute('id','usersLabel')
			label.innerHTML = 'Users'
			divWrapper.appendChild(label)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
			break

		case 'Text':
			wrappers = document.querySelectorAll('.divWrapper')
			hideLabel(wrappers)
			label = document.createElement('label')
			label.setAttribute('id','textLabel')
			label.innerHTML = 'Text'
			divWrapper.appendChild(label)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
			break

		case 'Subtypes':
			wrappers = document.querySelectorAll('.divWrapper')
			hideLabel(wrappers)
			label = document.createElement('label')
			label.setAttribute('id','subtypesLabel')
			label.innerHTML = 'Subtypes'
			divWrapper.appendChild(label)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
			break

		case 'Types':
			wrappers = document.querySelectorAll('.divWrapper')
			hideLabel(wrappers)
			label = document.createElement('label')
			label.setAttribute('id','typesLabel')
			label.innerHTML = 'Types'
			divWrapper.appendChild(label)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
			break

		default:
			wrappers = document.querySelectorAll('.divWrapper')
			hideLabel(wrappers)
			label = document.querySelector('#nameLabel')
			divWrapper.appendChild(label)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
	}
}
