class FlashCardMaker{
    cardBack = false
    cardNum = 0
    pageNum = 0
    currentPage = 1
    canSlideNext = true
    canSlidePrev = true
    slideCondition = false
    lastTransform = 0

    constructor(option) {
        this.addCardSaver(option)
        this.forwardAndBackwardMaker(option)
        this.resetEverything(option)
    }


    cardMaker(option) {
        let {el : element , list , codeVerb , codeOther , codeNoun} = option
        list.forEach(item => {
            this.cardNum += 1
            switch (item.type) {
                case 'Verb':
                    element.innerHTML += codeVerb(item)
                break;
                case 'Noun':
                    element.innerHTML += codeNoun(item)
                break;
                case 'Adverb':
                case 'Adjective':
                    element.innerHTML += codeOther(item)
                break;
            }
            if (this.cardNum % 4 === 0) {
                let MarginCard = document.querySelector(`[data-id="${this.cardNum}"]`)
                MarginCard.style.margin = ' 0 21px 0 15px'
                this.pageNum += 1
                this.slideCondition = true
            } else if (!this.cardNum % 4 === 0) {
                this.slideCondition = false
            }
        });
    }

    AddRotate(item) {
        let rotate = false
        item.addEventListener('click' , (e) => {                       
            if (e.target.classList.contains('cardBack')) {
                e.target.previousElementSibling.style.zIndex = 1;
                e.target.style.zIndex = 0;
                e.target.previousElementSibling.style.transform = 'rotateY(0)';
                e.target.style.transform = 'rotateY(180deg)'; 
                rotate = true
            }         
        })
        item.addEventListener('mouseleave' , (e) => {    
            if (rotate) {
                setTimeout(() => {
                    e.target.lastElementChild.previousElementSibling.style.zIndex = 0;
                    e.target.lastElementChild.style.zIndex = 1;
                    e.target.lastElementChild.previousElementSibling.style.transform = 'rotateY(180deg)';
                    e.target.lastElementChild.style.transform = 'rotateY(0)';
                    rotate = false
                }, 3000);  
            }  
        })
    }

    AddID(option) {
        let {list} = option
        list.forEach((i , index) => i.id = index + 1)     
    }

    forwardAndBackwardMaker(options) {
        let {el : element , keys , pageElement , lastKeys} = options
        keys[0].addEventListener('click' , () => {
            if (this.slideCondition ? this.currentPage < this.pageNum : this.currentPage < this.pageNum + 1 && this.canSlideNext) {
                
                element.style.translate = `-${this.lastTransform += element.offsetWidth}px`
                this.currentPage += 1
                this.opacityCheck(keys , lastKeys) 
                pageElement.innerHTML = `${this.currentPage } / ${this.slideCondition ? this.pageNum : this.pageNum +1}`
                
                setTimeout(() => {
                    keys[0].style.translate = '20px'
                }, 100);
                setTimeout(() => {
                    keys[0].style.translate = '0px'
                }, 200);  
            } else if (!this.canSlideNext) {
                setTimeout(() => {
                    keys[0].style.translate = '-15px'
                }, 100);
                setTimeout(() => {
                    keys[0].style.translate = '15px'
                }, 200);
                setTimeout(() => {
                    keys[0].style.translate = '0px'
                }, 340); 
            }
        }) 
        keys[1].addEventListener('click' , () => {
            if (this.lastTransform != 0 && this.canSlidePrev) {
                console.log(this.lastTransform);
                element.style.translate = `-${this.lastTransform -= element.offsetWidth}px`
                this.currentPage -= 1
                this.opacityCheck(keys , lastKeys)
                pageElement.innerHTML = `${this.currentPage} / ${this.slideCondition ? this.pageNum : this.pageNum +1}`

                setTimeout(() => {
                    keys[1].style.translate = '-20px'
                }, 100);
                setTimeout(() => {
                    keys[1].style.translate = '0px'
                }, 200);   
            } else if (!this.canSlidePrev) {
                setTimeout(() => {
                    keys[1].style.translate = '15px'
                }, 100);
                setTimeout(() => {
                    keys[1].style.translate = '-15px'
                }, 200);
                setTimeout(() => {
                    keys[1].style.translate = '0px'
                }, 340);                
            }
        }) 
    }

