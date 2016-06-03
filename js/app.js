/**
 * @project addressbook (javascript model view controller)
 * @author Jennifer Tablett <geekwise-jennifer_tablett@gmail.com> and Kao Thao <geekwise-kao-thao@gmail.com>
 * @geekwiseacademy EDC accelerated apprenticeship workshop
 */
 
var get_element = function(id){
    return document.getElementById(id);
}


// creating script tags in the head tag to link files together
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

//  When DOM is loaded, call load function to create script tags in the head tag
document.addEventListener('DOMContentLoaded',function(event){
    
    load('controller.js',function(){
        
    });
    
    load('model.js',function(){
        
    });
    
    load('view/view.functions.js',function() {
        
    });
    
    load('view/view.functions.called.js',function() {
        
    });
    
    load('view/view.scroll.js',function() {
        
    });
    
    load('view/view.search.js',function() {
        
    });
    
    // === may use this when refactoring handler functions === //
    
    // load('view/view.handler.js',function() {
        
    // });
    
    load('view/view.add.photo.js',function() {

    });
    
    load('controller/create-name-containers.js',function() {
    // function greyed out, not used (sample only):    create_name_containers();
    });
    
});






