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

create_containers('div','search_cancel',get_element('search_container'));
get_element('search_cancel').textContent = 'Cancel';

//search input animation

click_cancel_button();

click_search();

get_element('top_row_element_0').textContent = 'Groups';;
get_element('top_row_element_1').textContent = 'All Contacts';;
var plus_button = get_element('top_row_element_2');
plus_button.textContent = '+';

// plus_button event displaying New Contact display screen

click_plus_button();

create_abc_containers();

// get_element('letter_container_0').style.position = 'fixed';
// get_element('letter_container_0').style.left = '0';
// get_element('names_container').addEventListener('scroll',function(event){
    
//     if(get_element('names_container').scrollTop >= 0){
//         get_element('letter_container_0').style.position = 'absolute';
//         get_element('letter_container_0').style.top = '0';
//         get_element('letter_container_0').style.left = '0';
//         get_element('letter_container_0').offset().top = 40;
//     };
// });

// var scroll_names_container = function () {
    
//     get_element('letter_container_0').style.position = 'absolute';
//     get_element('letter_container_0').offset().top = 110;
// };


create_right_column_letters();

create_containers('p','hastag',get_element('right_column_letters_container'));
get_element('hastag').textContent = '#';

// create array for all the letter_container id's

create_inner_contact_container();
    
// Creating New Contact display screen

create_containers('div','new_contact_container',document.body);
create_containers('div','second_top_row_container',get_element('new_contact_container'));
create_containers('div','second_screen_input_section_container',get_element('new_contact_container'));
create_containers('div','left_input_section_container_div',get_element('second_screen_input_section_container'));
create_containers('div','right_input_section_container_div',get_element('second_screen_input_section_container'));

// Creating span elements for: Cancel, All Contact and Done

    create_multi_elements(3,'span','second_top_row_element_',get_element('second_top_row_container'));
    
    update_element_properties('second_top_row_element_0','Cancel','cancel_button');
    update_element_properties('second_top_row_element_1','New Contact','new_contact');
    update_element_properties('second_top_row_element_2','Done','done_button');
    
    cancel_button().textContent = 'Cancel';
    
    var click_top_cancel_button = function(){
        cancel_button().addEventListener('click',function(event){
           get_element('contact_container').style.display = 'inline-block';
           if(get_element('contact_container').style.display === 'inline-block'){
               get_element('new_contact_container').style.display = 'none';
           };
        });
    };
    
    click_top_cancel_button();
    
// Creating input elements for:  First Name, Last Name, and Company    

    create_multi_elements(3,'input','right_input_',get_element('right_input_section_container_div'));
    
    change_input_attributes('right_input_0','first_last_company','First');
    change_input_attributes('right_input_1','first_last_company','Last');
    change_input_attributes('right_input_2','first_last_company','Company');
    
// add phone container elements for: green circle plus sign and add phone text

    create_containers('div','add_other_info_container',get_element('new_contact_container'));
    create_multi_elements(15,'div','add_more_info_container_',get_element('add_other_info_container'));
    
//create containers after clicking on add phone
    
    create_label_containers();
    
    display_none_main_label_container();
    create_plus_containers();
    
// create click event to display containers for adding more information
    
    add_text_content(); // function to add text content for the add more info containers, eg. add phone
    
    click_to_add_phone(); // click on add_phone and another container will pop up to add more info, eg. add home phone
    
    create_containers('span','');
    
    create_containers('input','note_container',get_element('input_container_13'));
    get_element('note_container').setAttribute('placeholder','Note');
    