const removeBtns = document.querySelectorAll('main .friends article footer a');

removeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(btn.innerText === 'Remove'){
            e.preventDefault();
            const parent = e.target.closest('article');
            if(parent)
                parent.classList.add('removed');
            e.target.closest('main').classList.add('removed');
        }
        setTimeout(() => {
            e.target.closest('main').classList.toggle('removed');
        }, 1200);
    })
})

removeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(e.target.innerText === 'Profile'){
            e.preventDefault();
            const sectionId = e.target.getAttribute('href');
            const targetSection = document.querySelector(sectionId);
            if(targetSection)
                targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    })
})

