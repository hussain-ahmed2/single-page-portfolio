const typingText = document.getElementById('typing-text');

const first = 'Web Developer';
const second = 'Web Designer';
const third = 'Software Engineer';

function infiniteTyping(arr) {
    let interval = 0;

    first.split('').forEach(letter => {
        setTimeout(() => typingText.innerHTML += letter, interval+=100)
    })

    setTimeout(() => {
        let removeInterval = 0;
        const arr = typingText.innerHTML.split('');
        const length = arr.length;
        for(let i=0; i<length; i++){
            setTimeout(() => {
                arr.pop();
                typingText.innerHTML = arr.join('')
            }, removeInterval+=100)
        }
    }, interval + 400)
    
    let secondInterval= first.length*200 + 400;
    second.split('').forEach(letter => {
        setTimeout(() => typingText.innerHTML += letter, secondInterval+=100)
    })

    setTimeout(() => {
        let removeInterval = 0;
        const arr = typingText.innerHTML.split('');
        const length = arr.length;
        for(let i=0; i<length; i++){
            setTimeout(() => {
                arr.pop();
                typingText.innerHTML = arr.join('')
            }, removeInterval+=100)
        }
    }, first.length*200 + second.length*100 + 800)
    
    let thirdInterval= first.length*200 + second.length*200 + 800;
    third.split('').forEach(letter => {
        setTimeout(() => typingText.innerHTML += letter, thirdInterval+=100)
    })

    setTimeout(() => {
        let removeInterval = 0;
        const arr = typingText.innerHTML.split('');
        const length = arr.length;
        for(let i=0; i<length; i++){
            setTimeout(() => {
                arr.pop();
                typingText.innerHTML = arr.join('')
            }, removeInterval+=100)
        }
    }, first.length*200 + second.length*200 + third.length*100 + 1200)

}

infiniteTyping()

setInterval(infiniteTyping, first.length*200 + second.length*200 + third.length*200 + 1200);

const navToggleBtn = document.getElementById('nav-toggle-btn');
const nav = document.querySelector('nav ul');
const navList = document.querySelectorAll('nav ul li a');

function handleNavClick() {
    const height = nav.scrollHeight;
    if(nav.style.height == '') nav.style.height = height;
    else nav.style.height = '';
}

navToggleBtn.addEventListener('click', handleNavClick);
navList.forEach(item => item.addEventListener('click', handleNavClick));