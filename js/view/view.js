//********* this greyed out function was first used to test mvc documentation, which worked
// var name_view = function(){
//     var name_container = document.querySelectorAll('[data-name]')[0];
//     return name_container;
// };

var create_containers = function(container_element,container_id,container_parent){
    var container = document.createElement(container_element);
    container.setAttribute('id',container_id);
    container_parent.appendChild(container);
};

var create_multi_elements = function(number_of_top_row_element,element_type,element_id,element_parent){
    for(var i=0; i<number_of_top_row_element; i++){
        create_containers(element_type,element_id+i,element_parent);
    };
};

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

//***adding text content to containers, visible next to plus symbol
var add_text_content = function (){
    for(var i=0; i<add_info_array.length; i++){
        get_element('add_container_'+i).textContent = add_info_array[i];
    };
};

// Creating All Contacts disply screen

    create_containers('div','contact_container',document.body);
    create_containers('div','top_row_container',get_element('contact_container'));
    
    
    create_multi_elements(3,'span','top_row_element_',get_element('top_row_container'));
    create_containers('div','search_container',get_element('contact_container'));
    create_containers('div','names_container',get_element('contact_container'));
    create_containers('div','right_column_letters_container',get_element('contact_container'));
    
    create_containers('span','search_icon',get_element('search_container'));
    get_element('search_icon').setAttribute('class','fa fa-search');
    create_containers('input','search',get_element('search_container'));
    
    get_element('search').setAttribute('placeholder','Search');
    
    get_element('top_row_element_0').textContent = 'Groups';;
    get_element('top_row_element_1').textContent = 'All Contacts';;
    var plus_button = get_element('top_row_element_2');
    plus_button.textContent = '+';

// plus_button event displaying New Contact display screen

    plus_button.addEventListener('click',function(event){
       
       get_element('new_contact_container').style.display = 'inline-block';
       if(get_element('new_contact_container').style.display === 'inline-block'){
           get_element('contact_container').style.display = 'none';
       };
    });

// Alphabetical letters for the abc containers
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var split_alphabet = alphabet.split('');
    
// create the left side letters and containers for the contacts 
    for(var i=0; i<26; i++){
        create_containers('div','abc_container_' + i,get_element('names_container'));
        var abc_container = document.getElementById('abc_container_' + i);
        var letter_container = document.createElement('p');
        letter_container.setAttribute('id','letter_container_'+i);
        letter_container.textContent = split_alphabet[i];
        
        abc_container.appendChild(letter_container); 
    };
    
    for(var i=0; i<26; i++){
        create_containers('p','right_column_letters_'+i,get_element('right_column_letters_container'));
        var letters = document.getElementById('right_column_letters_'+i);
        letters.textContent = split_alphabet[i];
    };
    
    create_containers('p','hastag',get_element('right_column_letters_container'));
    get_element('hastag').textContent = '#';

// create array for all the letter_container id's

    for(i in split_alphabet){
        var current_letter = split_alphabet[i];
        var current_abc_container = document.getElementById('abc_container_'+i);
        
        for(i in contact_array){
            current_letter = current_letter.toLowerCase();
            var regex_pattern = new RegExp('^' + current_letter + '.*|\w','gi');
            
            if(contact_array[i].first_name.match(regex_pattern)){
                var inner_contact_container = document.createElement('p');
                inner_contact_container.setAttribute('class','inner_contact_container');
                inner_contact_container.textContent = contact_array[i].first_name + ' ' + contact_array[i].last_name;
                
                current_abc_container.appendChild(inner_contact_container);
            };
        };
    };
    
// Creating New Contact display screen

    create_containers('div','new_contact_container',document.body);
    create_containers('div','second_top_row_container',get_element('new_contact_container'));
    create_containers('div','second_screen_input_section_container',get_element('new_contact_container'));
    create_containers('div','left_input_section_container_div',get_element('second_screen_input_section_container'));
    create_containers('div','right_input_section_container_div',get_element('second_screen_input_section_container'));
    
// Creating span elements for: Cancel, All Contact and Done

    create_multi_elements(3,'span','second_top_row_element_',get_element('second_top_row_container'));
    
    var update_element_properties = function(id,text_content,new_id){
        get_element(id).textContent = text_content;
        get_element(id).setAttribute('id',new_id);
    };
    
    update_element_properties('second_top_row_element_0','Cancel','cancel_button');
    update_element_properties('second_top_row_element_1','New Contact','new_contact');
    update_element_properties('second_top_row_element_2','Done','done_button');
    
    var cancel_button = function(){
        return get_element('cancel_button');
    };

    cancel_button().textContent = 'Cancel';
    cancel_button().addEventListener('click',function(event){
       get_element('contact_container').style.display = 'inline-block';
       if(get_element('contact_container').style.display === 'inline-block'){
           get_element('new_contact_container').style.display = 'none';
       };
    });
    
    
    
// Creating input elements for:  First Name, Last Name, and Company    

    create_multi_elements(3,'input','right_input_',get_element('right_input_section_container_div'));
    
    var change_input_attributes = function(id,new_id,attribute_value){
        get_element(id).setAttribute('placeholder',attribute_value);
        get_element(id).setAttribute('class',new_id);
    };
    
    change_input_attributes('right_input_0','first_last_company','First');
    change_input_attributes('right_input_1','first_last_company','Last');
    change_input_attributes('right_input_2','first_last_company','Company');
    
