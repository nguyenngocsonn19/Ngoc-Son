const searchKey = decodeURI(location.pathname.split('/').pop());

const searchSpanElenment = document.querySelector('#search-key');
searchSpanElenment.innerHTML = searchKey;

getProducts(searchKey).then(data => creatProductCards(data, '.card-container') );