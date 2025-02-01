function animateSlide(slideNumber) {
    let currentSlide = document.getElementById('slide' + slideNumber);
    let nextSlide = document.getElementById('slide' + (slideNumber + 1));

    if (currentSlide && nextSlide) {
        currentSlide.classList.add('exiting');

        setTimeout(() => {
            currentSlide.classList.remove('active', 'exiting');
            
            nextSlide.classList.add('active');
            nextSlide.classList.add('entering');
            
            setTimeout(() => {
                nextSlide.classList.remove('entering');
            }, 50);
        }, 2000);
    } else {
        let questionSlide = document.getElementById('questionSlide');
        currentSlide.classList.add('exiting');

        setTimeout(() => {
            currentSlide.classList.remove('active', 'exiting');
            questionSlide.classList.add('entering', 'active');

            setTimeout(() => {
                questionSlide.classList.remove('entering');
            }, 100);
        }, 2000);
    }
}

function animateMainCard() {
    let questionSlide = document.getElementById('questionSlide');
    let endSlide = document.getElementById('endSlide');

    questionSlide.classList.add('fade');

    setTimeout(() => {
        questionSlide.classList.remove('active');
        questionSlide.classList.remove('fade');

        endSlide.classList.add('active');
        endSlide.classList.add('entering');
        setTimeout(() => {
            endSlide.classList.remove('entering');
        }, 100);
    }, 3000)

}

function clickedYes() {
    animateMainCard();
}

let timesNoClicked = 0;

function clickedNo() {
    timesNoClicked += 1;
    if (timesNoClicked >= 3) {
        let noButton = document.getElementById('no-button');
        noButton.classList.add('hidden');
    }
}