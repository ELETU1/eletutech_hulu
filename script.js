const modal = document.querySelector('.model')
const login = document.querySelector('.login-btn')
const close = document.querySelector('.close')

function openModel(){
    modal.style.display = 'block'
}

function closeModel(){
    modal.style.display = 'none'
}

function outsideClick(e){
    if(e.target == modal){
        closeModel()
    }
}


login.addEventListener('click', openModel)
close.addEventListener('click', closeModel)
window.addEventListener('click', outsideClick)

