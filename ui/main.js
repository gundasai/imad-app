
var button=document.getElementById('counter');
var span=document.getElementById('count');
var counting=0;
button.onclick=function(){
    
    
    
    counting=counting+1;
    span.ineerHTML=counting.toString();
};
