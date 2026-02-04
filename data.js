let tr = document.querySelectorAll(".tr");
let delet = document.getElementsByClassName('delet')
for(let i = 0; i< delet.length; i++){
    delet[i].addEventListener('click',() =>{
        if(confirm("Are You Sure Want To Delete This Row ?...")){
            tr[i].style.display = "none";
        }
    })
};