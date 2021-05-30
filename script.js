const displayText = document.querySelector('#dispTxt');
const input = document.querySelector('.input');
const statsTitle = document.querySelector('#petStatsTitle');
const statLstRight = document.querySelector('.statusRight');
const statLstLeft = document.querySelector('.statusLeft');
const actionBtns = document.querySelector('.action-btns');
const attackBtn = document.querySelector('#attack-btn');
const runBtn = document.querySelector('run-btn');

const passiveBtns = document.querySelector('.passive-btns');
const statsBtn = document.querySelector('#stats-btn');
const backBtn = document.querySelector('#back-btn');
const restBtn = document.querySelector('#rest-btn');
const battleBtn = document.querySelector('#battle-btn');
const yourPetImg = document.querySelector('.your-pet-img');

function createEnemy() {
    displayText.textContent = `An enemy named ${enemy.name} has appeared!`;
}

function showPassiveMenu() {
    passiveBtns.classList.remove('hidden');
    displayText.textContent = `What would you like to do?`;
    backBtn.classList.add('hidden');
}

function hidePassiveMenu() {
    passiveBtns.classList.add('hidden');
    displayText.textContent = ``;
    backBtn.classList.remove('hidden');
}


// Pet Object
const pet = {
    name: '',
    level: 1,
    xp: 0,
    nextLevelXP: 100,
    hp: 1,
    maxhp: 10,

    namePet: function () {
        displayText.textContent = 'What would you like to name your pet?';
        this.name = input.value;
        console.log(this.name);
    },

    displayStats: function () {
        const infoLst = [pet.name, `${pet.hp}/${pet.maxhp}`, pet.level, pet.xp];
        statsTitle.classList.remove('hidden');
        statsTitle.textContent = `${pet.name}'s Stats:`;
        statLstLeft.classList.remove('hidden');
        yourPetImg.classList.remove('hidden');

        for (let i = 0; i < infoLst.length; i++) {
            const statItem = document.createElement('li');
            statItem.textContent = infoLst[i];
            statLstRight.appendChild(statItem);
        }

        statLstRight.classList.remove('hidden');

        console.log(pet.name);
        console.log(pet.hp);
        console.log(pet.level);
        console.log(pet.xp);

    },

    hideStats: function () {
        yourPetImg.classList.add('hidden');

        for (let i = 0; i < 4; i++) {
            statLstRight.removeChild(statLstRight.childNodes[i - i]);
        }

        statLstLeft.classList.add('hidden');
        statsTitle.classList.add('hidden');
    }
}


// Enemy Object
const enemy = {
    name: '',
    level: 1,
    hp: 10,
    maxhp: 10
}

input.addEventListener('keypress', function () {
    if (event.key === 'Enter') {

        if (pet.name === '') {
            pet.namePet();
        }

        if (pet.name !== '') {

            statsBtn.addEventListener('click', function () {
                pet.displayStats();
                hidePassiveMenu();
            });

            backBtn.addEventListener('click', function () {
                showPassiveMenu();
                pet.hideStats();
            });

            battleBtn.addEventListener('click', function () {
                console.log('TEST!!!');
            });

            restBtn.addEventListener('click', function () {
                if (pet.hp !== pet.maxhp) {
                    displayText.textContent = `${pet.name} feels fully refreshed!`
                }
            });

            // Show passive btns menu
            showPassiveMenu()
            input.classList.add('hidden');
        }

        // createEnemy()

        // Clear Input
        input.value = '';
    }
});