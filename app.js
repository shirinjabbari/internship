const infoBtn = document.getElementById('btn');
const tBodyElement = document.getElementById('data');
let stringOfInfo = "";
const createRequest = () =>{
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://jsonplaceholder.typicode.com/posts');
    ourRequest.onload = () =>{
        let ourData = JSON.parse(ourRequest.responseText).slice(0,10);
        renderHTML(ourData);
        clearString();
    };
    ourRequest.send();
}
const renderHTML = (data) => {
    for(let i = 0 ; i< data.length ; i++) {
        stringOfInfo +="<tr>";
        stringOfInfo +="<td>"+data[i].id+"</td>";
        stringOfInfo +="<td>"+data[i].title+"</td>";
        stringOfInfo +="<td>"+data[i].body+"</td><tr/>";
        tBodyElement.innerHTML=stringOfInfo;     
     }  
};
 const clearString = () =>{
   stringOfInfo = "";
   return stringOfInfo 
 };
 const searchTopic= ()=>{
  // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInputTopic");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td= tr[i].getElementsByTagName("td")[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
 }
 const searchText = ()=>{
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputBody");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      td= tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
 }
 const searchId = () =>{
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputId");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      td= tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
 }
infoBtn.addEventListener('click', createRequest);

 