
var button=document.getElementById('counter');
var span=document.getElementById('count');
var counter=0;
button.onclick=function(){
    
    
    
    counter=counter+1;
    span.ineerHTML=counter.toString();
};
