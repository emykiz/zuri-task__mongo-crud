const btnModal=document.querySelector(".modal-btn")
const closeBtn=document.querySelector(".close-btn")
const modalShow=document.querySelector(".modal-show")

btnModal.addEventListener("click", function(){
   modalShow.classList.add('modal-new')

})
closeBtn.addEventListener("click", function(){
    modalShow.classList.remove('modal-new')
})