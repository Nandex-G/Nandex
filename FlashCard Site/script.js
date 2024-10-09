let words
if (!localStorage.getItem('wordsLIST')) {
    words = [
        // {id : 0 , word : 'go' , past : 'went' , pp : 'gone' , menaing : 'رفتن' , type : 'Verb' , synonyms : 'Not entered'},
        // {id : 0 , word : 'person' , plural : 'people' , menaing : 'فرد' , type : 'Noun' , synonyms : 'Not entered'},
        // {id : 0 , word : 'well' , menaing : 'به خوبی' , type : 'Adverb' , synonyms : 'Not entered'},
        // {id : 0 , word : 'beautiful' , menaing : 'زیبا' , type : 'Adjective' , synonyms : 'Not entered'},        
    ]
} else {
    let preWord = localStorage.getItem('wordsLIST')
    words = JSON.parse(preWord)
}


let element = document.querySelector('.goSlide')
let forwardKey = document.querySelector('.forwardKey')
let backwardKey = document.querySelector('.backwardKey')
let lastForwardKey = document.querySelector('.LASTforwardKey')
let lastBackwardKey = document.querySelector('.LASTbackwardKey')
let pageShow = document.getElementById('pageShow')

let searchElement = document.querySelector('.search')
let searchInput = document.querySelector('.search_input')
let searchContent = document.querySelector('.search_content')
let searchArrow = document.querySelector('.search_arrow')
let searchDatalist = document.getElementById('search_allItemsList')

let addCardOpenButton = document.querySelector('.addCard_button')
let addCardCloseButton = document.querySelector('.addCard_closeIcon')

let addCardElement = document.querySelector('.addCard_master')
let addCardForm = document.getElementById('addCard_form')
let addCardSuccess = document.querySelector('.addCard_success')

let UpLoadKEY = document.getElementById('uploadInput');
let DownLoadKEY = document.getElementById('downloadBtn');

new FlashCardMaker({
    el : element,
    list : words,
    codeVerb(item) {return `<div class="card-master" data-id="${item.id}" data-word="${item.word.toLowerCase()}">
        <div class="card">
            <span class="word">${item.word}</span>
            <span class="meaning">${item.menaing}</span>
            <div class="pastAndPP">
                <div class="past pastAndPP_item">
                    <span class="pastAndPP_title">Simple Past</span>
                    <span class="pastAndPP_text">${item.past}</span>
                </div>
                <div class="pp pastAndPP_item">
                    <span class="pastAndPP_title">Past Participle</span>
                <span class="pastAndPP_text">${item.pp}</span>
            </div>
            </div>
            <span class="type">${item.type}</span>
            <div class="synonyms">
                <span>${item.synonyms.replaceAll(' ','-')}</span>
            </div>
        </div>
        <div class="cardBack">
            ${item.word}
        </div>
    </div>`} ,
    codeNoun(item) {return `<div class="card-master" data-id="${item.id}" data-word="${item.word.toLowerCase()}">
        <div class="card">
            <span class="word">${item.word}</span>
            <span class="meaning">${item.menaing}</span>
            <div class="pluralForm">
                <span class="pluralForm_title">Plural Form</span>
                <span class="pluralForm_text">${item.plural}</span>
            </div>
            <span class="type type_noun">${item.type}</span>
            <div class="synonyms">
                <span>${item.synonyms.replaceAll(' ','-')}</span>
            </div>
        </div>
        <div class="cardBack">
            ${item.word}
        </div>
    </div>`} ,
    codeOther(item) {return `<div class="card-master" data-id="${item.id}" data-word="${item.word.toLowerCase()}">
    <div class="card">
        <span class="word">${item.word}</span>
        <span class="meaning meaning_others">${item.menaing}</span>
        <span class="type type_others">${item.type}</span>
        <div class="synonyms">
            <span>${item.synonyms.replaceAll(' ',' - ')}</span>
        </div>
    </div>
    <div class="cardBack">
        ${item.word}
    </div>
    </div>`},
    addCard: { cardElements : [addCardElement , addCardForm , addCardSuccess], showElements :[addCardOpenButton , addCardCloseButton]},
    searchElements : [searchElement , searchInput , searchContent , searchArrow , searchDatalist],
    keys : [forwardKey , backwardKey], 
    lastKeys : [lastForwardKey , lastBackwardKey],
    upAndDownload : [DownLoadKEY , UpLoadKEY],
    pageElement : pageShow,
}) 

