function interagirImg(event) {
    if (event.target.style.display === "block" || event.target.style.display === "") {
        event.target.style.display = "none";
    }
    else{
        event.target.style.display = "block";
    }
}

function showAll(){
    let images = document.querySelectorAll('img');
    images.forEach(image => {
        image.style.display = "block";
    });
}

function hideAll(){
    let images = document.querySelectorAll('img');
    images.forEach(image => {
        image.style.display = "none";
    });
}²²

let images = document.querySelectorAll('.imageVisee');
images.forEach(image => {
    image.addEventListener('dblclick',interagirImg);
});
let btn_ShowAll = document.querySelector('#btn_ShowAll')
btn_ShowAll.addEventListener('click', showAll)
let btn_HideAll = document.querySelector('#btn_HideAll')
btn_HideAll.addEventListener('click', hideAll)

