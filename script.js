var message = document.querySelector("h5");
var add = document.querySelector("#add")
var check = 0
// var remove = document.querySelector("#remove");
add.addEventListener("click",function(){
    if(check==0){
    message.innerHTML = "Friends"
    message.style.color="green"
    add.innerHTML = "Remove Friend"
    check=1
}
else{
    message.innerHTML = "Strangers"
    message.style.color="red"
    add.innerHTML = "Add Friend"

    check=0
}
})
// remove.addEventListener("click",function(){
//     message.innerHTML = "Stranger"
//     message.style.color = "red"
// })