    opacityCheck(keys , lastKeys) {
        if (this.lastTransform != 0) {
            this.canSlidePrev = true
            keys[1].style.opacity = 1
            lastKeys[1].style.opacity = 1
        } else {
            this.canSlidePrev = false
            keys[1].style.opacity = .5
            lastKeys[1].style.opacity = .5
        }
        if (this.slideCondition ? this.currentPage < this.pageNum : this.currentPage < this.pageNum + 1) {
            this.canSlideNext = true
            keys[0].style.opacity = 1
            lastKeys[0].style.opacity = 1
        } else {
            this.canSlideNext = false
            keys[0].style.opacity = .5
            lastKeys[0].style.opacity = .5
        }
    }

    LastKeysMaker(options) {
        let {el : element , lastKeys , pageElement , keys} = options
        lastKeys[0].addEventListener('click' ,() => {
                this.lastTransform = element.offsetWidth * (this.slideCondition ? this.pageNum -1 : this.pageNum)
                element.style.translate = `-${this.lastTransform}px`
                this.currentPage = (this.slideCondition ? this.pageNum : this.pageNum +1)
                pageElement.innerHTML = `${this.currentPage } / ${this.slideCondition ? this.pageNum : this.pageNum +1}`
                this.opacityCheck(keys , lastKeys)
                element.style.transition = '4s'
                setTimeout(() => {
                    element.style.transition = null
                }, 1);
        })
        lastKeys[1].addEventListener('click' ,() => {
            this.lastTransform = 0
            element.style.translate = 0
            this.currentPage = 1
            pageElement.innerHTML = `${this.currentPage } / ${this.slideCondition ? this.pageNum : this.pageNum +1}`
            this.opacityCheck(keys , lastKeys)
            element.style.transition = '4s'
            setTimeout(() => {
                element.style.transition = null
            }, 1);
        })
    }

    keysHover(options) {
        let {keys , lastKeys} = options
        keys[0].addEventListener('mouseover' , () => {
            keys[0].style.transform = 'translate(16px , -50%)'
            lastKeys[0].style.transform = 'translate(11px , -42%)'
        })
        keys[0].addEventListener('mouseout' , () => {
            keys[0].style.transform = 'translate(61px , -50%)'
            lastKeys[0].style.transform = 'translate(56px , -42%)'
        })
        lastKeys[0].addEventListener('mouseover' , () => {
            keys[0].style.transform = 'translate(16px , -50%)'
            lastKeys[0].style.transform = 'translate(11px , -42%)'
        })
        lastKeys[0].addEventListener('mouseout' , () => {
            keys[0].style.transform = 'translate(61px , -50%)'
            lastKeys[0].style.transform = 'translate(56px , -42%)'
        })

        keys[1].addEventListener('mouseover' , () => {
            keys[1].style.transform = 'translate(-16px , -50%)'
            lastKeys[1].style.transform = 'translate(-11px , -42%)'
        })
        keys[1].addEventListener('mouseout' , () => {
            keys[1].style.transform = 'translate(-61px , -50%)'
            lastKeys[1].style.transform = 'translate(-56px , -42%)'
        })
        lastKeys[1].addEventListener('mouseover' , () => {
            keys[1].style.transform = 'translate(-16px , -50%)'
            lastKeys[1].style.transform = 'translate(-11px , -42%)'
        })
        lastKeys[1].addEventListener('mouseout' , () => {
            keys[1].style.transform = 'translate(-61px , -50%)'
            lastKeys[1].style.transform = 'translate(-56px , -42%)'
        })
    }

