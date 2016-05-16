var get_element = function(id){
    return document.getElementById(id);
}

var create_containers = function(container_element,container_id,container_parent){
    var container = document.createElement(container_element);
    container.setAttribute('id',container_id);
    container_parent.appendChild(container);
};

var add_more_info_container;

//building a container for the All Contacts display screen

var create_multi_elements = function(number_of_top_row_element,element_type,element_id,element_parent){
    for(var i=0; i<number_of_top_row_element; i++){
        create_containers(element_type,element_id+i,element_parent);
    };
};

var contact_information = function(first_name,last_name,company,phone,email){
    this.first_name = first_name;
    this.last_name = last_name;
    this.company = company;
    this.phone = phone;
    this.email = email;
};

// create the default contact information

var alonzo = new contact_information('Alonzo','Yrigollen','EDC','(559) 111-1111','geekwise.alonzo.yrigollen@gmail.com');
var j = new contact_information('J','Tablett','EDC','(559) 111-1112','geekwise.jennifer.tablett@gmail.com');
var tiffany = new contact_information('Tiffany','Ranish','EDC','(559) 111-1113','geekwise.tiffany.ranish@gmail.com');
var nicole = new contact_information('Nicole','Deltoro','EDC','(559) 111-1114','geekwise.nicole.deltoro@gmail.com');
var veronica = new contact_information('Veronica','Chavez','EDC','(559) 111-1115','geekwise.veronica.chavez@gmail.com');
var juston = new contact_information('Juston','Miller','EDC','(559) 111-1116','geekwise.juston.miller@gmail.com'); 
var mark = new contact_information('Mark','Thomas','EDC','(559) 111-1116','mark.thomas.miller@gmail.com'); 
var bob = new contact_information('Bob','Brettson','EDC','(559) 111-1116','mark.thomas.miller@gmail.com'); 
var sarah = new contact_information('Sarah','Smith','EDC','(559) 111-1116','mark.thomas.miller@gmail.com'); 

// create an array for all the default contacts
var contact_array = [
    alonzo,
    juston,
    tiffany,
    nicole,
    veronica,
    j,
    mark,
    bob,
    sarah
];

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
    
    
}  // end of code to use laptop camera 

var add_info_array = [
        'add phone',
        'add email',
        'Ringtone  Default',
        'Vibration  Default',
        'Text Tone  Default',
        'Vibration  Default',
        'add url',
        'add address',
        'add birthday',
        'add date',
        'add related name',
        'add social profile',
        'add instant message',
        '',
        'add field'
    ];
    
    var add_text_content = function (){
        for(var i=0; i<add_info_array.length; i++){
            get_element('input_container_'+i).textContent = add_info_array[i];
            
        };
    };
    


//When DOM is loaded

