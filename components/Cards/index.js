// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
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
// Use your function to create a card for each of the articles and add the card to the DOM.

const tocs = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)
        const articl = response.data.articles;
        const entries = Object.entries(articl);
        for (const key of entries) {
            const data = key[1];
            data.forEach(item => {
                tocs.appendChild(article(item));
                // console.log(response.data);
            })

        }

        // handle success
    })
    .catch(error => {
        // handle error
        console.log(error);
    })

function article(obj) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgcontainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');



    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgcontainer.classList.add('img-container');


    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    span.textContent = obj.authorName;


    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgcontainer);
    imgcontainer.appendChild(img);
    author.appendChild(span);

    return card;
}