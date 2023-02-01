let currentDay = dayjs().format('MM/DD/YYYY');
let roverChoice;
let cameraChoice;
let dateChoice;
console.log(currentDay);


// let pictureLink = 'https://api.nasa.gov/planetary/apod?api_key=C6yhxCi7h13IgKJLsLTe3ENPcZmasGYTBSuP3B0q';



// let roverLink = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?earth_date=' + date + '&camera=' + camera + '&api_key=C6yhxCi7h13IgKJLsLTe3ENPcZmasGYTBSuP3B0q';






// init();

function init() {
    
}


$('#rover').change(function () {
    roverChoice = this.value;
    console.log(roverChoice);

    $('#camera-label').remove();
    $('#camera').remove();
    $('#datepickerlabel').remove();
    $('#datepicker').remove();

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

        cameraChoice = this.value;
    console.log(cameraChoice);

        appendSelectDate();
    })
}

function appendSelectDate() {

    selectDate = `<label id="datepickerlabel">Date: <input type="text" id="datepicker"></label>`;
    $(function() {
        $('#datepicker').datepicker({maxDate: currentDay});
    })

    $('#input-info').append(selectDate);
    $('#datepicker').change(function() {
        dateChoice = this.value;
        console.log(dateChoice);
        getMarsRoverPic();
    })
}

function getMarsRoverPic() {
  console.log(roverChoice);
  console.log(cameraChoice);
  console.log(dateChoice);
    let roverLink = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + roverChoice + '/photos?earth_date=' + dateChoice + '&camera=' + cameraChoice + '&api_key=C6yhxCi7h13IgKJLsLTe3ENPcZmasGYTBSuP3B0q';
    console.log(roverLink);
  
    fetch(roverLink)
.then(function (roverResponse) {
    return roverResponse.json();
})
.then(function (roverData) {
    console.log(roverData)
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