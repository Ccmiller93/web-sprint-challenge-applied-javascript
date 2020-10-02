// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const entryPoint = document.querySelector('.header-container')

function Header() {
    const headerDiv = document.createElement('div')
    const headerSpan = document.createElement('span')
    const headerH1 = document.createElement('h1')
    const headerSpan2 = document.createElement('span')

    headerDiv.appendChild(headerSpan)
    headerDiv.appendChild(headerH1)
    headerDiv.appendChild(headerSpan2)

    headerDiv.classList.add('header')
    headerSpan.classList.add('date')
    headerSpan2.classList.add('temp')

    headerSpan.textContent = 'MARCH 29,2020'
    headerH1.textContent = 'Lambda Times'
    headerSpan2.textContent = '98°'

    return headerDiv
}
let = header = Header()

entryPoint.appendChild(header)
