

const form = document.querySelector("form"),
nextBtn = form.querySelector(".nextBtn"),
backBtn = form.querySelector(".backBtn"),
allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
allInput.forEach(input => {
if(input.value != ""){
    form.classList.add('secActive');
}else{
    form.classList.remove('secActive');
}
})
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));



// how to store data in local storage using javascript?
// var  = { 
//     'one': 1, 
//     'two': 2, 
//     'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));

var details = {};
function setDetails(name,value){
    details = {...details,[name]: value};
    console.log(details);
}

function storeInLocalStorage(){
    console.log(details);
    localStorage.setItem("AllDetails", JSON.stringify(details));
}







