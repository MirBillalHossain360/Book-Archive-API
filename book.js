const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`

    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs.slice(0, 10)));
}
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {

        console.log(doc);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
           <img class="w-100" src="https://covers.openlibrary.org/b/id/${doc?.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">${doc.author_name}</h3 >
              <h5 class="card-title">publish Year: ${doc.publish_year}</h5 >
              <p class="card-text">publisher: ${doc.publisher}</p>
            </div >
        </div >
    `;
        searchResult.appendChild(div);

    })
}