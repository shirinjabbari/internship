//const infoBtn = document.getElementById('btn');
//let stringOfInfo ="";
let ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
ourRequest.onload = () => {
  const listItems = JSON.parse(ourRequest.responseText);
  // const listEl = document.getElementById('list');
  const paginationEl = document.getElementById("pagination");
  const tBodyElement = document.getElementById("data");
  let currentPage = 1;
  //let comboBox = document.getElementById("rowsPage");
  // let rows=comboBox.value;
  // const selected = document.querySelector('select');
  // let rows=parseInt(selected.value);
  // let valueDropdown = document.getElementById('rowsPage');
  // let valueData = valueDropdown.options[valueDropdown.selectedIndex].value;
  let rows;

  function displayList(items, rowsPerPage, page) {
    let stringOfInfo = "";
    //wrapper.innerHTML = "";
    page--;

    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedItems = items.slice(start, end);
    for (let i = 0; i < paginatedItems.length; i++) {
      let item = paginatedItems[i];
      // let itemEl = document.createElement('dive');
      // itemEl.classList.add('item');
      // itemEl.innerText = item.id;
      // wrapper.appendChild(itemEl);
      //    tBodyElement.innerText ="<tr>";
      //    tBodyElement.innerText ="<td>"+item.id+"</td>";
      //    tBodyElement.innerText ="<td>"+item.title+"</td>";
      //    tBodyElement.innerText ="<td>"+item.body+"</td><tr/>";
      //    wrapper.appendChild(tBodyElement);
      stringOfInfo += "<tr>";
      stringOfInfo += "<td>" + item.id + "</td>";
      stringOfInfo += "<td>" + item.title + "</td>";
      stringOfInfo += "<td>" + item.body + "</td><tr/>";
      tBodyElement.innerHTML = stringOfInfo;
    }
   //stringOfInfo = "";
  }
  function setUpPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = "";
    let pageCount = Math.ceil(items.length / rowsPerPage);
    for (let i = 1; i < pageCount + 1; i++) {
      let btn = PaginationButton(i, items);
      wrapper.appendChild(btn);
    }
  }
  function PaginationButton(page, items) {
    let button = document.createElement("button");
    button.innerText = page;

    if (currentPage == page) button.classList.add("active");
    button.addEventListener("click", function () {
      // clearString();
      currentPage = page;
      displayList(items, rows, currentPage);
      let currentBtn = document.querySelector(".pagenumbers button.active");
      if (currentBtn != null) currentBtn.classList.remove("active");
      button.classList.add("active");
    });

    return button;
  }
  //displayList(listItems,rows,currentPage);
 // setUpPagination(listItems, paginationEl,rows);
  
  document.addEventListener(
    "input",
    function (event) {
      if (event.target.id !== "rowsPage") return;
      //console.log(event);
      if (event.target.value === "10") {
        rows = 10;
        displayList(listItems,rows, currentPage);
        setUpPagination(listItems, paginationEl,rows);
        //PaginationButton();
      }

      if (event.target.value === "20") {
        rows = 20;
        displayList(listItems, rows, currentPage);
        setUpPagination(listItems, paginationEl, rows);
        // PaginationButton();
      }

      if (event.target.value === "50") {
        rows = 50;
        displayList(listItems,rows, currentPage);
        setUpPagination(listItems, paginationEl,rows);
        // PaginationButton();
      }
    },
    false
  );
};
ourRequest.send();

const searchTopic = () => {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputTopic");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
const searchText = () => {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputBody");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
const searchId = () => {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputId");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
//infoBtn.addEventListener('click', createRequest);
 