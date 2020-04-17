// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function Header(obj) {
    const head = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('hi');
    const temp = document.createElement('span');

    head.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = "SMARCH 28, 2019";
    h1.textContent = "Lambda Times";
    temp.textContent = "98°";

    head.appendChild(date);
    head.appendChild(h1);
    head.appendChild(temp);

    return head;
}
const cont = document.querySelector('.header-container');
cont.appendChild(Header());