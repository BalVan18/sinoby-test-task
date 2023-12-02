let input = document.querySelector(".modal-form-input")
let label = document.querySelector(".modal-form-label")

input.addEventListener("focusin", () => {
    label.classList.add("active")
    label.classList.remove("disabled")
})
input.addEventListener("focusout", () => {
    if (input.value == '') {
        label.classList.remove("active") 
    } else {
        label.classList.add("disabled")
    }
    
})

$('.btn--modal').click(function(){
	$.fancybox.open({
		src: '#hidden',
		type: 'inline'
	});
});