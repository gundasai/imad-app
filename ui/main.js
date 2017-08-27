
var button=document.getElementById('counter');
var button1=document.getElementById('submit');
var text=document.getElementById('name');

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

 button1.onclick=function() {
       
        var names=["name1","name2","name3","name4"];
        var list=' ' ;
        for(var i=0;i<names.length;i++){
            list +='<li>'+names[i]+'</li>';
            
        }
        var ul=document.getElementById('name-list');
        ul.innerHTML=list;
    };
