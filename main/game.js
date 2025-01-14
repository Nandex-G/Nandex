let random = Math.floor(Math.random() * 10)
let gameBox = document.querySelectorAll('.gameBox')

// ==================================================================

let XPointsElem = document.querySelector('#playerXResult')
let TiePointsElem = document.querySelector('#tiesResult')
let OPointsElem = document.querySelector('#playerOResult')


let XPoints = 0
let TiePoints = 0
let OPoints = 0

function tieChecker(FullBoxes) {
    if (FullBoxes == 9) {
        winning('Tie')
    }
}

function winning(who) {
    if (who == 'X') {
        XPointsElem.innerHTML = XPoints += 1

        resultShow(who)
    } else if (who == 'O') {
        OPointsElem.innerHTML = OPoints += 1

        resultShow(who)
    } else if (who == 'Tie') {
        TiePointsElem.innerHTML = TiePoints += 1

        resultShow(who)
    }
}

let resultShowElement = document.querySelector('#resultShow')

function resultShow(winner) {
    if (winner == 'X') {
        resultShowElement.innerHTML = 'The winner is X'
        resultShowElement.style.display = 'flex'
        setTimeout(() => {
            resultShowElement.style.opacity = 1
        }, 10);

    } else if (winner == 'O') {
        resultShowElement.innerHTML = 'The winner is O'
        resultShowElement.style.display = 'flex'
        setTimeout(() => {
            resultShowElement.style.opacity = 1
        }, 10);

    } else if (winner == 'Tie') {
        resultShowElement.innerHTML = 'Tie'
        resultShowElement.style.display = 'flex'
        setTimeout(() => {
            resultShowElement.style.opacity = 1
        }, 10);
    }
    setTimeout(() => {
        resultShowElement.style.opacity = 0
        setTimeout(() => {
            resultShowElement.style.display = 'none'
        }, 500);
        resetFunc()
    }, 3000);
}

// ==================================================================

let turn = 'X'
let turningText = document.querySelector('#game_turning')

if (random < 5) {
    turn = 'O'
    turningText.innerHTML = 'O Turn'
} else {
    turn = 'X'
    turningText.innerHTML = 'X Turn' 
}
gameBox.forEach( box => { box.addEventListener('click' , (e) => {
    if (box.getAttribute('data-isPlaced') != 'true') {
        if (turn == 'X') {
            box.innerHTML += `  <svg class="crossOut_SVG" width="85" height="85" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <line id="line1" x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="10" stroke-linecap="round" />
                                    <line id="line2" x1="10" y1="90" x2="90" y2="10" stroke="black" stroke-width="10" stroke-linecap="round" />
                                </svg>`
            turn = 'O'
            turningText.innerHTML = 'O Turn'
            box.setAttribute('data-sign' , 'X')
            setTimeout(() => {
                let crossOut_SVG_lines = document.querySelectorAll('.crossOut_SVG line')
                crossOut_SVG_lines.forEach(item => item.classList.add('iconAnimation'))
            }, 10);

// --------------------------

//          1-1 -------------------------------

            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="1"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }

//          2-1 -------------------------------

            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="2"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }

//          3-1 -------------------------------

            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="3"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="1"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="1"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }

//          1-2 ------------------------------- 

            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="1"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }

//          2-2 ------------------------------- 

            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="2"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="3"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="1"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }

//          3-2 ------------------------------- 

            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="3"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }

//          1-3 ------------------------------- 

            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="1"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }

//          2-3 ------------------------------- 

            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }

//          3-3 ------------------------------- 

            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="2"][data-positionY="3"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="3"][data-positionY="1"]').getAttribute('data-sign') === 'X') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="2"]').getAttribute('data-sign') === 'X') {
                        winning('X')
                    }
                }
            }



// --------------------------


        } else if (turn == 'O') {
            box.innerHTML += `  <svg class="circle_SVG" width="90" height="90" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="game-circle" cx="45.5" cy="45.5" r="39.5" />
                                </svg>`
            turn = 'X'
            turningText.innerHTML = 'X Turn'
            box.setAttribute('data-sign' , 'O')
            setTimeout(() => {
                let circle_SVG = document.querySelectorAll('.circle_SVG')
                circle_SVG.forEach(item => item.querySelector('circle').classList.add('iconAnimation'))
                
            }, 10);

            // --------------------------

//          1-1 -------------------------------

            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="1"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }

//          2-1 -------------------------------

            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="2"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }

//          3-1 -------------------------------

            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="3"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="1"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 1 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="1"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }

//          1-2 ------------------------------- 

            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="1"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }

//          2-2 ------------------------------- 

            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="2"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="3"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="1"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }

//          3-2 ------------------------------- 

            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="3"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 2 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }

//          1-3 ------------------------------- 

            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="1"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 1 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }

//          2-3 ------------------------------- 

            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="2"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 2 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }

//          3-3 ------------------------------- 

            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="2"][data-positionY="3"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="1"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="2"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }
            if (e.target.getAttribute('data-positionX') == 3 & e.target.getAttribute('data-positionY') == 3 ) {
                if (document.querySelector('[data-positionX="3"][data-positionY="1"]').getAttribute('data-sign') === 'O') {
                    if (document.querySelector('[data-positionX="3"][data-positionY="2"]').getAttribute('data-sign') === 'O') {
                        winning('O')
                    }
                }
            }



// --------------------------

        }
        box.setAttribute('data-isPlaced' , 'true' )
    }
let FullBoxesNumber = 0
    gameBox.forEach( box => {
        if (box.getAttribute('data-isPlaced') == 'true') {
            FullBoxesNumber += 1
            tieChecker(FullBoxesNumber)
        }
    })
})})

// ==================================================================

let reset = document.querySelector('#reset_button')

reset.addEventListener('click' , () => {
    gameBox.forEach(box => {
        box.innerHTML = '' 
        box.setAttribute('data-isPlaced' , 'false' )
        box.setAttribute('data-sign' , '' )
    })
})
function resetFunc() {
    gameBox.forEach(box => {
        box.innerHTML = '' 
        box.setAttribute('data-isPlaced' , 'false' )
        box.setAttribute('data-sign' , '' )
    })
}
// ==================================================================



