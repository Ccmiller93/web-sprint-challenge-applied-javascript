// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from 'axios' 

const cardEntryPoint = document.querySelector('.cards-container')

function cardMaker(article) {

    const cardBigDiv = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const image = document.createElement('img')
    const span = document.createElement('span')

    cardBigDiv.appendChild(headlineDiv)
    cardBigDiv.appendChild(authorDiv)
    authorDiv.appendChild(imgDiv)
    imgDiv.appendChild(image)
    authorDiv.appendChild(span)

    cardBigDiv.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imgDiv.classList.add('img-container')
    
    headlineDiv.textContent = article.headline
    image.src = article.authorPhoto
    span.textContent = `By ${article.authorName}`

    cardBigDiv.addEventListener('click', () => {
        console.log(headlineDiv)
    })

    return cardBigDiv
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
    console.log("res", res);
        const allArticles = res.data.articles
        
        for (let value in allArticles) {
            allArticles[value].forEach( (param)=> {
                const cards = cardMaker(param)
                console.log("cards", cards);
                cardEntryPoint.appendChild(cards)
        })
        }
    })
    .catch(err => {
    console.log("err", err);
    })