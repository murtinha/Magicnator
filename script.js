function hideLabel(wrappers){
	for (i=0;i<wrappers.length;i++){
		if(!(!!~wrappers[i].className.indexOf('hide'))){
			wrappers[i].className += ' hide' 
		}
	}
	return wrappers
}

function showLabel(wrapper){
	var newClassName = ''
	if(!!~wrapper.className.indexOf('hide')){
		newClassName = wrapper.className.replace('hide','').trim()
	}
	return newClassName
}

function showInput(option) {

	var selectedOption = document.querySelector('#cardrequest').value;
	switch(selectedOption) {

		case 'Colors':
			wrappers = document.querySelectorAll('.divWrapper')
			labelWrapper = document.querySelector('#colorsWrapper')
			console.log(labelWrapper)
			hideLabel(wrappers)
			labelWrapper.className = showLabel(labelWrapper)
			break
		
		case 'Users':
			wrappers = document.querySelectorAll('.divWrapper')
			labelWrapper = document.querySelector('#cardusersWrapper')
			hideLabel(wrappers)
			labelWrapper.className = showLabel(labelWrapper)
			break

		case 'Text':
			wrappers = document.querySelectorAll('.divWrapper')
			labelWrapper = document.querySelector('#textWrapper')
			hideLabel(wrappers)
			labelWrapper.className = showLabel(labelWrapper)
			break

		case 'Subtypes':
			wrappers = document.querySelectorAll('.divWrapper')
			labelWrapper = document.querySelector('#subtypesWrapper')
			hideLabel(wrappers)
			labelWrapper.className = showLabel(labelWrapper)

			break

		case 'Types':
			wrappers = document.querySelectorAll('.divWrapper')
			labelWrapper = document.querySelector('#typesWrapper')
			hideLabel(wrappers)
			labelWrapper.className = showLabel(labelWrapper)
			break

		case 'Manacost':
			wrappers = document.querySelectorAll('.divWrapper')
			labelWrapper = document.querySelector('#manacostWrapper')
			hideLabel(wrappers)
			labelWrapper.className = showLabel(labelWrapper)
			break

		case 'Colors/Text':
			wrappers = document.querySelectorAll('.divWrapper')
			labelWrapper = document.querySelector('#colorstextWrapper')
			hideLabel(wrappers)
			labelWrapper.className = showLabel(labelWrapper)
			break

		case 'Manacost/Colors':
			wrappers = document.querySelectorAll('.divWrapper')
			labelWrapper = document.querySelector('#manacostcolorsWrapper')
			hideLabel(wrappers)
			labelWrapper.className = showLabel(labelWrapper)
			break

		default:
			wrappers = document.querySelectorAll('.divWrapper')
			labelWrapper = document.querySelector('#nameWrapper')
			hideLabel(wrappers)
			labelWrapper.className = showLabel(labelWrapper)
	}
}
