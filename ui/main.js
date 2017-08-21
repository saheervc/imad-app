//console.log('Loaded!');
//change the text of the main-text div
//var element =document.getElementById('main-text');
//element.innerHTML='New Text';

//var img=document.getElementById('madi');
//var marginLeft = 0;
//function moveRight(){
//    marginLeft = marginLeft + 4;
//    img.style.marginLeft=marginLeft+ 'px';
//}
//img.onclick=function(){
//    var interval = setInterval(moveRight,50);
//}
var button=document.getElementById('counter');
button.onclick = function(){
  //create a reuest object
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable
  request.onreadystatechange = function(){
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
            var counter=request.responseText;
            var span = document.getElementById('count');
            span.innerHTML=counter.toString();
        }
    }
  };
  //Make a request to the counter endpoint
  request.open('GET', 'http://saheervc.imad.hasura-app.io/counter',true)
  request.send(null);
};