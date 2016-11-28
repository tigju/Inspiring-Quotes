
  
function decodeEntities(encodedString) {
    var p = document.createElement('p');
    p.innerHTML = encodedString;
    return p.textContent;
}
 
$(document).ready(function(json) {
$('#quote-button').on('click', function(e) {
  $('#quote-button').text('Change Quote');
    e.preventDefault();
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        var dec = decodeEntities(post.content);
        $('#quote-title').text('- ' + post.title);
        $('#quote-content').text(dec);
         $('.quote-area').css({'background-color': '#fff', 'border-radius': '5px', 'border': '1px solid #fff' });
        $('.quote').css('display', 'initial');
        $('.tweet-quote').css('display', 'initial');
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes' + '"' + dec + '" ' + post.title);
          $('#tweet-quote').on('click', function() {
              'https://twitter.com/intent/tweet?hashtags=quote' + '"' + dec + '" ' + post.title;
        });
      },
      cache: false
    });
  });
});