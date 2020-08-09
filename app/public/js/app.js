$(document).ready(function(){

/*Global Variables*/
var articles = []
var comments = []

/*Event Handlers*/

$(document).on('click', '#scrapeBtn', function(){
    getResults()
})

$(document).on('click', '#articleCard', function(){
    var cardID = $(this).attr('data-id')
    oneArticle(cardID)
})

/*Function Definitions */
function articleResults(){
    renderAddCommentBtn()

    if (articles.length){
        renderArticles()
    } else {
        $('#articleResults').empty()
        renderScrapeButton()
    }
}

function getResults(){
    $.getJSON('/api/articles',function(data){
        if (data.length){
            articles = data
            articleResults()
        } else {
            $.ajax({
                method: "GET",
                url: '/api/scrape'
            }).then(function(data){
                getResults()
            }).catch(function(err){
                console.log(err)
            })
        }
    })

    function getOneArticle(cardID){
        $.getJSON('/api/articles/' + cardID, function(data){
            console.log(data)
            articles.push(data)
            articleResults()
        })
    



    function getArticle(cardID){
        $('#articleResults').empty()
        articles = []
        getOneArticle(cardID)
        $('#commentModal').attr('data-id', cardID)
    }

    articleResults()

})