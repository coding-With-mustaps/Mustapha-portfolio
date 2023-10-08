const openAsideBar = document.querySelector('.fa-bars');
const closeAsideBar = document.querySelector('.fa-close');
const asideBarArea = document.querySelector('.nav-links');

openAsideBar.addEventListener('click', () => {

    asideBarArea.style.right = '0px';
    asideBarArea.style.transition = '1.2s ease'
    openAsideBar.style.display = 'none';
    // asideBarArea.style.display = 'block';
    closeAsideBar.style.display = 'block';
});

closeAsideBar.addEventListener('click', () => {
    asideBarArea.style.right = '-250px';
    asideBarArea.style.transition = '1.2s ease';
    closeAsideBar.style.display = 'none';
    // asideBarArea.style.display = 'none';
    openAsideBar.style.display = 'block';
});