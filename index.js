const quote = document.querySelector('.advice-text')
const id = document.querySelector('#advice-id')
const btn = document.querySelector('.toggleAdvice')

const getAdvice = async ()=>{
    const current_advice = await fetch('https://api.adviceslip.com/advice')
    const advices = await current_advice.json()
    console.log(advices)
    fillContents(advices.slip)    
}

function fillContents(slip){
   id.innerHTML = slip.id
   quote.innerHTML=slip.advice
}

getAdvice()


btn.addEventListener('click',getAdvice)