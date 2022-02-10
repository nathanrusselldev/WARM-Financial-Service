
var APIKey = "1UXuY3WPR1BOB2lzqLRluQjWJl1YCHEb08mn1e7t"
var oAuthKey = "TcwjOmmmh90TOj6RYjla3gtWFubb4oHXPqDxDbkU"
var testWebSite = "https://trashnothing.com/api/v1.2/posts/search?api_key=1UXuY3WPR1BOB2lzqLRluQjWJl1YCHEb08mn1e7t&search=couch&types=offer&sources=trashnothing&latitude=39.961178&longitude=-82.998795&radius=80467"


$(".searchButton").click(search)

function search(event) {
    console.log("this buttons works")
    event.preventDefault()
    fetch (testWebSite)
        .then(function(response)
        {console.log(response)
        return response.json()
})
    .then(function(data){
        console.log(data)
        
    $(".productImage").attr("src", data.posts[0].photos[0].url)
    $(".Item").text(data.posts[0].content)

    
})

}
