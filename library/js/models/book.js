var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    coverImage: "img/bookcover.png",
    title: "No title",
    author: "Unknown",
    releaseDate: "Unknown",
    keywords: "None"
  }
});
