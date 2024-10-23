class Slider {
    slideIndex = 1;
    constructor(options) {
        this.options = options
        this.initialStuff()

        this.createNextAndPrevBtns()
        this.createDotsBtns()
        this.slideShow(1)
        this.autoSlide()
    }


    initialStuff () {
        let {el : element , slideClass , auto} = this.options

        if(! element ) throw Error('The (Slide Element) is not exist.')
        if(! slideClass ) throw Error('The (Silde Class) is not exist.')
        Number.isInteger(auto) ? this.auto = auto : this.auto = false

        this.sliders = [...element.children].filter( el => el.classList.contains(slideClass) )        
    }

    createNextAndPrevBtns () {
        let {el : element } = this.options

        element.insertAdjacentHTML("beforeend" , `
            <a class="prev-btn">&#10094</a>
            <a class="next-btn">&#10095</a>
        ` )
        
        element.querySelector('.next-btn').addEventListener('click' , () => this.nextAndPrevButtons(this.slideIndex += 1))
        element.querySelector('.prev-btn').addEventListener('click' , () => this.nextAndPrevButtons(this.slideIndex -= 1))

        // window.addEventListener('keydown' , (e) => {
        //     if (e.key == 'ArrowRight') {
        //         this.nextAndPrevButtons(this.slideIndex += 1)
        //     } else if (e.key == 'ArrowLeft') {
        //         this.nextAndPrevButtons(this.slideIndex -= 1)
        //     }      
        // })
    }

    nextAndPrevButtons(number) {
        this.resetInterval()
        this.slideShow(number)
    }

    currentSlide (n) {
        this.resetInterval()
        this.slideShow(this.slideIndex = n)
    }

    createDotsBtns() {
        let { el : element} = this.options
        
        let dotElement = [...this.sliders].map((slide , index) => `<span class="slidersDot" data-slideNum="${index+1}"></span>`)
        
        let dots = document.createElement('div')
        dots.classList.add('dots')
        dots.innerHTML = dotElement.join('')

        element.after(dots)

        this.dots = dots.querySelectorAll('.slidersDot')
        this.dots.forEach( el => el.addEventListener('click' , e => this.currentSlide(parseInt(e.target.dataset.slidenum))))       
        
    }

    slideShow(number) {
        let { el : element , slideClass , currentSlide } = this.options

        if(number > this.sliders.length) this.slideIndex = 1
        if(number < 1) this.slideIndex = this.sliders.length
        
        element.querySelector(`.${slideClass}.slideImg-active`).style.opacity = .5
        element.querySelector(`.${slideClass}.slideImg-active`).classList.remove('slideImg-active')
        this.dots.forEach( el => el.classList.remove('dot_active'))
        
        this.sliders[this.slideIndex-1].classList.add('slideImg-active')
        setTimeout(() => {
            this.sliders[this.slideIndex-1].style.opacity = 1
        }, 20);
        this.dots[this.slideIndex-1].classList.add('dot_active')

        if (currentSlide) currentSlide(this.sliders[this.slideIndex-1])
        
    }

    autoSlide() {
        if(this.auto != 0) {
            this.intervalID = setInterval(() => this.slideShow(this.slideIndex += 1) , this.auto);
        }
    }

    resetInterval() {
        clearInterval(this.opaIntevelID)
        clearInterval(this.intervalID)
        this.autoSlide()
    }
}

