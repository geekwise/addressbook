var data_urls = window.location.origin+'/js/data_urls.js';
var load_js_library = 'https://cdnjs.cloudflare.com/ajax/libs/load.js/1316434407/load-min.js';
var papa_parse_js_library = 'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.1.2/papaparse.min.js';
var csv_data;


var load_csv_data = function(url){
    Papa.parse(url,{
    	download: true,
    	header: true,
    	complete: function(results) {
    		console.log(results);
    		csv_data = results;
    	}
    });
}



var load_scripts = function(){
    
    load(data_urls).thenRun(function(){
       
       
       
       load(papa_parse_js_library,contact_first_name_url,contact_last_name_url).thenRun(function(){
           
                  console.log(first_name); 
                  console.log(last_name);
                  console.log(Papa);
                  //load_csv_data(csv_data);
                  load_csv_data('https://rawgit.com/geekwise/951f5d5c1033d7128576/raw/a88f47d666df13c29da5232a092a80756ffc784d/app_data.csv');
                  

       })
       
        
    })
    
    
}


var attach_script = function(url, callback) {
	
	var script_element = document.createElement('script');
	var first_script = document.getElementsByTagName('script')[0];
	
	//script_element.src = '//' + url;
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
                    
                    //console.log('load.js ready');
                    load_scripts();

            });        

    
    
});