# Mushroom Mapper

## Overview

This project was intended to provide an interactive appliacaton for foraging enthusiasts to share images, thoughts and research on mushrooms they have found in their local area.

![An image of the finished website on different devices](documentation/space-quiz-homepage-devices.png)

Please use the link below to view the live, deployed site:

[Space Quiz - Pilot Assessment Live Site](https://tomlidev.github.io/Space-Quiz-Pilot-Assessment/)

## CONTENTS

- [Mushroom Mapper](#mushroom-mapper)
  - [Overview](#overview)
  - [CONTENTS](#contents)
  - [User Experience](#user-experience)
    - [User Stories](#user-stories)
      - [First Time Visitors](#first-time-visitors)
      - [Return Visitor](#return-visitor)
  - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
    - [Wireframes](#wireframes)
  - [Features](#features)
    - [General Features On All pages](#general-features-on-all-pages)
      - [Header/Nav Bar](#headernav-bar)
      - [Footer](#footer)
    - [Register/Sign Up Page](#registersign-up-page)
    - [Homepage](#homepage)
    - [Post Page](#post-page)
    - [404 Error Page](#404-error-page)
  - [Future Implementations/Plans](#future-implementationsplans)
    - [Accessibility](#accessibility)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Libraries and External Sources](#libraries-and-external-sources)
  - [Deployment](#deployment)
  - [Local Development](#local-development)
    - [How to fork](#how-to-fork)
    - [How to clone](#how-to-clone)
  - [Testing](#testing)
  - [Credits](#credits)
    - [Code Used](#code-used)
      - [](#)
      - [Fisher-Yates Shuffle Algorithm](#fisher-yates-shuffle-algorithm)
  - [Acknowledgements](#acknowledgements)

## User Experience

Mushroom Mapper is designed to be an easy to use application for foraging enthusiasts to share information about their mushroom finds and share advice on identification. Many thousands of people in Britain enjoy foraging, however there is a great deal of uncertainty when it comes to mushrooms which are safe to eat and which should be left alone. This application is intended to help bridge that gap .

Key Features:

- Main page - A home page showing all posts users have created.

- Creating/Editing/Deleting Posts - Users and site admins will be able to create and edit posts so that finds and information can be shared whilst also ensuring no deliberately false or offensive information is published.

- Location/Map View - Users will have the ability to see geographically where certain things have been found to build an understanding on the habitat of certain species and encourage social meet ups between foragers.

- Comment/Like/Love/Share Posts - Users and admins will have the ability to interact with others posts to encourage and show support, whilst also spreading information about safe foraging practises.

### User Stories

#### First Time Visitors

As a first time visitor I want to understand how to play the quiz and have the ability to start the quiz quickly and easily. I want to know which questions I get right and wrong, if wrong, I want to know what the correct answer was. Once completed, I want to know my overall score and how that compares to others.

I want a prompt to come back and play again in the future.

#### Return Visitor

As a return visitor I have to be able to easily check my past score against other players. I want to be able to start a new quiz without having to read through the instructions. Ideally I want to have a variety of questions so that when I come back to do the quiz again I am not getting the same questions. The ability to choose a different difficulty would also keep the game interesting.

## Design

### Colour Scheme

As a site dedicated to a natural outdoor pursuit, I will use greens, browns and blues in my colour scheme. Care will be taken to ensure that their is sufficient contrast between text and any background colours to support easy reading. Similarly, many mushrooms are not particularly colourful, so care will need to be taken to ensure images of mushrooms themselves are not overpowered by background or theme colours. As autumn is typically the time of year for greatest mushroom adundance I may also use dark reds and yellows.

![Image of Color Palette](documentation/spacequiz-colour-pallette.png)

### Typography

San's serif is used as the back-up font if FONT cannot be loaded for any reason.

### Imagery

Apart from some relatively small icons and logos the site imagery itself will be kept minimal as to maximise focus on attention on users images of mushrooms.

### Wireframes

Please use the links below to view the relevant wireframes, both desktop and mobile for each page.

[Homepage Wireframes](documentation/wireframe-index.png)

[Username Wireframe](documentation/wireframe-index.png)

[Quiz Start Wireframe](documentation/wireframe-quiz-start.png)

[Results Wireframe](documentation/wireframe-results.png)

[Leaderboard Wireframe](documentation/wireframe-results.png)

[404 Error page Wireframe](documentation/wireframe-error-page.png)

## Features

### General Features On All pages

#### Header/Nav Bar

Every page has the same navigation bar at the top, comprising a planet Earth icon and the word home in the top left. This is a link which takes the user back to the home page. In the right of the bar the user has the option to jump to the Leaderboard, I may also include a call to action such as - sign up for competitions/stay informed, which will bring the user to a sign up. Both these links will be made up of icons and text as a link to the relevant pages. I did experiment with just using an Icon or just using text but I feel the combination looks the best and provides the best navigation for the user.

![Image of the Nav Bar, found at the top of all pages](documentation/nav-bar.png)

#### Footer

Every page has the same footer bar comprising icon links to Facebook, Instagram, Twitter and Linkedin.

I did originally have this footer in a black bar running the length of the bottom of the screen, but this looked a little odd so I tried the icons simply floating as the bottom and I think this looks much nicer and cleaner.

![Image of the footer, found at the bottom of all pages](documentation/footer.png)

### Register/Sign Up Page

To access the site each user will be required to create an account. This page will prompt them to enter their name, email address and create a password. Once these steps have been succesfully carried out the user will see a message confirming account creation and will be allowed to access the main site.

### Homepage

After logging in the user will be presented with the homepage. This will comprise a list of the latest posts with some of the brief key pieces of information shown against each. Each post will have a link prompting the user to view the full post details. Each post may have a small thumbnail like image presented against it on the homepage, however this will require testing to ensure that different image sizes, resolutions etc don't result in a messy homepage.

Map link per post?

![An image of the homepage on different devices](documentation/space-quiz-homepage-devices.png)

### Post Page

If a user clicks into a post they will be presented with the full details of that post. This will comprise a larger image of the find on the left of the page, with the post title, creator, created date displayed on te right. Below these pieces of information will be the full text of the post itself. Each post will include a link to view the location of the find on Google maps.

### 404 Error Page

The 404 error page will be shown if there is an error somewhere in the navigation/direction in using the page.

This will incorporate the nav bar and footer links as all the other pages. Centrally, a simple message will inform the user that this is the 404 error page with a link to take the user back to the home page.

![An image of the 404 error page shown on different devices](documentation/error-page-devices.png)

## Future Implementations/Plans

In the future I would like to incorporate:

### Accessibility

This site has been built to be as accessible as possible, specifically:

- All images have alt text attributes and all links have aria labels for use by screen readers.

- The colour scheme has been chosen to ensure a good level of contrast is maintained for text across the site.

- Semantic markup has been used throughout.

- Including hover states to aid navigation.

## Technologies Used

### Languages Used

HTML, CSS and Javascript are used.

### Libraries and External Sources

- Git - Version control.

- Github - To save and store code for the website itself.

- Code anywhere - The workspace and IDE for producing the site.

- Lucidchart - For wireframes and models.

- Coolors - Colour Palette

- Google fonts - For imported fonts

- Font Awesome - For header and footer icons

- Google Developer Tools - For troubleshooting/bug resolution and testing responsiveness

- W3C Validators - For checking validity of HTML and CSS.

- JSHint - Used to check the validity and quality of Javascript.

- Am I Responsive? - To create images of website on range of device screens.

## Deployment

This was website was deployed using Github pages. Instructions to do this are:

1. Go to Github and Log in (or sign up).

2. Find the repository for this project, TomLiDev/Space-Quiz-Pilot-Assessment.

3. Click on the Settings link.

4. Click on the Pages link in the left hand side navigation bar.

5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.

6. Click Save. Your live Github Pages site is now deployed at the URL shown.

## Local Development

### How to fork

1. Log in (or sign up) to Github.

2. Go to the repository for this project, TomLiDev/Space-Quiz-Pilot-Assessment.

3. Click the Fork button in the top right corner.

### How to clone

1. Log in (or sign up) to GitHub.

2. Go to the repository for this project, TomLiDev/Space-Quiz-Pilot-Assessment.

3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.

4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.

5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

Please see seperate testing.md for full details.

[Testing](TESTING.md)

## Credits

### Code Used

The following sites were used for information/code:

####

#### Fisher-Yates Shuffle Algorithm

https://stackoverflow.com/questions/59810241/how-to-fisher-yates-shuffle-a-javascript-array

## Acknowledgements

- Graeme Taylor - My Code Institute Mentor

- My family - For your help in testing and providing feedback.
