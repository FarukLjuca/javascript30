let started = false;
let count;
let current;

function startGame() {
    if (started) {
        return;
    }
    started = true;
    count = 0;

    showRandom();
    for (let i = 0; i < moles.length; i++) {
        moles[i].addEventListener('click', () => whack(i));
    }

    setTimeout(() => {
        started = false;
        showRandom();
        for (const mole of moles) {
            mole.removeEventListener('click', whack);
            mole.style.top = '100%';
        }
    }, 10000);
}

function showRandom() {
    let rand;
    do {
        rand = Math.floor(Math.random() * moles.length);
    } while (rand === current);
    current = rand;
    moles[current].style.top = '0';
}

function whack(index) {
    if (index !== current) {
        return;
    }
    count++;
    scoreBoard.innerHTML = count;
    moles[index].style.top = '100%';
    showRandom();
}
