// 'use strict'


setInterval(function(){
    if (money >= MoneyForMUP) {
        document.getElementById('MoreMoneyUp').style.backgroundColor = 'rgb(189, 189, 189)'
        document.getElementById('MoreMoneyUpSpan').style.backgroundColor = 'white'
    } else {
        document.getElementById('MoreMoneyUp').style.backgroundColor = 'gray'
        document.getElementById('MoreMoneyUpSpan').style.backgroundColor = 'rgb(189, 189, 189)'
    }
    if (money >= MoneyForAC && canAC < 12) {
        document.getElementById('AutoClickUp').style.backgroundColor = 'rgb(189, 189, 189)'
        document.getElementById('AutoClickUpSpan').style.backgroundColor = 'white'
    } else {
        document.getElementById('AutoClickUp').style.backgroundColor = 'gray'
        document.getElementById('AutoClickUpSpan').style.backgroundColor = 'rgb(189, 189, 189)'
    }

    if (canAC >= 1) {
        document.getElementById('AC-btn').style.opacity = '100%'
        document.getElementById('AC-btn_lable').style.opacity = '100%'
    } else {
        document.getElementById('AC-btn').style.opacity = '50%'
        document.getElementById('AC-btn_lable').style.opacity = '50%'
    }
    if (canAC == 12) {
        AC.innerText = "Maximum"
        document.getElementById('AutoClickUpP_icon').innerText = null
    }
},1)


// 
let x = localStorage.getItem('x')
x = parseFloat(x,Number)
// 

let money = localStorage.getItem('point')

money = parseInt(money,Number)

let moneyDisplay = document.getElementById('point')

moneyDisplay.innerText = Math.floor(money)

let saveM = money



let clickN = localStorage.getItem('saveN')
let clickNumber = document.getElementById('click-number')
let saveN = clickN

document.getElementById('botton').addEventListener("click",function() {
    money = money + x
    moneyDisplay.innerText = Math.floor(money)
    saveM = money
    localStorage.setItem('point',saveM)
    clickN++
    clickNumber.innerText = clickN
    saveN = clickN
    localStorage.setItem('saveN',saveN)
})
clickNumber.innerText = clickN


// More Money Upgrade


let MoneyForMUP = localStorage.getItem('MUPp')

let mup = document.getElementById('MoreMoneyUpP')

mup.innerText = Math.floor(localStorage.getItem('MUPp'))

document.getElementById('MoreMoneyUp').addEventListener("click",function() {
    if (money >= MoneyForMUP) {
        money = money - MoneyForMUP
        MoneyForMUP = MoneyForMUP * 1.8
        mup.innerText = Math.floor(MoneyForMUP)
        x = x * 1.5
        moneyDisplay.innerText = Math.floor(money)
        saveM = money
        localStorage.setItem('point',saveM)           
        let saveMoneyForMUP = Math.floor(MoneyForMUP)
        localStorage.setItem('MUPp',saveMoneyForMUP)
        let saveX = x
        localStorage.setItem('x',saveX)
        return x
    }
})


// Auto Click


let MoneyForAC = localStorage.getItem('MoneyForAC')
let AC = document.getElementById('AutoClickUpP')
let ACtime = localStorage.getItem('saveT')
let canAC = localStorage.getItem('canAC')
AC.innerText = MoneyForAC



