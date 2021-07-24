let modalBtn = document.querySelector('.modal-btn');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal-close');
let snackBarBtn = document.querySelector('.snack-btn');
let snackBar = document.querySelector('.snackBar');
let snackbarClose = document.querySelector('.snackbar-close');

modalBtn.addEventListener("click", function(){
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener("click", function(){
    modalBg.classList.remove('bg-active');
})

snackBarBtn.addEventListener("click", function(){
    snackBar.classList.add('snack-active');
});

snackbarClose.addEventListener("click", function(){
    snackBar.classList.remove('snack-active');
})

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".component-list");

    burger.addEventListener("click", ()=> {
        nav.classList.toggle("component-list-active");
    }); 

}

navSlide();


