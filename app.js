
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

const infoBtn = document.getElementById('btn');
const divElement = document.getElementById('persons-info');
const tBodyElement = document.getElementById('data');
const xTable=document.getElementById('text-table');
const body = xTable.tBodies[0];
const rows = body.rows;
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
     // stringOfInfo = "<p>" + "UserId: " + data[i].userId + "<br>" + "id: "+ data[i].id+"<br>" + "title: "+data[i].title+"<br>" + "body: " + data[i].body + "<p/>";
     // divElement.insertAdjacentHTML('beforeend',stringOfInfo);
        stringOfInfo +="<tr class = 'row-j'>";
        //stringOfInfo +="<td>"+data[i].userId+"</td>";
        stringOfInfo +="<td>"+data[i].id+"</td>";
        stringOfInfo +="<td>"+data[i].title+"</td>";
        stringOfInfo +="<td>"+data[i].body+"</td><tr/>";
        tBodyElement.innerHTML=stringOfInfo;
        if(i < 19){
            continue;
        }else{
            break;
        }     
     } 
    rows[rows.length - 1].insertAdjacentHTML('beforebegin', "<tr><td colspan=3><input type='text' name='id-box' placeholder='id'><input type='text' name='topic-box' placeholder='topic'><input type='text' name='text' placeholder='text'></td></tr>") ;  
};
infoBtn.addEventListener('click', createRequest);


 