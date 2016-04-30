var contact_container;
var top_row_container;
var search_container;
var names_container;
var right_column_letters_container;
var hashtag;
var search;
var alphabet;
var split_alphabet;


var new_contact_container;
var second_top_row_container;
var left_input_section_container_div;
var right_input_section_container_div;

var abc_container;
var letter_container;
var full_name_container;


//building a container for the All Contacts display screen

contact_container = document.createElement('div');
contact_container.setAttribute('id','contact_container');

top_row_container = document.createElement('div');
top_row_container.setAttribute('id','top_row_container');

search_container = document.createElement('div');
search_container.setAttribute('id','search_container');

search = document.createElement('input');
search.setAttribute('id','search');
search.setAttribute('placeholder','Search');

names_container = document.createElement('div');
names_container.setAttribute('id','names_container');

right_column_letters_container = document.createElement('div');
right_column_letters_container.setAttribute('id','right_column_letters_container');

hashtag = document.createElement('p');
hashtag.setAttribute('id','hashtag');
hashtag.textContent = '#';

var create_element = function(element_type,element_id){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    top_row_container.appendChild(element);
};

var create_contact_container_elements = function(contact_container_element, contact_container_id){
    var contact_container_element = document.createElement(contact_container_element);
    contact_container_element.setAttribute('id',contact_container_id);
    names_container.appendChild(contact_container_element);
};

var create_right_column_letters = function(letter_element,letter_element_id){
    var right_column_letters = document.createElement(letter_element);
    right_column_letters.setAttribute('id',letter_element_id);
    right_column_letters_container.appendChild(right_column_letters);
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




//building a container for the New Contact display screen

new_contact_container = document.createElement('div');
new_contact_container.setAttribute('id','new_contact_container');

second_top_row_container = document.createElement('div');
second_top_row_container.setAttribute('id','second_top_row_container');

var create_second_top_row_element = function(element_type,element_id){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    second_top_row_container.appendChild(element);
};

var create_second_display_elements = function(element_type,element_id){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    new_contact_container.appendChild(element);
};

var create_right_input_section_elements = function(element_type,element_id){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    right_input_section_container_div.appendChild(element);
};


//When DOM is loaded

document.addEventListener('DOMContentLoaded',function(event){
    
// Creating All Contacts disply screen

    document.body.appendChild(contact_container);
    contact_container.appendChild(top_row_container);
    contact_container.appendChild(search_container);
    contact_container.appendChild(names_container);
    contact_container.appendChild(right_column_letters_container);
    
    search_container.appendChild(search);
    
    create_element('span','group_button');
    create_element('span','contact');
    create_element('span','plus_button');
    
    var group = document.getElementById('group_button');
    var contact = document.getElementById('contact');
    var plus_button = document.getElementById('plus_button');
    
    group.textContent = 'Groups';
    contact.textContent = 'All Contacts';
    plus_button.textContent = '+';
    
    plus_button.addEventListener('click',function(event){
       
       new_contact_container.style.display = 'inline-block';
       if(new_contact_container.style.display === 'inline-block'){
           contact_container.style.visibility = 'hidden';
       };
    });
    
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //console.log(alphabet);
    split_alphabet = alphabet.split('');
    
    
// create the left side letters and containers for the contacts    
     for(var i=0; i<alphabet.length; i++){
        create_contact_container_elements('div','abc_container_' + i);
        abc_container = document.getElementById('abc_container_' + i);
        letter_container = document.createElement('p');
        letter_container.setAttribute('id','letter_container_'+i);
        letter_container.textContent = split_alphabet[i];
        abc_container.appendChild(letter_container); 
    };   
    

    
// create array for all the letter_container id's
    for(i in split_alphabet){
         var current_letter = split_alphabet[i];
         var current_letter_container = document.getElementById('letter_container_'+i);
         
         for(i in contact_array){
             
             current_letter = current_letter.toLowerCase();
             var regex_pattern = new RegExp('^'+current_letter+'.*|\w','gi')
            
                if(
                    contact_array[i].first_name.match(regex_pattern)
                ){
                    console.log(true);
                    console.log(contact_array[i].first_name);
                 
                var inner_contact_container = document.createElement('p');
                 inner_contact_container.setAttribute('class','inner_contact_container')
                 inner_contact_container.style.fontSize = '2.3rem';
                 inner_contact_container.textContent = contact_array[i].first_name + ' ' + contact_array[i].last_name;
                 current_letter_container.appendChild(inner_contact_container);
             
                }else{
                    console.log(false);
                };
        };
};    
    
    
        
// create the left side alphabet
    for(var i=0; i<26; i++){
        create_right_column_letters('p','right_column_letters_'+i);
        var letters = document.getElementById('right_column_letters_'+i);
        letters.textContent = split_alphabet[i];
        
        right_column_letters_container.appendChild(hashtag);

};
    
    
// Creating New Contact display screen

    document.body.appendChild(new_contact_container);
    new_contact_container.appendChild(second_top_row_container);
    
    create_second_top_row_element('span','cancel_button');
    create_second_top_row_element('span','new_contact');
    create_second_top_row_element('span','done_button');
    
    var cancel = document.getElementById('cancel_button');
    var new_contact = document.getElementById('new_contact');
    var done_button = document.getElementById('done_button');
    
    cancel.textContent = 'Cancel';
    new_contact.textContent = 'New Contact';
    done_button.textContent = 'Done';
    
    cancel.addEventListener('click',function(event){
       new_contact_container.style.display = 'none';
       contact_container.style.visibility = 'visible';
    });
    
    create_second_display_elements('div','input_section_container');
    var input_section_container = document.getElementById('input_section_container');
    
    left_input_section_container_div = document.createElement('div');
    left_input_section_container_div.setAttribute('id','left_input_section_container_div');
    
    right_input_section_container_div = document.createElement('div');
    right_input_section_container_div.setAttribute('id','right_input_section_container_div');
    
    input_section_container.appendChild(left_input_section_container_div);
    input_section_container.appendChild(right_input_section_container_div);
    
    var add_photo_circle = document.createElement('span');
    add_photo_circle.setAttribute('id','add_photo_circle');
    add_photo_circle.textContent = 'add photo';
    
    left_input_section_container_div.appendChild(add_photo_circle);
    
    for(var i=0; i<3; i++){
        create_right_input_section_elements('input','right_input_'+i);
        var current_right_input = document.getElementById('right_input_'+i);
    };
    
    var right_input_first_name = document.getElementById('right_input_0');
    var right_input_last_name = document.getElementById('right_input_1');
    var right_input_company_name = document.getElementById('right_input_2');
    
    right_input_first_name.setAttribute('placeholder','First');
    right_input_last_name.setAttribute('placeholder','Last');
    right_input_company_name.setAttribute('placeholder','Company');
    
});