document.addEventListener('DOMContentLoaded',function(event){
    
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
    
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var split_alphabet = alphabet.split('');
    var letter_container;
// create the left side letters and containers for the contacts 
    for(var i=0; i<26; i++){
        create_containers('div','abc_container_' + i,get_element('names_container'));
        var abc_container = document.getElementById('abc_container_' + i);
        letter_container = document.createElement('p');
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
    
    // attempt to merge app.js code to script.js pulling data from external source

    var data_urls = window.location.origin+'/js/data_urls.js';
    var load_js_library = 'https://cdnjs.cloudflare.com/ajax/libs/load.js/1316434407/load-min.js';
    
    var load_scripts = function(){
        load(data_urls).thenRun(function(){
           load(contact_first_name_url,contact_last_name_url).thenRun(function(){
               
                var contact_first_name_url_one = contact_first_name_url;
                var contact_last_name_url_two = contact_last_name_url;
                var contact_first_name = first_name;
                var contact_last_name = last_name;
                       console.log(contact_first_name); 
                       console.log(contact_last_name);
                       
                for(i in contact_first_name){
                    var current_letter = split_alphabet[i];
                    var current_abc_container = document.getElementById('abc_container_'+i);
                    
                    for(i in contact_first_name_url){
                        current_letter = current_letter.toLowerCase();
                        var first_name_regex_pattern = new RegExp('^' + current_letter + '.*|\w','gi');
                        
                        if(first_name.match(first_name_regex_pattern)){
                        var my_inner_contact_container = document.createElement('p');
                        my_inner_contact_container.setAttribute('class','inner_contact_container');
                        my_inner_contact_container.textContent = first_name;
                        
                        current_abc_container.appendChild(inner_contact_container);
                        };
                    
                    var my_inner_contact_container = document.createElement('p');
                    my_inner_contact_container.setAttribute('class','inner_contact_container');
                    my_inner_contact_container.textContent = first_name + ' ' + last_name;
                    
                    current_abc_container.appendChild(inner_contact_container);
                    };
                };
        });
    });
    
    };

    var attach_script = function(url, callback) {
    	
    	var script_element = document.createElement('script');
    	var first_script = document.getElementsByTagName('script')[0];
    	
    	script_element.src = url;
    	
      	if(callback){
    		script_element.addEventListener('load',function(event){
    				callback(null, event);
    		},false);
    	}
    	
    	first_script.parentNode.insertBefore(script_element,first_script);
    
    }
    
    attach_script(load_js_library,function(){
                    
                    load_scripts();

            });
    
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
    
    create_containers('label','add_photo_label',get_element('left_input_section_container_div'));
    get_element('add_photo_label').setAttribute('for','camera_input');
    get_element('add_photo_label').textContent = 'add photo';
    
    create_element('input',{id:'camera_input'});    
        
    set_value('camera_input',{
                                  
        placeholder:'insert photo',
        type:'file',
        accept:'audio/*;capture=microphone'
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
            create_containers('div','green_plus_container_'+i,get_element('add_more_info_container_'+i));
            get_element('green_plus_container_'+i).setAttribute('class','green_plus fa fa-plus-circle');
            
        };
    };
    
    create_plus_containers();
    
    var create_new_input_containers = function(){
        for(var i=0; i<get_element('add_other_info_container').childElementCount; i++){
            create_containers('div','input_container_'+i,get_element('add_more_info_container_'+i));
            get_element('input_container_'+i).setAttribute('class','input_container');
        };
    };
    
    create_new_input_containers();
    
    add_text_content(); // function to add text content for the add more info containers, eg. add phone
    
    create_containers('span','')
    
    create_containers('input','note_container',get_element('input_container_13'));
    get_element('note_container').setAttribute('placeholder','Note');
    
    create_containers('div','search_cancel',get_element('search_container'));
     get_element('search_cancel').textContent = 'Cancel';
    
    //search input animation
    get_element( 'search' ).addEventListener( 'click', function() {
        
        this.style.width = '50%';
        this.style.float = 'left';
        get_element('search_cancel').style.display = 'inline-block';
        // get_element[id^=abc_container_].style.backgroundColor = '#dcdcdd';
         
    }); 
    
    get_element('search_cancel').addEventListener('click',function(){
       
       this.style.display = 'none';
       get_element('search').style.width = '95%';
    });
    
    //Listen for orientation changes
    
    var orientation_change = function(){
        if( /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) === false){
            window.addEventListener("orientationchange", function() {
                prompt("the orientation of the device is now ", screen.orientation.angle);
                letter_container.style.backgroundColor = 'yellow';
            });
        };
    };
    
    orientation_change();
    
    // var updateOrientation = function(){
    //     var displayStr = "Orientation : ";

    //     switch(window.orientation)
    //     {
    //         case 0:
    //             displayStr += "Portrait";
    //         break;

    //         case -90:
    //             displayStr += "Landscape (right, screen turned clockwise)";
    //         break;

    //         case 90:
    //             displayStr += "Landscape (left, screen turned counterclockwise)";
    //         break;

    //         case 180:
    //             displayStr += "Portrait (upside-down portrait)";
    //         break;

    //     }
    //     // document.getElementById("output").innerHTML = displayStr;
    //     alert(displayStr);
    // }
    
    // updateOrientation();
    
});















