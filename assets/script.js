
var APIKey = "1UXuY3WPR1BOB2lzqLRluQjWJl1YCHEb08mn1e7t"
var ownAPI = "aefceef95152822709d653ad313d9efa"
var oAuthKey = "TcwjOmmmh90TOj6RYjla3gtWFubb4oHXPqDxDbkU"
var testWebSite = "https://trashnothing.com/api/v1.2/posts/search?api_key=1UXuY3WPR1BOB2lzqLRluQjWJl1YCHEb08mn1e7t&search="+searchInput+"&types=offer&sources=trashnothing&latitude=39.961178&longitude=-82.998795&radius=80467"





function search(event) {
    var searchInput = document.getElementById("searchInput").value
    var radiusInput = document.getElementById("radiusInputBtn").value
   console.log(searchInput)
   console.log(radiusInput)
    var scrollList= $(".scrollList")
    scrollList.empty()
    console.log("this buttons works")
    event.preventDefault()
    var testWebSite = "https://trashnothing.com/api/v1.2/posts/search?api_key=1UXuY3WPR1BOB2lzqLRluQjWJl1YCHEb08mn1e7t&search="+ searchInput +"&types=offer&sources=trashnothing&latitude=39.961178&longitude=-82.998795&radius="+ radiusInput;





    fetch (testWebSite)
        .then(function(response)
        {console.log(response)
        return response.json()
})
    .then(function(data){
        console.log(data)
        if (data.num_posts != 0){
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
     }}
     if (data.num_posts === 0)
       {    var productDiv= $("<div>")
       productDiv.attr("class", "product margin")
       var scrollList= $(".scrollList")
       scrollList.append(productDiv)
       var pTag = $("<p>")
       pTag.attr("class","Item margin")
       productDiv.append(pTag)
       pTag.text("No Results Found")
       }
    
})

}

function displayWeather() {
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=39.961178&lon=-82.998795&units=imperial&appid=" +ownAPI)
    .then(function(weatherResponse) {
    console.log(weatherResponse)
    return weatherResponse.json()
    })
    .then(function(weatherData) {
    console.log(weatherData)
   
    var weatherIcon = weatherData.current.weather[0].icon;
    console.log(weatherIcon);
    $(".weatherTemp").text("Temperature: " + weatherData.current.temp + "°")
    $(".currentWeather").attr( "src", "http://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png")
    $(".weatherPrecip").text(weatherData.minutely[0].precipitation + "% chance of precipitation.")
})
}
$(".searchButton").click(search)
$(".radiusInputBtn").click().value
displayWeather()


// 

