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
       get_element('search').value='';
    });
    

    //trying to make the search work

//should work but does not
//     var find_names = function(){
// 	  var input_filter = get_element('search_container');
//       input_filter.addEventListener("keyup", function(){
//           console.log(event.keycode);
//   	    var input_value = this.value, i;
//   	    console.log(input_value);
//         var filter_list = document.getElementById(this.dataset.filter);
//         var filter_item = filter_list.querySelectorAll(".inner_contact_container");
//         for (var i = 0; i < filter_item.length; i++) {
//     		var _this = filter_item[i];
//             var phrase = _this.textContent + _this.id; 
//         	if (phrase.search(new RegExp('^'+input_value, "gi")) < 0) {
//         	_this.style.display = "none";
//             } else {
//             	_this.style.display = "block";
//              }
//           }
//           });
//     };

console.log('view.search.js EOF');

//works on fiddle 
  var live_filter = function(){
 	var input_filter = document.querySelector("[data-filter]");
  input_filter.addEventListener("keyup", function(){
  	var input_value = this.value, i;
    var filter_list = document.getElementById(this.dataset.filter);
    var filter_item = filter_list.querySelectorAll("p");
    return('p');
    for (i = 0; i < filter_item.length; i++) {
    		var _this = filter_item[i];
        var phrase = _this.innerHTML + _this.id; 
    	if (phrase.search(new RegExp('^'+input_value, "gi")) < 0) {
      	_this.style.display = "none";
      } else {
      	_this.style.display = "block";
      }
    }
  });
 };