// add phone container elements for: green circle plus sign and add phone text

    create_containers('div','add_other_info_container',get_element('new_contact_container'));
    create_multi_elements(15,'div','add_more_info_container_',get_element('add_other_info_container'));
    
    var create_plus_containers = function(){
        for(var i=0; i<get_element('add_other_info_container').childElementCount; i++){
            create_containers('div','plus_and_add_containers_'+i,get_element('add_more_info_container_'+i));
            create_containers('div','green_plus_container_'+i,get_element('plus_and_add_containers_'+i));
            create_containers('div','add_container_'+i,get_element('plus_and_add_containers_'+i));
            
            get_element('green_plus_container_'+i).setAttribute('class','green_plus fa fa-plus-circle');
            
        };
        
    };
    
//create containers after clicking on add phone
    
    var create_label_containers = function(label_type){
        
        for(var i=0; i<9; i++){
            create_containers('div','main_label_container_'+i,get_element('add_more_info_container_0'));
            
            create_containers('div','label_and_input_left_container_'+i,get_element('main_label_container_'+i));
            create_containers('div','label_and_input_right_container_'+i,get_element('main_label_container_'+i));
            
            create_containers('input','phone_input_'+i,get_element('label_and_input_right_container_'+i));
            
            create_containers('div','minus_container_'+i,get_element('label_and_input_left_container_'+i));
            create_containers('div','label_container_'+i,get_element('label_and_input_left_container_'+i));
            create_containers('div','chevron_container_'+i,get_element('label_and_input_left_container_'+i));
            
            get_element('label_and_input_left_container_'+i).setAttribute('class','label_and_input_left_container');
            get_element('label_and_input_right_container_'+i).setAttribute('class','label_and_input_right_container');
            get_element('main_label_container_'+i).setAttribute('class','main_label_container');
            get_element('minus_container_'+i).setAttribute('class','minus_container fa fa-minus-circle');
            get_element('chevron_container_'+i).setAttribute('class','fa fa-chevron-right');
            get_element('phone_input_'+i).setAttribute('placeholder','Phone');
            get_element('phone_input_'+i).setAttribute('class','first_last_company phone_input');
            get_element('label_container_'+i).textContent = label_array[i];
            
            get_element('label_container_'+i).setAttribute('class','label_container');
            
         };
    };
    
    create_label_containers();
    
    var display_none_main_label_container = function(){
        for(var i=0; i<get_element('add_more_info_container_0').childElementCount; i++){
            get_element('main_label_container_'+i).style.display = 'none';
        };
    };
    
    display_none_main_label_container();
    create_plus_containers();
    
// create click event to display containers for adding more information

    var click = 0;
    var add_phone_button = get_element('plus_and_add_containers_0');
    add_phone_button.addEventListener("click", function (event) {
        
        click++;
        
        for(var i=0; i<1000; i++){
            if(click == i+1){
        		get_element('main_label_container_'+i).style.display = 'inline-block';
            }else if(click == i+10) {
                
                create_containers('div','infinite_container_'+i,get_element('add_more_info_container_0'));
                
                get_element('infinite_container_'+i).parentNode.insertBefore(get_element('infinite_container_'+i),get_element('plus_and_add_containers_0'));
                
        		create_containers('div','infinite_left_container_'+i,get_element('infinite_container_'+i));
                create_containers('div','infinite_right_container_'+i,get_element('infinite_container_'+i));
                
                create_containers('input','infinite_phone_input_'+i,get_element('infinite_right_container_'+i));
                
                create_containers('div','infinite_minus_container_'+i,get_element('infinite_left_container_'+i));
                create_containers('div','infinite_label_container_'+i,get_element('infinite_left_container_'+i));
                create_containers('div','infinite_chevron_container_'+i,get_element('infinite_left_container_'+i));
                
                get_element('infinite_left_container_'+i).setAttribute('class','label_and_input_left_container');
                get_element('infinite_right_container_'+i).setAttribute('class','label_and_input_right_container');
                get_element('infinite_container_'+i).setAttribute('class','main_label_container');
                get_element('infinite_minus_container_'+i).setAttribute('class','minus_container fa fa-minus-circle');
                get_element('infinite_chevron_container_'+i).setAttribute('class','fa fa-chevron-right');
                get_element('infinite_phone_input_'+i).setAttribute('placeholder','Phone');
                get_element('infinite_phone_input_'+i).setAttribute('class','first_last_company phone_input');
                get_element('infinite_label_container_'+i).textContent = label_array[0];
        
            };
        };
    });
    
    add_text_content(); // function to add text content for the add more info containers, eg. add phone
    
    create_containers('span','')
    
    create_containers('input','note_container',get_element('input_container_13'));
    get_element('note_container').setAttribute('placeholder','Note');
    
    create_containers('div','search_cancel',get_element('search_container'));
    get_element('search_cancel').textContent = 'Cancel';
    
   
   
    
