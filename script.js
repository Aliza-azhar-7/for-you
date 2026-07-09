const seal = document.getElementById("seal");
const letter = document.getElementById("letter");
const typingText = document.getElementById("typingText");

const message = `type the message here`;

let i = 0;

function typeWriter(){

    if(i < message.length){

        typingText.textContent += message.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

seal.addEventListener("click",()=>{

    letter.style.display="flex";

    typingText.textContent="";

    i=0;

    typeWriter();

});