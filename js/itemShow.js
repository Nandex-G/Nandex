let item_list = document.querySelector('.item_list')

let item_previous = document.querySelector('.show_item_previous')    
let item_next = document.querySelector('.show_item_next')

let showNow = item_list.firstElementChild

buttom_check()

item_previous.addEventListener('click' , () => {
    ItemGoPrevious()
    buttom_check()
})

item_next.addEventListener('click' , () => {
    ItemGoNext()
    buttom_check()
})


window.addEventListener('keydown' , (e) => {
    if (e.key == 'd') {
        ItemGoNext()
        buttom_check()
    } else if (e.key == 'a') {
        ItemGoPrevious()
        buttom_check()
    }      
})

function ItemGoNext() {
    if (showNow != item_list.lastElementChild) {
        item_next.classList.add('move_N')
        setTimeout(() => item_next.classList.remove('move_N') , 100);

        showNow.classList.remove('active')
        showNow.nextElementSibling.classList.add('active')
        showNow = showNow.nextElementSibling

        document.querySelector('.item_display').nextElementSibling.classList.add('item_display')
        document.querySelector('.item_display').classList.remove('item_display')
        

    } else {
        item_next.style.translate = '-5px'
        setTimeout(() => {
            item_next.style.translate = '5px'
        }, 60);
        setTimeout(() => {
            item_next.style.translate = null
        }, 150);
    }
}

function ItemGoPrevious() {
    if (showNow != item_list.firstElementChild) {
        
        item_previous.classList.add('move_P')
        setTimeout(() => item_previous.classList.remove('move_P') , 100);

        showNow.classList.remove('active')
        showNow.previousElementSibling.classList.add('active')
        showNow = showNow.previousElementSibling

        document.querySelector('.item_display').previousElementSibling.classList.add('item_display')
        document.querySelector('.item_display').nextElementSibling.classList.remove('item_display')

    } else {
        item_previous.style.translate = '5px'
        setTimeout(() => {
            item_previous.style.translate = '-5px'
        }, 60);
        setTimeout(() => {
            item_previous.style.translate = null
        }, 150);
    }
}

function buttom_check() {
    if (showNow == item_list.firstElementChild) {
        item_previous.style.opacity = .5
    } else {
        item_previous.style.opacity = 1
    }
    
    if (showNow == item_list.lastElementChild) {
        item_next.style.opacity = .5
    } else {
        item_next.style.opacity = 1
    }
}


