/**
 * view/view.functions.js
 * file used to store functions for addressbook web app 
*/

//  create containers or elements in general to place contents
var create_containers = function(container_element,container_id,container_parent){
    var container = document.createElement(container_element);
    container.setAttribute('id',container_id);
    container_parent.appendChild(container);
};

//  create multiple elements at the same time, which will be appended to same parent
var create_multi_elements = function(number_of_top_row_element,element_type,element_id,element_parent){
    for(var i=0; i<number_of_top_row_element; i++){
        create_containers(element_type,element_id+i,element_parent);
    };
};

//  when search input field is clicked, it's width will decrease, float to left and display cancel button
var click_search = function(){
        get_element('search').addEventListener('click', function(){
            get_element('search_icon').style.left = '13%';
            
            
            get_element('search_icon').style.transition = '.5s ease';
            this.style.float = 'left';
            this.style.width = '50%';
            
            get_element('search_cancel').style.display = 'inline-block';
        });
    };
    
//  when cancel button is clicked, it will display as none and search field width will increase
var click_cancel_button = function(){
    get_element('search_cancel').addEventListener('click',function(){
       this.style.display = 'none';
       
       get_element('search').style.width = '95%';
       
       get_element('search_icon').style.left = '38%';
       if(get_element('search').style.width === '95%'){
           get_element('search_icon').style.transition = '0s';
           get_element('search').style.float = 'none';
       };    
    });
};

//  when plus button is clicked, it will display the New Contact display screen
var click_plus_button = function(){
        plus_button.addEventListener('click',function(event){
          get_element('new_contact_container').style.display = 'inline-block';
          if(get_element('new_contact_container').style.display === 'inline-block'){
              get_element('contact_container').style.display = 'none';
          };
        });
    };

//  adding text content to containers, visible next to plus symbol
var add_text_content = function (){
    for(var i=0; i<add_info_array.length; i++){
        get_element('add_container_'+i).textContent = add_info_array[i];
    };
}; 

// alphabetical letters for the abc containers
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var split_alphabet = alphabet.split('');
    
// create the left side letters and containers for the contacts 
var create_abc_containers = function(){
    for(var i=0; i<26; i++){
        create_containers('div','abc_container_' + i,get_element('names_container'));
        var abc_container = document.getElementById('abc_container_' + i);
        var letter_container = document.createElement('p');
        letter_container.setAttribute('id','letter_container_'+i);
        letter_container.textContent = split_alphabet[i];
        
        abc_container.appendChild(letter_container); 
    };
};

//  create the right column for the blue alphabet letters
var create_right_column_letters = function(){
    for(var i=0; i<26; i++){
        create_containers('p','right_column_letters_'+i,get_element('right_column_letters_container'));
        var letters = document.getElementById('right_column_letters_'+i);
        letters.textContent = split_alphabet[i];
    };
};

// create pre-populated names from an array and display it on the All Contact display screen
var create_inner_contact_container = function(){
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
};

//  to add text content to 'cancel' button, 'New Contact' label, and 'done' button
var update_element_properties = function(id,text_content,new_id){
    get_element(id).textContent = text_content;
    get_element(id).setAttribute('id',new_id);
};

//  need comment, used function in view.function.js file
var cancel_button = function(){
    return get_element('cancel_button');
};

//  this will create the desired placeholder for the inputs in the New Contact display screen
var change_input_attributes = function(id,new_id,attribute_value){
    get_element(id).setAttribute('placeholder',attribute_value);
    get_element(id).setAttribute('class',new_id);
};

//  creates button (includes green plus sign), eventually when clicked will add more info for new contact 
var create_plus_containers = function(){
    for(var i=0; i<get_element('add_other_info_container').childElementCount; i++){
        create_containers('div','plus_and_add_containers_'+i,get_element('add_more_info_container_'+i));
        create_containers('div','green_plus_container_'+i,get_element('plus_and_add_containers_'+i));
        create_containers('div','add_container_'+i,get_element('plus_and_add_containers_'+i));
        
        get_element('green_plus_container_'+i).setAttribute('class','green_plus fa fa-plus-circle');
    };
};

//create containers after clicking on add phone button on New Contact display screen
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

//  these containers are displayed as none, and will be inline-block when add phone button is clicked
var display_none_main_label_container = function(){
    for(var i=0; i<get_element('add_more_info_container_0').childElementCount; i++){
        get_element('main_label_container_'+i).style.display = 'none';
    };
};

// create click event to display containers for adding more information
var click_to_add_phone = function(){
    var click = 0;
    var add_phone_button = get_element('plus_and_add_containers_0');
    
    //  when clicked, option will appear where you can add phone number for that particular category
    add_phone_button.addEventListener("click", function (event) {
        
        click++;
        
        //  1000 is an arbitrary number, not expecting user to click on add phone more than 1000 times
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
};
