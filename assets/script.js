
var APIKey = "1UXuY3WPR1BOB2lzqLRluQjWJl1YCHEb08mn1e7t"
var ownAPI = "aefceef95152822709d653ad313d9efa"
var oAuthKey = "TcwjOmmmh90TOj6RYjla3gtWFubb4oHXPqDxDbkU"
var testWebSite = "https://trashnothing.com/api/v1.2/posts/search?api_key=1UXuY3WPR1BOB2lzqLRluQjWJl1YCHEb08mn1e7t&search=couch&types=offer&sources=trashnothing&latitude=39.961178&longitude=-82.998795&radius=80467"


$(".searchButton").click(search)
$(".searchButton").click(displayWeather)


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

function displayWeather(event) {
    console.log("the weather button works.")
    event.preventDefault()
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=39.961178&lon=-82.998795&units=imperial&appid=" +ownAPI)
    .then(function(weatherResponse) {
    console.log(weatherResponse)
    return weatherResponse.json()
    })
    .then(function(weatherData) {
    console.log(weatherData)
    })
}