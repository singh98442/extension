// function savelead(){
//     // console.log("hello")
// }

const button_btn1 = document.getElementById("input-btn")
const inputEl =document.getElementById("input-el")
let myleads = []
// let listitems = ""
const ulEl = document.querySelector("#ul-el")

button_btn1.addEventListener("click", function(){
    // console.log("hfuygiugiyu")
    myleads.push(inputEl.value)
    inputEl.value=""
    // clearThis()
    // console.log(myleads)
    // for(let i = 0; i < myleads.length; i++){
       
    // //    ulEl.innerHTML += "<li>" + myleads[i] + "</li"
    // // let li = document.createElement("li")
    // // li.innerText = myleads[i]
    // // ulEl.append(li)
    // listitems += "<li>" + myleads[i] + "</li" + "<br>"
    // ulEl.innerHTML = listitems
       
    // }
    renderLeads()
    
    
    
    
})

function renderLeads(){
    let listitems = ""
    for(let i = 0; i < myleads.length; i++){
        // listitems += "<li><a target='_blank' href='" + myleads[i] +"'>" + myleads[i] + "</a></li>" + "<br>"
        listitems += "<li><a target='_blank' href='" + myleads[i] +"'>" + myleads[i] + "</a></li>" + "<br>"
         

    }
    ulEl.innerHTML = listitems
    

}

// function clearThis() {
//     inputEl.reset();
// }