    searchMaker(options) {
        let {searchElements , list} = options
        let open = false
        let searchShow = true
        searchElements[3].addEventListener('click' , () => {
            SearchMakerFunc()
        })
        window.addEventListener('keydown' , (e) => {
            if (e.code == 'Escape') {
                if (open && searchShow) {
                    searchElements[3].style.transform = null
                    searchElements[3].style.padding = null
                    searchElements[3].style.borderRadius = null
                    setTimeout(() => {
                        searchElements[1].style.width = '1rem'
                        searchElements[3].firstElementChild.nextElementSibling.style.transition = null
                        searchElements[3].firstElementChild.nextElementSibling.style.opacity = null
                        searchElements[3].firstElementChild.style.margin = null
                        searchElements[3].lastElementChild.style.margin = null
                    }, 500);
                    setTimeout(() => {
                        searchElements[0].style.top = null
                        searchElements[0].style.width = null
                        searchElements[1].value = ''
                        searchElements[2].innerHTML = 'Cards will show here'
                    }, 800); 
                    setTimeout(() => {
                        searchElements[1].value = ''
                        searchElements[2].innerHTML = 'Cards will show here'
                    }, 2000); 
                    setTimeout(() => {
                        open = false
                        searchShow = true
                    }, 1800);
                }
            }
        })

        list.forEach(item => {
            searchElements[4].innerHTML +=  `<option value="${item.word}">`
        })

        function SearchMakerFunc() {
            if (!open && searchShow) {
                searchShow = false
                searchElements[0].style.top = 0
                searchElements[3].style.borderRadius = '2rem 2rem 0 0'
                setTimeout(() => {
                    searchElements[0].style.width = '100%'                    
                }, 650);
                setTimeout(() => {
                    searchElements[1].style.width = '500px'
                    searchElements[3].firstElementChild.nextElementSibling.style.transition = '300ms'
                    searchElements[3].firstElementChild.nextElementSibling.style.opacity = 0
                    searchElements[3].firstElementChild.style.margin = '0 -38.5px 0 0'
                    searchElements[3].lastElementChild.style.margin = '0 0 0 -38.5px'
                }, 800);
                setTimeout(() => {
                    searchElements[3].style.transform = 'rotateX(180deg)'
                    searchElements[3].style.padding = '1rem 10rem'
                    searchElements[3].style.borderRadius = '0 0 2rem 2rem'
                }, 1100);
                setTimeout(() => {
                    open = true
                    searchShow = true
                }, 1800);
            } else if (open && searchShow) {
                searchElements[3].style.transform = null
                searchElements[3].style.padding = null
                searchElements[3].style.borderRadius = null
                setTimeout(() => {
                    searchElements[1].style.width = '1rem'
                    searchElements[3].firstElementChild.nextElementSibling.style.transition = null
                    searchElements[3].firstElementChild.nextElementSibling.style.opacity = null
                    searchElements[3].firstElementChild.style.margin = null
                    searchElements[3].lastElementChild.style.margin = null
                }, 500);
                setTimeout(() => {
                    searchElements[0].style.top = null
                    searchElements[0].style.width = null
                    searchElements[1].value = ''
                    searchElements[2].innerHTML = 'Cards will show here'
                }, 800); 
                setTimeout(() => {
                    searchElements[1].value = ''
                    searchElements[2].innerHTML = 'Cards will show here'
                }, 2000); 
                setTimeout(() => {
                    open = false
                    searchShow = true
                }, 1800);
            }
        }
    }

