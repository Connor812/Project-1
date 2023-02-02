# Journey to Space
By: Connor and Nav

### This was a project assigned by UofT's Full Stack Web Development bootcamp.

## Description

The goal of this project was to develop a webpage from the ground up using at least two server-side APIs. When it came to using open source liabraries, we were advised to use a CSS framework other than Bootstrap: we decided to use Bulma. Another requirement was to use client-side storage to store persistent data, and the page had to be interactive.

When doing some research, a big interest was placed in NASA and what they offered to be used as free API's. 

Api Keys Used:
- Astronomy Picture of the Day (APOD)
- Mars Rover Photos

The most popular website at NASA is the Astronomy Picture of the Day. They even state for it to be the most popular website acroos all federal agencies! With this API key, you are able to view a picture of the galaxy using certain parameters.

The second API was designed to collect data gathered by NASA's 3 rovers called Curiosity, Opportunity, and Spirit on Mars. There are several possible queries that can be made: organized by the sol (Martian rotation or day) on which they were taken, or even the Earth date. Along with querying by date, you are also able to filter results using the type of camera with which it was taken.
The photos that are generated based on the criteria will also present information such as the landing date and launch date.

![Webpage](./assets/images/webpage.png)

#
## User Story
```
AS A Space enthusiast, 
I WANT to be able to select a certain rover, camera and date,
SO THAT I can view the photos captured by that rover on the selected date.
ALSO I WANT to view NASA’s Astronomy picture-of-the-day and if needed, to be able to view previous pictures taken by the date.
```
## Acceptance Criteria
```
GIVEN NASA's API's
WHEN I open the browser
THEN the current "galaxy picture of the day" is displayed
WHEN I click the items in the navigation bar
THEN I am directed to the appropriate section on the page or to a different page
WHEN I scroll down
THEN I can read a description explaining the Mars Rover 
WHEN I click on the "select a rover" button
THEN I am able to select one of the three options
WHEN I make that selection
THEN I am able to select the type of camera from the next pop-up 
WHEN I select a camera
THEN I am able to select a day, month and year from the calender
WHEN all three selections are made
THEN I am presented with photos that rover has taken, along with a description of the camera, launch date, landing date, and sol (Mar's date) next to it
WHEN I get to the bottom of the page
THEN I am able to click a button to bring me to the top
WHEN I click save image
THEN the image and crieteria are saved to local storage
WHEN I click "display saved images"
THEN I am able to view the pictures I saved
```
#
## Deployment Link
[Web Accessibility]()