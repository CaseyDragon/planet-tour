# Project Overview


## Project Description

For this project, I built a simple tour of our Solar System. After being welcomed to the universe, the user is prompted to enter their name and start a tour of the planets. They are taken to a display of all the planets where they can click on a planet and visit a page with iformation about each planet. A back button always the user to go back and choose another planet. This solar system was built with information from the Planets info api by newbapi on rapidapi.com

## Project Links

- [github repo](https://github.com/CaseyDragon/planet-tour.git)
- [deployment](https://planet-tour-livid.vercel.app/)
- [demo recording]()

## Wireframes & React Component Hierarchy

Upload images of wireframes and component hierarchy to cloudinary (or similar) and add the link here with a description of the specific wireframe.

- [wireframes]()
- [react architecture]()

Define the the React components and the architectural design of your app.

### MVP/PostMVP

MVP of this project is a simple flow from the user entering and navigating to each planet through a link from a list of planets. PostMVP with focus on styling and passing names through state to the header. This will also include a welcome page with an input field.

#### MVP 
- fetch data from api 
- use data to display a planets page for each planet 
- use data to create a list of divs for the user to choose a planet from

#### PostMVP 

- Add welcome screen for user to enter name
- Add styling so divs look like planets
- use position numbers to put the divs in order
- use state to have a continous header that tells the named user where they are
- create astronaut characters for the user to choose from
- Animate Planets to orbit the sun

## Components


| Component | Description | 
| --- | :---: |  
| App | Contains Router, Api Call, and renders the welcome and astroname components | 
| Welcome | contains a header that includes user name and planet | 
| AstroName | Allows the user to enter their name which is passed to Welcome|
| RocketButton | an animated button |
| GoBack | an another animated button |
| SolarSystemView | takes api information and maps to create divs that are linked to planet pages|
| Planet | this component creates a page for each planet that showcases all the specific information for that planet from the api|

## Time Frames
 
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries

 - axios for api usage
 - Bootswatch for theme
 - semantic ui for buttons and icons
 - favicon.io for favicon
 - React Router for navigation


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 The largest issue I had was learning to pass state through different components. learning to use useParams and where to put each state that I needed to pass was very helpful. Many youtube videos and all of the teachers were helpful with this issue for me.
 Another issue was putting my Solar System in the correct order. I ultimately managed this by using flex box and giving each planet an order number and hiding the links to the planet components. 
 One last issue has been hiding my api key, all the typical ways to do this have not worked and as of right now this is currently still an issue.

