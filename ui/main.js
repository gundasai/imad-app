
var button=document.getElementById('counter');
var button1=document.getElementById('submit');
var text=document.getElementById('name');
var span=document.getElementById('count');
var name1=document.getElementById('name1');
var name2=document.getElementById('name2');
var name3=document.getElementById('name3');
var submit=0;
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange =function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                span.innerHTML=counter.toString();
            }
            
        }
    };
   
    
    request.open('GET','http://yeshwanthgunda98.imad.hasura-app.io/counter',true);
    request.send(null);
    
   
};
 button1.onclick=function(){
        submit=submit+1;
        var text1=text.innerHTML();
        if(submit===1)
        name1.innerHTML=text1;
        if(submit===2)
        name2.innerHTML=text1;
        if(submit===3)
        name3.innerHTML=text1;
        
        
        
    };
