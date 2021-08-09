
//window.onload = function(){
    //var http = new XMLHttpRequest();
    //http.onreadystatechange = function(){
       // if(http.readyState == 4 && http.status== 200){
            //console.log(http.response);
        //}
        
    //};
    //http.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    //http.send();
    //jQUERY METHOD
   // $.get("https://jsonplaceholder.typicode.com/posts", (data) => {
    // console.log(data);
    //});
    
//};
infoBtn.addEventListener('click', createRequest);
const infoBtn = document.getElementById('btn');
const divElement = document.getElementById('persons-info');
let stringOfInfo = "";
const createRequest = () =>{
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://jsonplaceholder.typicode.com/posts');
    ourRequest.onload = () =>{
        let ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
}
const renderHTML = (data) => {
  for(let i = 0 ; i< data.length ; i++) {
      stringOfInfo = "<p>" + "UserId: " + data[i].userId + "<br>" + "id: "+ data[i].id+"<br>" + "title: "+data[i].title+"<br>" + "body: " + data[i].body + "<p/>";
      divElement.insertAdjacentHTML('beforeend',stringOfInfo);
  }   
};


 