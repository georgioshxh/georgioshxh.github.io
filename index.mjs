window.addEventListener('load', () => {
    console.log('hello, world!')
    document.getElementById('main-navbar-menu').addEventListener('click', () => {
        document.getElementById('main-header').classList.toggle('navbar-clicked')
    })
})
