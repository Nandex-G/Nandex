//  Navigation JS

let nav_items = document.querySelectorAll('.nav_items span')
let nav_content = document.querySelectorAll('.nav_contents li')

nav_items.forEach((item)=> {
    item.addEventListener('click' , function (e) {
        e.preventDefault()
        
        document.querySelector('.nav_items span.nav_item-selected').classList.remove('nav_item-selected')
        this.classList.add('nav_item-selected')

        let dataSet = this.getAttribute('data-setContent')
        
        document.querySelector('.nav_contents li.nav_content-selected').classList.remove('nav_content-selected')
        document.querySelector(`.nav_contents li[data-setContent="${dataSet}"]`).classList.add('nav_content-selected')
    })
    
})