    searchCardShower(options) {
        let {searchElements , list , codeVerb , codeOther} = options
        let searchcardShowNum = 0
        let errorTimes = 0
        searchElements[1].addEventListener('input' , (event) => {
            searchElements[2].innerHTML = '' 
            searchcardShowNum = 0
            errorTimes = 0
            list.forEach(item => {
                if (item.word.toLowerCase().startsWith(event.target.value.toLowerCase()) && event.target.value != '' && searchcardShowNum < 4) {
                    searchcardShowNum += 1
                    // if (item.type == 'verb') {
                    //     searchElements[2].innerHTML += codeVerb(item)
                    // } else {
                    //     searchElements[2].innerHTML += codeOther(item)
                    // }
                    switch (item.type) {
                        case 'Verb':
                            searchElements[2].innerHTML += codeVerb(item)
                        break;
                        case 'Noun':
                            searchElements[2].innerHTML += codeNoun(item)
                        break;
                        case 'Adverb':
                        case 'Adjective':
                            searchElements[2].innerHTML += codeOther(item)
                        break;
                    }
                    for (let item of searchElements[2].children) {
                        this.AddRotate(item)
                    }
                } else if (event.target.value == '') {
                    searchElements[2].innerHTML = 'Cards will show here'
                } else if (!item.word.toLowerCase().startsWith(event.target.value)) {
                    errorTimes += 1                  
                    if (errorTimes == list.length) {
                        searchElements[2].innerHTML += '<span class="nothing_found">Nothing found</span>'
                    }
                }
            })
        })
        
    }

    addCardShowerMaker(options) {
        let {addCard} = options
        addCard.showElements[0].addEventListener('click' , () => {
            addCard.cardElements[0].style.top = 0
        })
        
        addCard.showElements[1].addEventListener('click' , () => {
            addCard.cardElements[0].querySelectorAll('input').forEach(item => {
                item.value = ''
            })
            addCard.cardElements[0].style.top = '100%'
        })
        window.addEventListener('keydown' , (e) => {
            if (e.code == 'Escape') {
                addCard.cardElements[0].querySelectorAll('input').forEach(item => {
                    item.value = ''
                })
                addCard.cardElements[0].style.top = '100%'
            }
        })
    }
        
