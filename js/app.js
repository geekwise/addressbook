var data_urls = window.location.origin+'/js/data_urls.js';
var load_js_library = 'https://cdnjs.cloudflare.com/ajax/libs/load.js/1316434407/load-min.js';

var load_scripts = function(){
    load(data_urls).thenRun(function(){
       load(contact_first_name_url,contact_last_name_url).thenRun(function(){
          console.log(first_name); 
          console.log(last_name);
       })
    })
}

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

document.addEventListener('DOMContentLoaded',function(event){

            attach_script(load_js_library,function(){
                    
                    console.log('load.js ready');
                    load_scripts();

            });        
});