const seal = document.getElementById("seal");
const letter = document.getElementById("letter");
const typingText = document.getElementById("typingText");

const message = `My Dear Bacha ❤️
This is my way of showing effort as an ICS student😂
Firstly...
HAPPY 1ST MONTH CUTIEPIE!! 💕✨
I just wanted to tell you...🙃
I love yuhh so, so, soooo much.😊
I can't even put into words how much.🌺
Thank you for choosing me.🎀🌸
Thank you for loving me.🦋👀
Thank you for caring about me so much.💖
Thank you for comforting me.✨
Thank you for understanding me.😭
Thank you for giving me your time,😀
your love,💖
your sincerity,💕
Thank you for noticing the little things.✨
Thank you for always being there for me.🎀
Like I said before...
You are the besttt.😘
The perfect person for meh🧿
That's why every single day starts with one thought in my mind...
"No one in this world can love me more than that one boy." ✨💖
And you know what...? 🙃
I want yuhh.🙃
I need yuhh.😭
I want your scent near me.🎀
I want your mess.👀
I want your clothes on my bedroom floor.😅
I want your toothbrush in my bathroom.🌸
I want your shoes in my closet.🌺
I want your mediocre leftovers in my fridge.🙃💖
I want your hand holding mine.😭🌺
I want your arms around me 24/7 😁
*ahem...*
I want your lips on mine too. 💕🙄(no comments on that)
Oh...😅
And I almost forgot...
I WANT YOU IN MY LIFE AS MY HUSBAND TOO. 🙃✨💖
Happy One Month 🙃❤️
with lots of love,
 your rani 🙃🌺`;

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