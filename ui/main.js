
var button=document.getElementById('counter');
var span=document.getElementById('count');

button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange =function(){
        if(request.readyState===XMLHttpRequestDONE){
            if(request.status===200){
                var counter=request.responseText;
                span.innerHTML=counter.toString();
            }
            
        }
    }
    
    
   
};
