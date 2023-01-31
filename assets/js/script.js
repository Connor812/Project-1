// let pictureLink = 'https://api.nasa.gov/planetary/apod?api_key=C6yhxCi7h13IgKJLsLTe3ENPcZmasGYTBSuP3B0q';



// let roverLink = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?earth_date=' + date + '&camera=' + camera + '&api_key=C6yhxCi7h13IgKJLsLTe3ENPcZmasGYTBSuP3B0q';






// init();

function init() {
    
}


$('#rover').change(function () {
    let roverChoice = this.value;
    console.log(roverChoice);

    $('#camera-label').remove();
    $('#camera').remove();

    if (roverChoice == 'curiosity') {
        selectCamera = `<label  id="camera-label" for="camera">Select a Camera</label>
        <select name="camera" id="camera" >
            <option disabled selected>Select</option>
            <option value="fhaz">FHAZ</option>
            <option value="rhaz">RHAZ</option>
            <option value="mast">MAST</option>
            <option value="chemcam">CHEMCAM</option>
            <option value="mahli">MAHLI</option>
            <option value="mardi">MARDI</option>
            <option value="navcam">NAVCAM</option>
            </select>`;
    } else {
        selectCamera = `<label id="camera-label" for="camera">Select a Camera</label>
        <select name="camera" id="camera">
            <option disabled selected>Select</option>
            <option value="fhaz">FHAZ</option>
            <option value="rhaz">RHAZ</option>
            <option value="navcam">NAVCAM</option>
            <option value="pancam">PANCAM</option>
            <option value="minites">MINITES</option>
            </select>`;
    }
    appendSelectCamera();
})

function appendSelectCamera() {
    $('#input-info').append(selectCamera);
    $('#camera').change(function() {
    })
}
















// Fetch link for picture of the day

// fetch(pictureLink)
// .then(function (pictureResponse) {
//     return pictureResponse.json();
// })
// .then(function (pictureData) {
//     console.log(pictureData);
// })

// Fetch link for Mars Rover pictures

// fetch(roverLink)
// .then(function (roverResponse) {
//     return roverResponse.json();
// })
// .then(function (roverData) {
//     console.log(roverData)
// })