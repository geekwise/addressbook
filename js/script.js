var contact_container;
var top_row_container;
var alphabet;
var split_alphabet;
var search_container;
var search;

contact_container = document.createElement('div');
contact_container.setAttribute('id','contact_container');

top_row_container = document.createElement('div');
top_row_container.setAttribute('id','top_row_container');

search_container = document.createElement('div');
search_container.setAttribute('id','search_container');

search = document.createElement('input');
search.setAttribute('id','search');
search.setAttribute('placeholder','Search');

var create_element = function(element_type,element_id){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    top_row_container.appendChild(element);
};

var create_contact_container_elements = function(contact_container_element, contact_container_id){
    var contact_container_element = document.createElement(contact_container_element);
    contact_container_element.setAttribute('id',contact_container_id);
    contact_container.appendChild(contact_container_element);
};

var contact_information = function(first_name,last_name,company,phone,email){
    this.first_name = first_name;
    this.last_name = last_name;
    this.company = company;
    this.phone = phone;
    this.email = email;
};

document.addEventListener('DOMContentLoaded',function(event){
    
    document.body.appendChild(contact_container);
    contact_container.appendChild(top_row_container);
    contact_container.appendChild(search_container);
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
    
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //console.log(alphabet);
    split_alphabet = alphabet.split('');
    console.log(split_alphabet);
    
    var abc_container;
    var letter_container
    
    for(var i=0; i<26; i++){
        
        create_contact_container_elements('div','abc_container_' + i);
        abc_container = document.getElementById('abc_container_' + i);
        letter_container = document.createElement('p');
        letter_container.setAttribute('id','letter_container_'+i);
        letter_container.textContent = split_alphabet[i];
        
        abc_container.appendChild(letter_container); 
    };
    
    var alonzo = new contact_information('Alonzo','Yrigollen','EDC','(559) 111-1111','geekwise.alonzo.yrigollen@gmail.com');
    var j = new contact_information('J','Tablett','EDC','(559) 111-1112','geekwise.jennifer.tablett@gmail.com');
    var tiffany = new contact_information('Tiffany','Ranish','EDC','(559) 111-1113','geekwise.tiffany.ranish@gmail.com');
    var nicole = new contact_information('Nicole','Deltoro','EDC','(559) 111-1114','geekwise.nicole.deltoro@gmail.com');
    var veronica = new contact_information('Veronica','Chavez','EDC','(559) 111-1115','geekwise.veronica.chavez@gmail.com');
    var juston = new contact_information('Juston','Miller','EDC','(559) 111-1116','geekwise.juston.miller@gmail.com');
    
    var contact_array = [
        alonzo,
        j,
        tiffany,
        nicole,
        veronica,
        juston
    ];
    
    // for(var i=0; i<abc_container.length; i++){
    //     var full_name_container = document.createElement('p');
    //     full_name_container.setAttribute('id','full_name_container_'+i);
    //     full_name_container.textContent = contact_array[i].first_name + ' ' + contact_array[i].last_name;
    //     console.log(full_name_container);
        
    //     abc_container.appendChild(full_name_container);
        
    // };
    
    //for the contacts in contact array, find first letter and if it matches (use regular expression?) 
    //the letter in the letter in the first p tag in the abc_container, then create and append the newly created p tag that
    //with textContent of: contact_array[i].first_name + ' ' + contact_array[i].last_name, to that particular abc_container
    for(i in contact_array){
        if(contact_array[i].toString().match(/w/) === letter_container.textContent.toString().match(/w/)){
        var full_name_container = document.createElement('p');
        full_name_container.setAttribute('id','full_name_container_'+i);
        full_name_container.textContent = contact_array[i].first_name + ' ' + contact_array[i].last_name;
        console.log(full_name_container);
        
                    abc_container.appendChild(full_name_container);
                    
                    console.log('--------------------------------------');
                    
                    if(
                        document.getElementById('full_name_container_' + i).textContent[0] === document.getElementById('abc_container_' + i).textContent[0]
                        
                        ){
                            
                            document.getElementById('abc_container_' + i).appendChild(document.getElementById('full_name_container_' + i));
                            
                        }
                    console.log(document.getElementById('full_name_container_' + i));
                  //  console.log(document.getElementById('abc_container_0'));
            };
    };
    
    
});