document.getElementById('AutoClickUp').addEventListener("click",function(){
    if (canAC < 12) {
        if (money >= MoneyForAC) {
            if (canAC >= 1) {
                ACtime = ACtime / 2
                localStorage.setItem('saveT',ACtime)
            } else {
                ACtime = 5000
            }
        }
        if (money >= MoneyForAC) {
            money = money - MoneyForAC
            moneyDisplay.innerText = Math.floor(money)
            AC.innerText = MoneyForAC * 2
            MoneyForAC = MoneyForAC * 2
            localStorage.setItem('MoneyForAC',MoneyForAC)
            canAC++
            localStorage.setItem('canAC',canAC)
            saveM = money
            localStorage.setItem('point',saveM) 
        }
        clearInterval(auto_reFresh)
        setInterval(function() {
            if (AC_btn == true) {
                document.getElementById('botton').click()
            }
        },ACtime)
        if (canAC == 12) {
            document.getElementById('boom').style.display = 'flex'
            setTimeout(() => {
                document.getElementById('boom').style.opacity = '100%'
                setTimeout(() => {
                    document.getElementById('boom-text').style.rotate = '360deg'
                    document.getElementById('boom-text').style.color = 'white'
                    document.getElementById('boom').style.backgroundColor = 'yellow'
                    document.getElementById('boom-text').style.fontSize = '50px'
                },300);
                setTimeout(() => {
                    document.getElementById('boom-text').style.color = 'gray'
                    document.getElementById('boom').style.backgroundColor = 'green'
                    document.getElementById('boom-text').style.fontSize = '150px'
                },600);
                setTimeout(() => {
                    document.getElementById('boom-text').style.color = 'black'
                    document.getElementById('boom').style.backgroundColor = 'red'
                    document.getElementById('boom-text').style.fontSize = '250px'
                    document.getElementById('boom-text').style.rotate = '-360deg'
                },900);
            }, 100);
            setTimeout(() => {
                setTimeout(() => {
                    document.getElementById('boom').style.backgroundColor = 'black'
                    document.getElementById('boom-text').style.color = 'white' 
                    document.getElementById('boom-text').style.fontSize = '50px'
                    document.getElementById('boom-text').style.rotate = '-360deg'
                },500);
                setTimeout(() => {
                    document.getElementById('boom-text').style.color = 'black' 
                    document.getElementById('boom').style.backgroundColor = 'white'
                    document.getElementById('boom-text').style.fontSize = '100px'
                    document.getElementById('boom-text').style.transition = '400ms'
                },1000);
                setTimeout(() => {
                    document.getElementById('boom').style.backgroundColor = 'black'
                    document.getElementById('boom-text').style.color = 'white' 
                    document.getElementById('boom-text').style.fontSize = '200px'
                    document.getElementById('boom-text').style.transition = '350ms'
                },1500);
                setTimeout(() => {
                    document.getElementById('boom').style.backgroundColor = 'white'
                    document.getElementById('boom-text').style.color = 'black' 
                    document.getElementById('boom-text').style.fontSize = '300px'
                },1900);
                // setTimeout(() => {
                //     document.getElementById('boom').style.backgroundColor = 'black'
                //     document.getElementById('boom-text').style.color = 'white' 
                //     document.getElementById('boom-text').style.fontSize = '350px'
                //     document.getElementById('boom-text').style.transition = '300ms'
                // },2200);
                setTimeout(() => {
                    document.getElementById('boom-text').style.fontSize = '14px'
                    document.getElementById('boom').style.opacity = '0'
                },3000);
                setTimeout(() => {
                    document.getElementById('boom').style.display = 'none' 
                },3500);
            }, 1000);
        }
    }
    return ACtime      
})



    



// Auto Click On/Off Button

let AC_btn = false
document.getElementById('AC-circle').addEventListener('click',function() {
    if (canAC >= 1) {
        if (AC_btn == false) {
            document.getElementById('AC-btn_front').style.translate = '50px'
            document.getElementById('AC-circle').style.rotate = '360deg'
            document.getElementById('AC-off').style.opacity = '0'
            document.getElementById('AC-btn').style.backgroundColor = 'green'
            document.getElementById('AC-btn').style.border = '5px solid #004f00'
            document.getElementById('AC-on-come').style.translate = '0px'
            AC_btn = true
        } else {
            document.getElementById('AC-btn_front').style.translate = '0'
            document.getElementById('AC-off').style.opacity = '100%'
            document.getElementById('AC-circle').style.rotate = '0deg'
            document.getElementById('AC-btn').style.backgroundColor = 'red'
            document.getElementById('AC-btn').style.border = '5px solid #6a0000'
            document.getElementById('AC-on-come').style.translate = '-50px'
            AC_btn = false
        }
    }
})


let auto_reFresh = setInterval(function() {
    if (AC_btn == true) {
        document.getElementById('botton').click()
    }
},ACtime)




// Challenge
document.getElementById('chall_up_arrow_false').addEventListener('click', (a) => {
    a.preventDefault()
})
let U_D = false
document.getElementById('chall_arrows_box').addEventListener("click" ,() => {
    if (U_D == false) {
        document.getElementById('chall').style.bottom = '0'
        document.getElementById('chall_arrows').style.translate = '0 32px'
        document.getElementById('chall_body_border').style.borderWidth = '0'
        U_D = true
    } else if (U_D == true) {
        U_D = false
        document.getElementById('chall_body_border').style.borderTopWidth = '12px'
        document.getElementById('chall').style.bottom = '-440px'
        document.getElementById('chall_arrows').style.translate = '0'
    }
})











// RESET
document.getElementById('reset').addEventListener('click', function() {
    // let con = confirm('Are you sure?')
    let con = true
    if (con == true) {
        localStorage.setItem('canAC',0)
        localStorage.setItem('saveN',0)
        localStorage.setItem('MoneyForAC',5000)
        localStorage.setItem('point',100000000)
        localStorage.setItem('x',1)
        localStorage.setItem('MUPp',50)
        localStorage.setItem('saveT',5000)   
        location.reload()
    }
})




