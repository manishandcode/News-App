console.log('Today we doing our new project on webdevelopment which is based on News Project');

let xhr = new XMLHttpRequest;

xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=e0d65c14405146f783ff47a5c75f91ea'
    , 'true');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.response)
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            if (element.content == null || element.author == null || element.description == null || element.urlToImage == null) {
                newsHtml += `<div class="card mx-2 my-4 shadow p-3 mb-5 bg-white rounded d-none" style="width: 18rem;">
                         <img src="${element.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body mx-2 ">
                            <h6 class="card-title"></h6>
                            <p class="card-text">${element.content}</p>
                            <a href="${element.url}" class="btn btn-dark">Read More</a>
                        </div>
                    </div>`}
            else {
                newsHtml += `<div class="card mx-2 my-4 shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
                         <img src="${element.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body mx-2 ">
                            <h6 class="card-title">${element.source.name}</h6>
                            <p class="card-text">${element.content}</p>
                            <a href="${element.url}" class="btn btn-dark">Read More</a>
                        </div>
                    </div>`
                // console.log("Some error occured")
            }
            // console.log(json)
        });
        let newsData = document.getElementById("newsData");
        newsData.innerHTML = newsHtml;
    }


}
xhr.send()

