let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let values = ['😄' , '😢' , '😋' , '😆' , '😎' , '😭' ,'😡']

let inpSpeed = document.getElementById('inpSpeed') 
//taking the speed as the user inout

function getRandomValue(){
    return values[Math.floor(Math.random()*7)]
}

setInterval(()=>{
value1.innerText=getRandomValue()
value2.innerText=getRandomValue()
value3.innerText=getRandomValue()
} , 100)

inpSpeed.onchange = (ev)=>{
    // console.log('value changed',ev.target.value) => new data that we are gettingwv.target =previous value on which change happens
}