var aPIKey = '1UXuY3WPR1BOB2lzqLRluQjWJl1YCHEb08mn1e7t';
var oAuthKey = 'TcwjOmmmh90TOj6RYjla3gtWFubb4oHXPqDxDbkU';
var testWebSite = 'https://trashnothing.com/api/v1.2/posts/search?api_key=1UXuY3WPR1BOB2lzqLRluQjWJl1YCH[…]nothing&latitude=39.961178&longitude=-82.998795&radius=80467';
var response = '';
var data = '';

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
      // specify options here
    });
  });





$(".searchButton").click(search);
function search (event) {
    event.preventDefault();

    fetch(testWebSite)
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        console.log(data)
        console.log(data.name)
    }); 
};

