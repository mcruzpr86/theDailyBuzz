var axios = require("axios");
var cheerio = require("cheerio");
var db = require("./models")

module.exports = function(app){

    //get articles

app.get("/scrape", function(req, res) {
    axios.get("https://www.nytimes.com/").then(function(response) {
        var $ = cheerio.load(response.data);

        /
    $("article h2").each(function(i, element) {
        var result = {};
  
        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
          .children("a")
          .attr("href");
  
        // Create a new Article using the `result` object built from scraping
        db.Article.create(result)
          .then(function(dbArticle) {
            // View the added result in the console
            console.log(dbArticle);
          })
          .catch(function(err) {
            // If an error occurred, log it
            console.log(err);
          });
      });
  
      // Send a message to the client
      res.send("Scrape Complete");
    });
  });
}