    addCardSaver(options) {
        let {addCard , list , el : element , searchElements} = options
        document.getElementById(addCard.cardElements[1].id).addEventListener('submit', (event) => {
            event.preventDefault(); 
            let canAdd = true
            let word = document.getElementById('add_word');
            let meaning = document.getElementById('add_meaning');
            let type = document.querySelector('input[name="cardType"]:checked');
            let past = document.getElementById('add_past');
            let pp = document.getElementById('add_PP');
            let plural = document.getElementById('AddPluralForm')
            let synonyms = document.getElementById('add_synonyms');
            
            list.forEach(item => {                
                if (item.word.toLowerCase() == word.value.toLowerCase()) {
                    canAdd = false                    
                }                
            })

            if(canAdd) {
                if (type.dataset.contenttext == 'Verb') {
                    list.push({id : 0 , word : word.value , past : past.value , pp : pp.value , menaing : meaning.value , type : type.dataset.contenttext , synonyms : synonyms.value ? synonyms.value : 'Not_entered'})
                } else if (type.dataset.contenttext == 'Noun') {
                    list.push({id : 0 , word : word.value , plural : plural.querySelector('input').value ? plural.querySelector('input').value : 'Uncountable' , menaing : meaning.value , type : type.dataset.contenttext , synonyms : synonyms.value ? synonyms.value : 'Not_entered'}) 
                } else {
                    list.push({id : 0 , word : word.value , menaing : meaning.value , type : type.dataset.contenttext , synonyms : synonyms.value ? synonyms.value : 'Not_entered'})       
                }
                addCard.cardElements[2].style.right = 0
                element.innerHTML = null
                searchElements[4].innerHTML = null
                localStorage.setItem('wordsLIST' , JSON.stringify(list))
                this.resetEverything(options)
                
                
                setTimeout(() => {

                    type.parentElement.classList.remove('AddType_noun')  

                    past.required = false
                    pp.required = false
                    plural.querySelector('input').required = false

                    plural.style.display = 'none' 
                    past.parentElement.parentElement.parentElement.style.display = 'none'  

                    type.parentElement.classList.add('AddType_others')

                        addCard.cardElements[1].reset()
                        addCard.cardElements[2].style.right = '-100%'
                }, 1200);
                setTimeout(() => {
                    addCard.cardElements[2].style.transition = '1ms'
                    addCard.cardElements[2].style.right = '100%'
                    setTimeout(() => {
                        addCard.cardElements[2].style.transition = null
                    }, 1000);
                }, 2200);
            } else if(!canAdd) {
                console.log(canAdd);
                
                alert('Card already exists')
            }  
        });
        
            let cardChanger = document.querySelectorAll('input[name="cardType"]')        

            cardChanger.forEach(item => {                
                item.addEventListener('click' , (e) => {    
                    let meaning = document.getElementById('add_meaning');
                    let type = document.querySelector('input[name="cardType"]:checked');
                    let past = document.getElementById('add_past');
                    let pp = document.getElementById('add_PP');
                    let plural = document.getElementById('AddPluralForm')               
                    switch (e.target.dataset.contenttext) {
                        case 'Verb':
                            meaning.parentElement.classList.remove('AddMean_noun')
                            type.parentElement.classList.remove('AddType_noun')

                            past.required = true
                            pp.required = true
                            plural.querySelector('input').required = false

                            past.parentElement.parentElement.parentElement.style.display = 'flex' 
                            plural.style.display = 'none' 
     
                            type.parentElement.classList.remove('AddType_others')
                        break;
    
                        case 'Noun':
                            meaning.parentElement.classList.add('AddMean_noun')

                            past.required = false
                            pp.required = false

                            past.parentElement.parentElement.parentElement.style.display = 'none'    
                            plural.style.display = 'flex'

                            type.parentElement.classList.add('AddType_noun')   
                            type.parentElement.classList.remove('AddType_others')
                        break;
    
                        case 'Adjective': 
                        case 'Adverb':
                            type.parentElement.classList.remove('AddType_noun')  

                            past.required = false
                            pp.required = false
                            plural.querySelector('input').required = false

                            plural.style.display = 'none' 
                            past.parentElement.parentElement.parentElement.style.display = 'none'  

                            type.parentElement.classList.add('AddType_others')
                        break;
    
                    }
                })
            })
    }

    cardsUpAndDownlaod(options) {
        let {upAndDownload} = options

        upAndDownload[0].addEventListener('click',() => {
            // const jsData = `let words = ${localStorage.getItem('wordsLIST')};`;
            const blob = new Blob([localStorage.getItem('wordsLIST')], { type: 'application/javascript;charset=utf-8' });
            console.log(blob);
            
            saveAs(blob, 'WordsList.js');
        });

        upAndDownload[1].addEventListener('change',(e) => {          
            const file = e.target.files[0];
            if (file) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    const fileContent = e.target.result;
                    localStorage.setItem('wordsLIST' , fileContent)
                    location.reload()
                };
                reader.readAsText(file);

            }
        });
    }

    resetEverything(option) {
        console.log('a' , option.list);
        this.cardBack = false
        this.cardNum = 0
        this.pageNum = 0
        this.canSlideNext = true
        this.canSlidePrev = true
        this.slideCondition = false
        this.searchMaker(option)
        this.searchCardShower(option)
        this.AddID(option)
        this.cardMaker(option)
        for (let item of option.el.children) {
            this.AddRotate(item)
        }
        this.LastKeysMaker(option)
        this.opacityCheck(option.keys , option.lastKeys)
        this.keysHover(option)
        this.addCardShowerMaker(option)
        option.pageElement.innerHTML = `${this.currentPage} / ${this.slideCondition ? this.pageNum : this.pageNum +1}`
        this.cardsUpAndDownlaod(option)
    }

}