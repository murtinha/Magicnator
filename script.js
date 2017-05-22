function hideLabel(wrappers){
	if(!(!!~wrappers.className.indexOf('hide'))){
		wrappers.className += ' hide' 
	}
	return wrappers
}

function showLabel(wrappers){
	if(!!~wrappers.className.indexOf('hide')){
		wrappers.className.replace('hide','').trim()
	}
	return wrappers
}

function showInput(option) {

	var selectedOption = document.querySelector('#cardrequest').value;
	switch(selectedOption) {

		case 'Colors':
			wrappers = document.querySelector('.divWrapper')
			labelWrapper = document.querySelector('#colorsWrapper')
			hideLabel(wrappers)
			labelWrapper.className = showLabel(labelWrapper)
			break
		
		case 'Users':
			wrappers = document.querySelector('.divWrapper')
			hideLabel(wrappers)
			label = document.createElement('label')
			label.setAttribute('id','usersLabel')
			label.innerHTML = 'Users'
			divWrapper.appendChild(label)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
			break

		case 'Text':
			wrappers = document.querySelector('.divWrapper')
			hideLabel(wrappers)
			label = document.createElement('label')
			label.setAttribute('id','textLabel')
			label.innerHTML = 'Text'
			divWrapper.appendChild(label)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
			break

		case 'Subtypes':
			wrappers = document.querySelector('.divWrapper')
			hideLabel(wrappers)
			label = document.createElement('label')
			label.setAttribute('id','subtypesLabel')
			label.innerHTML = 'Subtypes'
			divWrapper.appendChild(label)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
			break

		case 'Types':
			wrappers = document.querySelector('.divWrapper')
			hideLabel(wrappers)
			label = document.createElement('label')
			label.setAttribute('id','typesLabel')
			label.innerHTML = 'Types'
			divWrapper.appendChild(label)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
			break

		case 'Manacost':
			wrappers = document.querySelector('.divWrapper')
			hideLabel(wrappers)
			label = document.createElement('label')
			label.setAttribute('id','manacostLabel')
			label.innerHTML = 'Manacost'
			divWrapper.appendChild(label)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
			break

		case 'Colors/Text':
			wrappers = document.querySelector('.divWrapper')
			hideLabel(wrappers)
			label_color = document.createElement('label')
			label_types = document.createElement('label')
			label_color.setAttribute('id','colorstypesLabel')
			label_types.setAttribute('id', 'typescolorsLabel')
			label_color.innerHTML = 'Colors'
			label_types.innerHTML = 'Types'
			divWrapper.appendChild(label_color)
			divWrapper.appendChild(inputField)
			divWrapper.appendChild(label_types)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
			break

		default:
			wrappers = document.querySelector('.divWrapper')
			hideLabel(wrappers)
			label = document.querySelector('#nameLabel')
			divWrapper.appendChild(label)
			divWrapper.appendChild(inputField)
			document.body.appendChild(divWrapper)
	}
}
