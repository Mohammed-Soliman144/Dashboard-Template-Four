const selectedPlans = document.querySelectorAll('main .plans article');
const choosedBtns = document.querySelectorAll('main .plans article a');


choosedBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(btn.classList.contains('choosed')){
            e.preventDefault();
        }
        else {
            e.preventDefault();
            choosedBtns.forEach(btn => {
                btn.classList.remove('choosed');
                btn.innerText = 'join';
            });
            selectedPlans.forEach(plan => plan.classList.remove('selected'));
            e.target.classList.toggle('choosed');
            e.target.parentElement.classList.toggle('selected');
            e.target.innerText = 'this is your current plan';
        }
    })
})

