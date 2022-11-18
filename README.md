# Project Overview


## Project Description

For this project, I built a simple tour of our Solar System. After being welcomed to the universe, the user is prompted to enter their name and start a tour of the planets. They are taken to a display of all the planets where they can click on a planet and visit a page with iformation about each planet. A back button always the user to go back and choose another planet. This solar system was built with information from the Planets info api by newbapi on rapidapi.com

## Project Links

- [github repo](https://github.com/CaseyDragon/planet-tour.git)
- [deployment](https://planet-tour-livid.vercel.app/)
- [demo recording]()

## Wireframes & React Component Hierarchy

- [wireframes](https://whimsical.com/planet-app-75VzrGGsRrQWmJ61dL1J8w)
- [react architecture](https://whimsical.com/hierarchy-T2i5bCywzh1qbWmcByzuWU)



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
| Initial set up | H | 0.5hrs| 0.5hrs | 0.5hrs |
| Building App page | H | 1hrs| 2hrs | 2hrs |
| Building Welcome | H |  .5 hrs | .25hrs | .25hrs |
| AstroName | L | .5hrs | 1hr | 1hr |
| SolarSystem-build | H | 0.5hr | 0.25hr| 0.25hr |
| SolarSystem- add API | H | 1hr | 0.25 | 0.25 |
| Planet- build | H | 1 hr | 0.25hr | 0.25hr |
| Planet- add API | H | 1 hr | 8 hrs | 8hrs |
| Planets- styled & orderes| L | 2 hrs | 1 hr | 1hr |
| Navigation | H | 2 hrs | 2 hrs | 2 hrs|
| Other styling | L | ? | 3 hrs | 3 hrs|
| Total |  | 10 hrs| 18.5hrs| 24hrs? |

## Additional Libraries

 - axios for api usage
 - Bootswatch for theme
 - semantic ui for buttons and icons
 - favicon.io for favicon
 - React Router for navigation


## Code Snippet

```
//this section is the individual planets and was a major stumbling block for me, Im very happy with this piece working
<div className="planetFacts">
                <div className="topRow">
                    <div className='picture'><img src={rock.imgSrc[0].img} alt='planet' /></div>
                    <div className="planetNumber"><p className='number'>{rock.planetOrder}</p><p>Planet Position</p></div>
                </div>
                <div className='bottomRow' >
                    <div className='facts'> {rock.description}</div>


```

## Issues and Resolutions
 The largest issue I had was learning to pass state through different components. learning to use useParams and where to put each state that I needed to pass was very helpful. Many youtube videos and all of the teachers were helpful with this issue for me.
 Another issue was putting my Solar System in the correct order. I ultimately managed this by using flex box and giving each planet an order number and hiding the links to the planet components. 
 One last issue has been hiding my api key, all the typical ways to do this have not worked and as of right now this is currently still an issue.

