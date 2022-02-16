
const searchKey = decodeURI(location.pathname.split('/').pop());

const searchSpanElement = document.querySelector('#search-key');
searchSpanElement.innerHTML = searchKey;

getProduct(searchKey).then(data => createProductCards(data,'.card-container'))