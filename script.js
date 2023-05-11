let userInput = document.getElementById("todoList");
let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
let button = document.getElementById("Add");









button.addEventListener("click", CustomClick)

function CustomClick(e){

    e.preventDefault()

    console.log(select2.value )
    
    if(userInput.value === ""){
        alert("Enter the list name please")
    }
    else if ( select1.value=="urgent" && select2.value=="important"){
        let ul1 = document.getElementById("urg-imp")
       let li = document.createElement("li")
        li.innerHTML= userInput.value;
        userInput.value="";
        ul1.appendChild(li) 
    }
    else if ( select1.value=="notUrgent" && select2.value=="important"){
        let ul2 = document.getElementById("notUrg-imp")
       let li = document.createElement("li")
        li.innerHTML= userInput.value;
        userInput.value="";
        ul2.appendChild(li) 
    }
    else if ( select1.value=="urgent" && select2.value=="notImportant"){
        let ul3 = document.getElementById("notImp-urg")
       let li = document.createElement("li")
        li.innerHTML= userInput.value;
        userInput.value="";
        ul3.appendChild(li) 
        
    }

    else {
        let ul4 = document.getElementById("notImp-notUrg")
       let li = document.createElement("li")
        li.innerHTML= userInput.value;
        userInput.value="";
        ul4.appendChild(li) 
    }
    


}

let button2 = document.getElementById("final-result")
button2.addEventListener("click",CustomonClick)


let ul1 = document.getElementById("urg-imp");
let ul2 = document.getElementById("notUrg-imp");
let ul3 = document.getElementById("notImp-urg");
let ul4 = document.getElementById("notImp-notUrg");

 
let mainLI = document.getElementsByTagName("li")
let li1 = ul1.getElementsByTagName("li")
let li2 = ul2.getElementsByTagName("li")
let li3 = ul3.getElementsByTagName("li")
let li4 = ul4.getElementsByTagName("li")


function CustomonClick(e){
      e.preventDefault
    if(mainLI.value===""){
        alert("please make sure you have...")
    }
    else{ 
        let table = document.getElementById("table")
       
         let row = table.insertRow(1);
        for(let i of li1){
       let cell1 = row.insertCell(0);
        cell1.innerHTML= i.textContent
      }
      for(let x of li2){
        let cell2 = row.insertCell(1);
         cell2.innerHTML= x.textContent
       }
       for(let y of li3){
        let cell3 = row.insertCell(2);
         cell3.innerHTML= y.textContent
       }
       for(let z of li4){
        let cell4 = row.insertCell(3);
         cell4.innerHTML= z.textContent
       }
      
    }
}