
var APIKey = "1UXuY3WPR1BOB2lzqLRluQjWJl1YCHEb08mn1e7t"
var oAuthKey = "TcwjOmmmh90TOj6RYjla3gtWFubb4oHXPqDxDbkU"
var testWebSite = "https://trashnothing.com/api/v1.2/posts/search?api_key=1UXuY3WPR1BOB2lzqLRluQjWJl1YCHEb08mn1e7t&search=couch&types=offer&sources=trashnothing&latitude=39.961178&longitude=-82.998795&radius=80467"


$(".searchButton").click(search)


function search(event) {
    var scrollList= $(".scrollList")
    scrollList.empty()
    console.log("this buttons works")
    event.preventDefault()
    fetch (testWebSite)
        .then(function(response)
        {console.log(response)
        return response.json()
})
    .then(function(data){
        console.log(data)
     for(let i=0;  i<data.posts.length; i++  ) {   
        if (data.posts[i] != null){
        var productDiv= $("<div>")
        productDiv.attr("class", "product margin")
        var scrollList= $(".scrollList")
        scrollList.append(productDiv)
        var productImageMargin= $("<img>")
        productImageMargin.attr("class","productImage margin")
        productDiv.append(productImageMargin)     
        productImageMargin.attr("src", data.posts[i].photos[0].url)
        var pTag = $("<p>")
        pTag.attr("class","Item margin")
        productDiv.append(pTag)
        pTag.text(data.posts[i].content)}
     }
    
})

}
