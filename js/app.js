var get_element = function(id){
    return document.getElementById(id);
}

var load = function(url,callback){

    var main_script = document.querySelectorAll('[data-script=\'app.js\']')[0];
    var script = document.createElement('script');

    if(/^http|https/.test(url)){
            script.src = url;
    }else{
            script.src = 'js/' + url;
    }

    script.type = 'text/javascript';
    script.async = false;


    script.addEventListener('load',function(event){

        callback(null,event);

    },false);


    main_script.parentNode.insertBefore(script, main_script);
}

document.addEventListener('DOMContentLoaded',function(event){
    
    load('controller/controller.js',function(){
        
    });
    
    load('model.js',function(){
        
    });
    
    load('view/view.js',function() {
        
    });
    
    load('view/view.add.photo.js',function() {
        
    });
    
   load('view/view.search.js',function(){
       
   });
   
   load('view/view.scroll.js',function(){
       sticky_header();
   });
   
    
    load('controller/create-name-containers.js',function() {
        create_name_containers();
    });
    
});
