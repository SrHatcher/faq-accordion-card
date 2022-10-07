const questions = document.querySelectorAll('.question')
const arrows = document.querySelectorAll('.arrow')
const answers = document.querySelectorAll('.answer')

questions.forEach((question, i)=>{
    questions[i].addEventListener("click", ()=>{
        answers.forEach((answer, j)=>{
            answers[j].classList.remove("text--show")
            answers[j].classList.add("text--hide")
            questions[j].classList.remove("active--heading")
            arrows[j].classList.remove("arrow--up")
        })

        answers[i].classList.toggle("text--hide")
        answers[i].classList.toggle("text--show")
        questions[i].classList.toggle("active--heading")
        arrows[i].classList.toggle("arrow--up")
    })
})

arrows.forEach((arrow, i)=>{
    arrows[i].addEventListener("click", ()=>{
        answers.forEach((answer, j)=>{
            answers[j].classList.remove("text--show")
            answers[j].classList.add("text--hide")
            questions[j].classList.remove("active--heading")
            arrows[j].classList.remove("arrow--up")
        })

        answers[i].classList.toggle("text--hide")
        answers[i].classList.toggle("text--show")
        questions[i].classList.toggle("active--heading")
        arrows[i].classList.toggle("arrow--up")
    })
})
