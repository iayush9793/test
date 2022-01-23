function addMore (){
    document.getElementById('error').innerHTML="Please Enter something"
    var name= document.getElementById('name').value;
 if (name =='') {
 document.getElementById('error').innerHTML="Please Enter Something"
     
 }else{
     var box=document.getElementById('box');
     var li=document.createElement('li');
     li.textContent=name;
     box.appendChild(li);
 }
}