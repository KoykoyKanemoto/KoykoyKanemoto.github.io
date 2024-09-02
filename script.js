const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I Love You!!! Let's get married! 💍";
    gif.src = "https://i.pinimg.com/originals/64/08/e4/6408e40104b0333675fcf4705901fdbb.gif";
});

noBtn.addEventListener('mouseover', () => {
    const noBtnRec = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRec.width;
    const maxY = window.innerHeight - noBtnRec.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.position = "absolute";
    noBtn.style.top = randomY + "px";
    noBtn.style.left = randomX + "px";
});

document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi Mark Lee, I'm Gian, just wanted to say... I think you're really cute😊 and I like you, uhm ... Do you like me too?";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            question.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); 
        }
    }

    typeWriter();
});