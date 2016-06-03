//console.log('view.search.js EOF');

//works on fiddle 
  var live_filter = (function(){
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
 })();