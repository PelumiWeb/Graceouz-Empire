const dropDown = document.querySelector('.dropdown')
const chevron = document.getElementById('chevron')
console.log(chevron)
console.log(dropDown)
const showDropDown = () => {
    dropDown.classList.toggle('active')
    console.log('it worked')
    chevron.querySelector('i.fas').classList.toggle('fa-chevron-down')
    chevron.querySelector('i.fas').classList.toggle('fa-chevron-up')

}

const menu = document.querySelector('.menu')
    const navigation = document.querySelector('.header_navigation')
    const navigation2 = document.querySelector('.navigation_2')
    menu.addEventListener('click', (e) => {
     
        menu.classList.toggle('active')
        navigation.classList.toggle('active')
        navigation2.classList.toggle('active')
    })

    const nav2 = document.querySelectorAll('.nav_2')
    const navArr = Array.from(nav2)
    console.log(navArr)
       
    const clicked = () => {
        menu.classList.toggle('active')
        navigation2.classList.toggle('active')
        console.log('clicked')
    }
        navArr.forEach(e => {
            console.log(e)
            e.addEventListener('click', clicked)
        })