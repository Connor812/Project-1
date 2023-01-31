let pictureLink = 'https://api.nasa.gov/planetary/apod?api_key=C6yhxCi7h13IgKJLsLTe3ENPcZmasGYTBSuP3B0q';



let roverLink = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?earth_date=' + date + '&camera=' + camera + '&api_key=C6yhxCi7h13IgKJLsLTe3ENPcZmasGYTBSuP3B0q';



// Fetch link for picture of the day

fetch(pictureLink)
.then(function (pictureResponse) {
    return pictureResponse.json();
})
.then(function (pictureData) {
    console.log(pictureData);
})

// Fetch link for Mars Rover pictures

fetch(roverLink)
.then(function (roverResponse) {
    return roverResponse.json();
})
.then(function (roverData) {
    console.log(roverData)
})