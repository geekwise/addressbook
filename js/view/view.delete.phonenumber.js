/**
click function:minus_container_
on click will delete selected main_label_container_
*/
var click_delete_number = function (){
    var delete_phone_button = get_element('main_label_container_');
    main_label_container_.addEventListener("click", function (event) {
        this.style.display = 'none';
    })
        
};