function page(){
    addTable()
  }
  function RegisterDetails(){
    window.location.href = "stable.html";
  }


let EditId;
let localst =[];
function submit() {
  let object = {};
  object.StudentName = document.getElementById("StudentName").value;
  object.FatherName = document.getElementById("FatherName").value;
  object.Age = document.getElementById("Age").value;
  object.DateofBirth = document.getElementById("DateofBirth").value;
  object.Gender =document.getElementById("Gender").value;
  object.City = document.getElementById("City").value;
  object.Pincode = document.getElementById("Pincode").value;
  object.Address = document.getElementById("Address").value;
  
  

  console.log(localst);
  if (object.StudentName == "") {
    document.getElementById("demo").innerHTML = "Name Requried";
    document.getElementById("StudentName").style.border="2px solid red"
  } else {
    document.getElementById("demo").innerHTML = "";
    document.getElementById("StudentName").style.border="2px solid green"
  }

  if (object.FatherName == "") {
    document.getElementById("demo1").innerHTML =
      "FatherName Requried";
      document.getElementById("FatherName").style.border="2px solid red"
  } else {
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("FatherName").style.border="2px solid green"
  }

  if (object.Age == "") {
    document.getElementById("demo2").innerHTML = "Age Requried";
    document.getElementById("Age").style.border="2px solid red"
  } else {
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("Age").style.border="2px solid green"
  }

  if (object.City == "") {
    document.getElementById("demo5").innerHTML = "City Requried";
    document.getElementById("City").style.border="2px solid red"
  } else {
    document.getElementById("demo5").innerHTML = "";
    document.getElementById("City").style.border="2px solid green"
  }

  if (object.Address == "") {
    document.getElementById("demo7").innerHTML = "Address  Requried";
    document.getElementById("Address").style.border="2px solid red"
  } else {
    document.getElementById("demo7").innerHTML = "";
    document.getElementById("Address").style.border="2px solid green"
  }

  if (object.DateofBirth == "") {
    document.getElementById("demo3").innerHTML =
      "Date of Birth Requried";
      document.getElementById("DateofBirth").style.border="2px solid red"
  } else {
    document.getElementById("demo3").innerHTML = "";
    document.getElementById("DateofBirth").style.border="2px solid green"
  }

  if (object.Pincode == "") {
    document.getElementById("demo6").innerHTML = "Pincode Requried";
    document.getElementById("Pincode").style.border="2px solid red"
  } else {
    document.getElementById("demo6").innerHTML = "";
    document.getElementById("Pincode").style.border="2px solid green"
  }

  if (object.Gender == "") {
    document.getElementById("demo4").innerHTML = "Gender Requried";
    document.getElementById("Gender").style.border="2px solid red"
  } else {
    document.getElementById("demo4").innerHTML = "";
    document.getElementById("Gender").style.border="2px solid green"
  }

  if (
    object.StudentName == "" ||
    object.FatherName == "" ||
    object.Age == "" ||
    object.DateofBirth == "" ||
    object.Gender == "" ||
    object.City == "" ||
    object.Pincode == "" ||
    object.Address == ""
  ) {
    return false;
  } 

  if (EditId != undefined) {
    localst[EditId].StudentName = object.StudentName;
    localst[EditId].FatherName = object.FatherName;
    localst[EditId].Age = object.Age;
    localst[EditId].DateofBirth = object.DateofBirth;
    localst[EditId].Gender = object.Gender;
    localst[EditId].City = object.City;
    localst[EditId].Pincode = object.Pincode;
    localst[EditId].Address = object.Address;
    
  } else {
    localst.push(object);
  }
  localStorage.setItem("array", JSON.stringify(localst));
  addTable();
  document.getElementById("StudentName").value = "";
  document.getElementById("FatherName").value = "";
  document.getElementById("Age").value = ""; 
  document.getElementById("Gender").value = "";
  document.getElementById("DateofBirth").value = "";
  document.getElementById("City").value = "";
  document.getElementById("Pincode").value = "";
  document.getElementById("Address").value = "";
 
}
function addTable() {
 
    var table = "";
  //   localst = JSON.parse(localStorage.getItem("array"));
   
  
    for (i = 0; i < localst.length; i++) {
      table += "<tr>";
      table += "<td>" + localst[i].StudentName + "</td>";
      table += "<td>" + localst[i].FatherName + "</td>";
      table += "<td>" + localst[i].Age + "</td>";
      table += "<td>" + localst[i].DateofBirth + "</td>";
      table += "<td>" + localst[i].Gender + "</td>";
      table += "<td>" + localst[i].City + "</td>";
      table += "<td>" + localst[i].Pincode + "</td>";
      table += "<td>" + localst[i].Address + "</td>";
     
     
     
      table +=
        '<td><button class="btn btn-primary mr-3" style="" onclick="Edit(' +
        i +
        ')">Edit</button><button class="btn btn-danger"  onclick="Delete(' +
        i +
        ')">Delete</button></td>';
      table += "</tr>";
    }
    document.getElementById("second").innerHTML = table;
  
    
  }
  
  function Edit(id) {
    EditId =id;
    console.log(id);
  
    console.log(localst[id]);
  
    document.getElementById("StudentName").value = localst[id].StudentName;
    document.getElementById("FatherName").value = localst[id].FatherName;
    document.getElementById("Age").value = localst[id].Age;
    document.getElementById("DateofBirth").value = localst[id].DateofBirth;
    document.getElementById("Gender").value = localst[id].Gender;
    document.getElementById("City").value = localst[id].City;
    document.getElementById("Pincode").value = localst[id].Pincode;
    document.getElementById("Address").value = localst[id].Address;
  
    
  }
  
  function Delete(id) {
    console.log(id);
    localst.splice(id, 1);
  //   localStorage.setItem("array", JSON.stringify(localst));
    addTable();
  }
