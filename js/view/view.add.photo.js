
// code to create add photo element and make a feature to take a picture with the laptop camera

var create_element = function (element_name, element_attributes) {
    var element = document.createElement(element_name);
    
    if(element_attributes.hasOwnProperty('id')){
        element.setAttribute('id',element_attributes.id);
    }
    
    if(element_attributes.hasOwnProperty('class')){
        for(i in element_attributes.class){
            if(element_attributes.class[i] !== '' || null || undefined){
                element.classList.add(element_attributes.class[i]);
            }
        }
    }
    element.classList.add('offscreen');
    //document.body.appendChild(element);
    get_element('left_input_section_container_div').appendChild(element);
    
}

var get_keys = function(object){
    return Object.keys(object);
}

var get_values = function(object){
    var values = [];
    for(i in object){
        values.push(object[i]);
    }
    return values;
}


var set_value = function(element_id,element_attributes){
    
    var element = document.getElementById(element_id);
    var element_attributes_keys = Object.keys(element_attributes);
    
    var keys = get_keys(element_attributes);
    var values = get_values(element_attributes);
    
    for(var i=0;i<keys.length;i++){
        var current_key = keys[i];
        var current_value = values[i];
    
        console.log(current_key);
        console.log(current_value);
        
        if(current_key === 'textContent'){
            element.textContent = current_value;
        }else{
            element.setAttribute(current_key,current_value);
        }
    }
};  // end of code to use laptop camera 

create_containers('label','add_photo_label',get_element('left_input_section_container_div'));
get_element('add_photo_label').setAttribute('for','camera_input');
get_element('add_photo_label').textContent = 'add photo';

create_element('input',{id:'camera_input'});    
    
set_value('camera_input',{
                              
    placeholder:'insert photo',
    type:'file',
    accept:'audio/*;capture=microphone'
});