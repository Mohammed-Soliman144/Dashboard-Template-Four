/* Navigation between pages by using document.startViewTransition */

/* Note Important */ 
// Optional Chaining ? => which means if you try access propery or method inside object and object is null or not exist yet stop executing without throw error uncaught type error
/* Note Important */ 

const allLinks = document.querySelectorAll('header.main-header ul li a');

allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        sessionStorage.setItem('currentLink', e.target.getAttribute('href'));
        sessionStorage.setItem('previousLink', window.location.pathname.substring(1));
        if(document.startViewTransition){
            e.preventDefault();
            document.startViewTransition(() => {
                window.location = link.getAttribute('href');
            })
        }
    })
});

// window.location.href => http://127.0.0.1:5500/index.html
// window.location.origin => http://127.0.0.1:5500
// window.location.host => 127.0.0.1:5500
// window.location.hostname => 127.0.0.1
// window.location.port => 5500
// window.location.pathname => /index.html
// window.location.hash => #

const currentLink = document.querySelector(`header.main-header ul li a[href="${sessionStorage.getItem('currentLink')}"]`);

document.addEventListener('DOMContentLoaded', () => {
    if(!currentLink) return;
    allLinks.forEach(link => {
        link.classList.remove('active');
        // Optional Chaining ? => which means if you try access propery or method inside object and object is null or not exist yet stop executing without throw error uncaught type error
        link.closest('li')?.classList.remove('active');
    })
    currentLink.classList.add('active');
    currentLink.closest('li')?.classList.add('active');

})
