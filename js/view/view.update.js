var update_contact = function(){
    get_element('done_button').addEventListener('click',function(event){
        
        for(i in split_alphabet){
            var current_letter = split_alphabet[i];
            var current_abc_container = document.getElementById('abc_container_'+i);
            
            current_letter = current_letter.toLowerCase();
            var regex_pattern = new RegExp('^' + current_letter + '.*|\w','gi');
                
            if(get_element('right_input_0').value.match(regex_pattern)){
                var new_contact_container = document.createElement('p');
                new_contact_container.setAttribute('class','inner_contact_container');
                new_contact_container.textContent = get_element('right_input_0').value + ' ' + get_element('right_input_1').value;
                
                current_abc_container.appendChild(new_contact_container);
            };
        };
        get_element('right_input_0').value = null;
        get_element('right_input_1').value = null;
        get_element('right_input_2').value = null;
        
        get_element('contact_container').style.display = 'inline-block';
        get_element('new_contact_container').style.display = 'none';
    });
};

// ***greyed out line 6-26: the if statement was not working as expected in the above done button handler
        
        // var first_name = prompt('Please enter first name','E.g. Imageek');
        // var last_name = prompt('Please enter last name','E.g. Forlife');
        // var company_name = prompt('Please enter company name','E.g. Geekwise');

        // if(get_element('right_input_0').value === ''){
        //     get_element('right_input_0').value = first_name;
        // }else{
        //     get_element('right_input_0').value = get_element('right_input_0').value;
        // };
        
        // if(get_element('right_input_1').value === ''){
        //     get_element('right_input_1').value = last_name;
        // }else{
        //     get_element('right_input_1').value = get_element('right_input_1').value;
        // };
        
        // if(get_element('right_input_2').value === ''){
        //     get_element('right_input_2').value = company_name;
        // }else{
        //     get_element('right_input_2').value = get_element('right_input_2').value;
        // };