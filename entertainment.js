const main =  document.getElementById('articles-container');
//main.innerHTML ='<h1>hello ji</h1>';

let data ;
let datalength =0;

async function getData(){
    const res = await fetch ("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=d90e5439d81b428a80ad09f9a694c9f3");
    const result = await res.json();
    data = result.articles;
    datalength = data.length;
    console.log("\ndata:",data);
    renderUI();
}
getData();

function renderUI(){
    for(let i=0; i<datalength; i++){
        const article = document.createElement('article');
     article.innerHTML = `
        <div class="article-content">
        <img class="article-img" src="${data[i].urlToImage}" alt=""/>
        <div class="content">
            <h2> ${data[i].title} </h2>
            <p> ${data[i].description} </p>
            <div class="extra-info">
                <a href="${data[i].url}" target = "/blank">Read More...</a>
                <p>~"${data[i].author}"
            </div>
        </div>
        </div>
      
    `;
    main.appendChild(article);
    }
}
renderUI();
