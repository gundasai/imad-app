var  button= document.getElementById('submit');
  var nameInput=document.getElementById('name');


 button.onclick=function() {
   
     var name=nameInput.value;
     
    
    var request=new XMLHttpRequest();
    request.onreadystatechange =function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
       
        var names=request.responseText;
        names=JSON.parse(names);
        var list=' ' ;
        for(var i=0;i<names.length;i++){
            list +='<li>'+names[i]+'</li>';
            
        }
        var ul=document.getElementById('name-list');
        ul.innerHTML=list;
            }
        }
    };
      request.open('GET','http://yeshwanthgunda98.imad.hasura-app.io/submit-name'+name,true);
    request.send(null);
    
   
};

    
