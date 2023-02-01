let currentDay = dayjs().format('MM/DD/YYYY');
let roverChoice;
let cameraChoice;
let dateChoice;
let split;
let roverContainer;
let roverData;
console.log(currentDay);

let pictureLink = 'https://api.nasa.gov/planetary/apod?api_key=C6yhxCi7h13IgKJLsLTe3ENPcZmasGYTBSuP3B0q';

init();

function init() {

fetch(pictureLink)
.then(function (pictureResponse) {
    return pictureResponse.json();
})
.then(function (pictureData) {
    console.log(pictureData);
    console.log(pictureData.title);
    console.log(pictureData.explanation);
    console.log(pictureData.url);
    $('#pod-title').text(pictureData.title);
    $('#pod-description').text(pictureData.explanation);
    $('#picture-of-the-day').attr('src', pictureData.url);
})
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
    $('#camera').change(function () {

        cameraChoice = this.value;
        console.log(cameraChoice);

        appendSelectDate();
    })
}

function appendSelectDate() {

    $('#datepickerlabel').remove();
    $('#datepicker').remove();

    selectDate = `<label id="datepickerlabel">Date: <input class="selector" placeholder="Select Date" type="text" id="datepicker"></label>`;
    $(function () {
        $('#datepicker').datepicker({ maxDate: currentDay});
    
    })

    $('#input-info').append(selectDate);
    $('#datepicker').change(function () {
        dateChoice = this.value;
        split = dateChoice.split('/').reverse().join('-');

        console.log(split);
        console.log(dateChoice);
        getMarsRoverPic();
    })
}

function getMarsRoverPic() {
    console.log(roverChoice);
    console.log(cameraChoice);
    console.log(dateChoice);
    let roverLink = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + roverChoice + '/photos?earth_date=' + split + '&camera=' + cameraChoice + '&api_key=C6yhxCi7h13IgKJLsLTe3ENPcZmasGYTBSuP3B0q';
    console.log(roverLink);

    fetch(roverLink)
        .then(function (roverResponse) {
            return roverResponse.json();
        })
        .then(function (roverData) {
            console.log(roverData);
            console.log(roverData.photos[0].img_src);
            console.log(roverData.photos[0].rover.name);
            console.log(roverData.photos[0].camera.full_name);
            console.log(roverData.photos[0].sol);
            console.log(roverData.photos[0].rover.landing_date);
            console.log(roverData.photos[0].rover.launch_date);

            for (let i = 0; i < roverData.photos.length; i++) {
                roverContainer = `
            <div class="col-sm-6">
            <div>Rover Name: ${roverData.photos[i].rover.name}</div>
            <div>Camera: ${roverData.photos[i].camera.full_name}</div>
            <div>Launch Date: ${roverData.photos[i].rover.launch_date}</div>
            <div>Landing Date: ${roverData.photos[i].rover.landing_date}</div>
            <div>Sol (Mar's Date): ${roverData.photos[i].rover.sol}</div>
            </div>
            <div class="col-sm-6">
            <img src="${roverData.photos[i].img_src}" id="rover-picture${i}" alt="picture of rover">
            </div>`
            
            $('#rover-pic-container').append(roverContainer);
            
            
            }
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