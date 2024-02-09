# Mushroom Mapper

## Overview

Mushroom Mappers is a project intended to provide an interactive application for foraging enthusiasts to share images, thoughts and research on mushrooms they have found in their local area.

![An image of the finished website on different devices](documentation/space-quiz-homepage-devices.png)

Please use the link below to view the live, deployed site:

[Space Quiz - Pilot Assessment Live Site](https://tomlidev.github.io/Space-Quiz-Pilot-Assessment/)

## CONTENTS

- [Mushroom Mapper](#mushroom-mapper)
  - [Overview](#overview)
  - [CONTENTS](#contents)
  - [User Experience Design](#user-experience-design)
    - [The Strategy Plane](#the-strategy-plane)
      - [Site Goals](#site-goals)
      - [Agile Planning](#agile-planning)
        - [Epics](#epics)
        - [User Stories](#user-stories)
    - [The Scope Plane](#the-scope-plane)
    - [The Structure Plane](#the-structure-plane)
      - [Features](#features)
      - [General Features On All pages](#general-features-on-all-pages)
      - [Nav Bar](#nav-bar)
      - [Footer](#footer)
      - [Register/Sign Up Page](#registersign-up-page)
      - [Homepage](#homepage)
      - [Post Page](#post-page)
      - [404 Error Page](#404-error-page)
    - [The Skeleton Plane](#the-skeleton-plane)
      - [Wireframes](#wireframes)
      - [Datebase Design](#database-design)
      - [Security](#security)
    - [The Surface Plane](#the-surface-plane)
      - [Design](#design)
        - [Colour Scheme](#colour-scheme)
        - [Typography](#typography)
        - [Imagery](#imagery)
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
  - [Acknowledgements](#acknowledgements)

## User Experience Design

### The Strategy Plane

#### Site Goals

The application is designed to be an engaging and social platform for mushroom foraging enthusiasts can share pictures and ideas on what they have found out in the wild. 

The site aims to be fun, easy to use and promote the values of safe, sustainable foraging whilst highlighting the importance of caution and sharing of accurate, reliable information to avoid mishaps. 

#### Agile Planning

This application was designed and built in line with Agile methodologies, with small, incremental features developed over controlled sprints. There were XXXXXX sprints spaced out XXX weeks. 

Each feature was assigned an epic and individually prioritised following the MoSCoW rating system, being designated Must have, Should have, Could have and Won't have. These designations were assigned based on percieved requirements of the site users and the effort required to develop them. Features were developed with Must have's being completed first, and so on, to ensure that the most useful and fundamental aspects of the site were built first, with 'bells and whistles' features being completed later depending on the time left. 

A kanban board was used to track the progress and manage the development lifecycle, this can be viewed here: XXXXX

#### Epics

The project had 6 Epics which encompass the main development effort for Mushroom Mappers. Each epic includes user stories for specific functionalities and site requirements.

EPIC 1 - Project Set Up

This epic incorporates the user stories requird for the initial project set up and initial deployment. This epic and the user stories within was the first to be completed.

EPIC 2 - Create Project Documentation

An ongoing epic until project completion, although this does include user stories in the traditional Agile sense, I felt it was important and useful to have a note to keep aspects such as project secrets hidden as necessary throughout the project. Due to issues with reliability several different workspaces were created during the development of this project, therefore the reminder to keep relevant pieces of information secret was useful. 

EPIC 3 - CRUD User Profile

This epic includes the functionality and user stories needed for user to create, read, update and delete certain aspects of their user profile from within the application itself. 

EPIC 4 - Authentication: Sign in/out and registration

A key epic, this includes the user stories to allow a user to create their initial profile and access the full site, sign out and sign in, whilst also providing security and control and users accessing and managing their own accounts. This epic also includes specifying and controlling what content and functionalities an authenticated, signed in user can access versus a 'generic' user who has not yet created an account.

EPIC 5 - CRUD User Finds

This epic includes the user stories for users creating, reading, updating and deleting their own finds on the application. Finds are intended to be the key, main content of the application, which users will create, read, like and generally interactive with. To achieve these in a user friendly, appealing way user stories such as users being able to view a single, filtered page of their own finds was also included in this epic. 

#### User Stories

The below is a list of the user stories linked and required to achieve completion of each Epic, with a brief one line description of the epic itself. Each user story was created with a specific list of tasks which act as acceptance criteria and facilitate an objective determination on whether the functionality was developed, and user story completed, to the required level. Some user stories do not have a more detailed acceptance criteria as this is not necessary, e.g. create Readme. 

EPIC 1 - Project Set Up
As a Developer I will perform the initial project set up so I can continue and complete the development of this project

- Install Django and other necessary libraries
- Ensure env.py and other sensitive information kept secure
- Succesfully deploy via Heroku early prior to main development effort


EPIC 2 - Project Documentation
As a developer I will create the project documentation so that other developers and interested parties can understand the project and its purpose in more detail and create their own if desired.

- Write and maintain project Readme
- Write and maintain testing doc
- Create github issue request, epics and project board whilst maintain clear commit messages thorughout dev lifecycle.

EPIC 3 - CRUD User Profile
As a User I can Create/register, read, update and delete my profile so I can Log in to the site with my details and information saved, amend details as needs be and remove my account completely if I no longer want to use it, without the involvment of an admin.

- Create User Account
- Read/View User Profile
- Edit/Update User Profile

EPIC 4 - Authentication: Sign in/out and registration
As a User or Admin I can log in and out of the site so I can ensure details are kept secure and access to the site is controlled.

- Sign In
- Sign Out
- Control site access based on authentication

EPIC 5 - CRUD User Finds

As a User I can Create, read, update and delete my finds so I can share my finds and information, update information I have already shared and delete any information I no longer want to be public.

- User Create Finds
- User Update/Edit Finds
- User read Finds
- User Delete Finds

### The Scope Plane

- Home page. A visually attractive home page capturing the core essence of thee Mushroom Mappers site. 

- Ability to perform CRUD functionality on Finds. Users and admins will have the ability to create, read, update and delete finds. 

- Authentication/Role based functionality. Different functionality and abilities will be available to users who have registered and logged in to their account, unauthenticated users will have a more limited option of functionality to encourage sign up and long term engagement with the site. 

- Account Management. Users will have the ability to manage certian aspects of their account themselves without the need for admin/super user involvement. 

- Responsive Design. The application will resize and maintain relevant functionality across all modern device screen sizes. 

### The Structure Plane

### Features

### General Features On All pages

#### Nav Bar

Every page will retain the same navigation bar across the top of the screen. This will provide links/options for:

All users:
Home - Return to home page
Search - Bar to search desired content

Unauthenticated User:
Register - Redirect to a signup.html page providing a form to create an account

Authenticated/logged in user
Home - Return to home page
View Account - Display details of the users account with some options for account management
Logout - Display logout.html page to confirm account log out and return to homepage
Search - Bar to search desired content

![Image of the Nav Bar, found at the top of all pages](documentation/nav-bar.png)

#### Footer

Every page has the same footer bar comprising icon links to Facebook, Instagram, Twitter and Linkedin, with Made by Mushroom Mappers just hovering aboe the icons. This will remain the same throughout site navigation for all users. 

![Image of the footer, found at the bottom of all pages](documentation/footer.png)

### Register/Sign Up Page

To access the site each user will be required to create an account. This page will prompt them to enter their name, email address and create a password. Once these steps have been succesfully carried out the user will see a message confirming account creation and will be allowed to access the main site.

### Homepage

All users will be able to see a home page. 

After logging in the user will be presented with the homepage. This will comprise a list of the latest posts with some of the brief key pieces of information shown against each. Each post will have a link prompting the user to view the full post details. Each post may have a small thumbnail like image presented against it on the homepage, however this will require testing to ensure that different image sizes, resolutions etc don't result in a messy homepage.

Map link per post?

![An image of the homepage on different devices](documentation/space-quiz-homepage-devices.png)

### Find Details Page

If a user clicks into a post they will be presented with the full details of that post. This will comprise a larger image of the find on the left of the page, with the post title, creator, created date displayed on the right. Below these pieces of information will be the full text of the post itself. Each post will include a link to view the location of the find on Google maps.

### Create Find Page

### View Account Page

### 404 Error Page

The 404 error page will be shown if there is an error somewhere in the navigation/direction in using the page.

This will incorporate the nav bar and footer links as all the other pages. Centrally, a simple message will inform the user that this is the 404 error page with a link to take the user back to the home page.

![An image of the 404 error page shown on different devices](documentation/error-page-devices.png)

### The Skeleton Plane

#### Wireframes

Please use the links below to view the relevant wireframes, both desktop and mobile for each page.

[Homepage Wireframes](documentation/homepage-wireframe.PNG)

[Create Find Page Wireframe](documentation/create-find-wireframe.PNG)

[View Finds Page Wireframe](documentation/view-finds-wireframe.PNG)

[Find (Individual) Detail Wireframe](documentation/find-detail-wireframe.PNG)

[404 Error page Wireframe](documentation/wireframe-error-page.png)

#### Database Design

#### Security

### The Surface Plane

#### Design

#### Colour Scheme

As a site dedicated to a natural outdoor pursuit, I will use greens, browns and blues in my colour scheme. Care will be taken to ensure that their is sufficient contrast between text and any background colours to support easy reading. Similarly, many mushrooms are not particularly colourful, so care will need to be taken to ensure images of mushrooms themselves are not overpowered by background or theme colours. As autumn is typically the time of year for greatest mushroom adundance I may also use dark reds and yellows.

![Image of Color Palette](documentation/spacequiz-colour-pallette.png)

#### Typography

San's serif is used as the back-up font if FONT cannot be loaded for any reason.

#### Imagery

Apart from some relatively small icons and logos the site imagery itself will be kept minimal as to maximise focus on attention on users images of mushrooms.

Mushroom Mapper is designed to be an easy to use application for foraging enthusiasts to share information about their mushroom finds and share advice on identification. Many thousands of people in Britain enjoy foraging, however there is a great deal of uncertainty when it comes to mushrooms which are safe to eat and which should be left alone. This application is intended to help bridge that gap .

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

HTML, CSS and Python were used. 

### Libraries and External Sources

- Git - Version control.

- Github - To save and store code for the website itself.

- Code anywhere - The workspace and IDE for producing the site.
- MS Visual Studio - Later replaced Code Anywhere due to reliability. 

- Bootstrap - For styling and site components.

- Django - For site construction.

- Crispy Forms - For form styling and display.

- Lucidchart - For wireframes and models.

- Coolors - Colour Palette

- Google fonts - For imported fonts

- Font Awesome - For header and footer icons

- Google Developer Tools - For troubleshooting/bug resolution and testing responsiveness

- W3C Validators - For checking validity of HTML and CSS.

- JSHint - Used to check the validity and quality of Javascript.

- Am I Responsive? - To create images of website on range of device screens.

## Deployment

This was website was deployed using Heroku. Instructions to do this are:

1. Go to Github and Log in (or sign up).

2. Find the repository for this project, TomLiDev/mushroom-mappers.

3. Copy, (or clone as below) the code from the repository into your IDE.

4. In your IDE, install the necessary project dependencies by running pip install -r requirements.txt

5. Go to Heroku, and log in (or sign up)

6. Navigate to the Heroku Dashboard and click "Create new app".

7. Enter a name.

8. From the "Add buildpack" option, add the Python buildpack and save

9. Add the node.js buildpack and save.

10. Select Github from the deployment method.

11. Find the repository name you have given to your version of this project, click connect. 

12. Scroll to the next section and select automatic deploys, choosing to enable automatic deploys.

13. Save and commit your code in your IDE.

14. Check your commit has gone through and the Heroku automatic deployment has been successful.


## Local Development

### How to fork

1. Log in (or sign up) to Github.

2. Go to the repository for this project, TomLiDev/mushroom-mappers.

3. Click the Fork button in the top right corner.

### How to clone

1. Log in (or sign up) to GitHub.

2. Go to the repository for this project, TomLiDev/mushroom-mappers.

3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.

4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.

5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing

Please see seperate testing.md for full details.

[Testing](TESTING.md)

## Credits

### Code and Information Used

The following sites were used for information/code:

- https://www.djangoproject.com/start/overview/ - The official Django documentation was referred to at multiple points throughout the project.

- https://www.pythontutorial.net/django-tutorial/  - Useful concise information for understanding how to retrieve existing database items and edit/delete them via forms. 

- https://www.fullstackpython.com/django-utils-text-slugify-examples.html - Read for understanding the slugify function for converting a title into a slug-friendly string.

- https://alphacoder.xyz/image-upload-with-django-and-cloudinary/ - Information for setting up form to take a user image attachment and upload to Cloudinary. 

####

## Acknowledgements

- Graeme Taylor - My Code Institute Mentor

- My family - For your help in testing and providing feedback.
