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
        selectCamera = `<label  id="camera-label" for="camera" class="has-text-white is-size-4">Select a Camera</label>
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
        selectCamera = `<label id="camera-label" for="camera" class="has-text-white is-size-4">Select a Camera</label>
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

    $('#select-camera').append(selectCamera);
    $('#camera').change(function () {

        cameraChoice = this.value;
        console.log(cameraChoice);

        appendSelectDate();
    })
}

function appendSelectDate() {

    $('#datepickerlabel').remove();
    $('#datepicker').remove();

    selectDate = `<label id="datepickerlabel" class="has-text-white is-size-4">Select a Date</label><input placeholder="Select Date" type="text" id="datepicker">`;
    $(function () {
        $('#datepicker').datepicker({ maxDate: currentDay});
    
    })

    $('#select-date').append(selectDate);
    $('#datepicker').change(function () {
        dateChoice = this.value;
        split = dateChoice.split('/').reverse().join('-');

        console.log(split);
        console.log(dateChoice);
        getMarsRoverPic();
    })
}

function getMarsRoverPic() {

    $('.rover-pictures').remove();

    let roverLink = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + roverChoice + '/photos?earth_date=' + split + '&camera=' + cameraChoice + '&api_key=C6yhxCi7h13IgKJLsLTe3ENPcZmasGYTBSuP3B0q';
    console.log(roverLink);

    fetch(roverLink)
        .then(function (roverResponse) {
            return roverResponse.json();
        })
        .then(function (roverData) {
            console.log(roverData);
            
            if (roverData.photos.length == 0) {
                noPhotoError = `<div id="rover-pictures" class="p-1 is-flex is-justify-content-center is-align-items-center has-text-white is-size-1 rover-pictures">No Images Avalible. Please Select A Different Date.</div>`
                $('#rover-pic-container').append(noPhotoError);
                return;
            }
            for (let i = 0; i < roverData.photos.length; i++) {
                sol = roverData.photos[0].sol;
                console.log(sol);
                solString = sol.toString();
                console.log(solString);
                
                roverContainer = `
            <div id="rover-pictures" class="columns rover-pictures">
            <div class="column has-text-white">
            <div class="is-size-2">Rover Name: ${roverData.photos[i].rover.name}</div>
            <div>Camera: ${roverData.photos[i].camera.full_name}</div>
            <div>Launch Date: ${roverData.photos[i].rover.launch_date}</div>
            <div>Landing Date: ${roverData.photos[i].rover.landing_date}</div>
            <div>Sol (Mar's Date): ${solString}</div>
            </div>
            <div class="column is-flex is-justify-content-center">
            <img src="${roverData.photos[i].img_src}" id="rover-picture${i}" alt="picture of rover" class="rover-image">
            </div>`
            
            $('#rover-pic-container').append(roverContainer);
            
            
            }
        })
appendToTheTopButton();
}

function appendToTheTopButton() {
    toTheTopButton = `<button id="to-the-top" class="button is-warning"><a class="has-text-black" href="#top-of-page">Go To Top Of Page</a></button>`;
    $('#to-the-top-button').append(toTheTopButton);
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