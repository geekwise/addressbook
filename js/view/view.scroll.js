  var onscroll=function(){
    window.sticky_header();
};

var sticky_header=function(){
    var fixed_heads=document.getElementsByClassName('fixed_header');//look to make sure class is on kool's work
    for(i=0;i<fixed_heads.length;i++){
        var header=fixed_heads[i];
        var next_header=fixed_heads[i+1];
        var holder=getPrevNext(header)[0];  
        if(window.pageYOffset>findPosY(holder)){
        
        /**
        *if the scroll position in the window is farther than the placeholder of the current headers position in the DOM
        */
            if(typeof next_header!='undefined'){
                /**
                *if this is not the last header
                */
          
                var differance=findPosY(next_header)-window.pageYOffset;
                /**
                *the differance between the scroll position and the header placeholder position
                */
               
                if(differance<header.offsetHeight){
                    /**
                    *push the current header up so the headers do not overlap
                    */
                   
                    header.style.position="fixed";
                    header.style.top='-'+(header.offsetHeight-differance)+'px';
                    
                }
                else{
                    /**
                    *if the next header is not there
                    */
                    
                    holder.style.height=header.offsetHeight+'px';
                    header.style.position="fixed";
                    header.style.top="0px";
                }
                
            }
             
            else{
                                    
                holder.style.height=header.offsetHeight+'px';
                
                header.style.position="fixed";
                header.style.top="0px";
            }
           
            
        }
        else{
            holder.style.height='0px';
            
            header.style.position='static';
            header.style.removeProperty('top');
        }
        
    }
};
/**
*grab the header in the placeholder and the next header,privious header
*/
function getPrevNext(el){
    var els=document.getElementsByTagName('*');
    for(j=0;j<els.length;j++){
        if(els[j]==el){
            return [els[j-1],els[j+1]];
        }
    }
    return false;
}

function findPosX(obj)
  {
    var curleft = 0;
    if(obj.offsetParent)
        while(1) 
        {
          curleft += obj.offsetLeft;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.x)
        curleft += obj.x;
    return curleft;
  }

  function findPosY(obj)
  {
    var curtop = 0;
    if(obj.offsetParent)
        while(1)
        {
          curtop += obj.offsetTop;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.y)
        curtop += obj.y;
    return curtop;
  };