# Mushroom Mappers - Testing

## Testing

Testing was conducted at several stages throughout the development using Google Chrome Developer tools and later W3C validators.

Early issues identified in meetings with my mentor were:

- Maintaining good comments and document strings throughout the code.
- Ensuring views were using correct/relevant data from models to fulfill desired function.
- Configuring Cloudinary storage and static files correctly to ensure desired presentation and rendering on deployed application.

Later issues on first deploying my website, reviewed with my mentor were:

- Having the leaderboard remain updated/changed after receiving values and not reverting back to original.
- Some styling issues where questions with larger answers would overflow the answers section.

## CONTENTS

- [Automated Testing](#automated-testing)
- [W3C Validator](#w3c-validator)
- [Lighthouse Testing](#lighthouse-testing)
- [Wave Testing](#wave-testing)
- [Manual Testing](#manual-testing)
- [First Time Visitors](#first-time-visitors)
- [Return Visitors](#return-visitor)
- [Full Testing](#full-testing)
- [Homepage](#homepage)
- [Rise Page](#rise-page)
- [Reign Page](#reign-page)
- [Legacy Page](#legacy-page)
- [Form Page](#form-page)
- [Thank you Page](#thankyou-page)
- [404 Error Page](#404-error-page)
- [Bugs](#bugs)
- [Solved Bugs](#solved-bugs)
- [Known Issues](#known-issues)

## Automated Testing

### W3C Validator

The W3C validator was used to validate all HTML pages and CSS in the style.css.

- [Screenshot of CSS W3C Validated](documentation/css-w3c-validated.png)
- [Screenshot of index page W3C Validated](documentation/index-w3c.png)
- [Screenshot of username page W3C Validated](documentation/username-w3c.png)
- [Screenshot of quiz start page W3C Validated](documentation/quiz-start-w3c.png)
- [Screenshot of results page W3C Validated](documentation/result-w3c.png)
- [Screenshot of leaderboard W3C Validated](documentation/leaderboard-w3c.png)
- [Screenshot of 404 error page W3C Validated](documentation/error-page-w3c.png)

### Lighthouse Testing

Google chrome Lighthouse tester was used to assess SEO score, accessibility, conformance to best practices and overall performance. Please use the links below to view scores for each page on desktop or mobile:

#### Homepage Desktop Lighthouse Scores

![Screenshot of homepage desktop lighthouse scores](documentation/index-desktop-lighthouse.png)

#### Homepage Mobile Lighthouse Scores

![Screenshot of homepage mobile lighthouse scores](documentation/index-mobile-lighthouse.png)

#### Username page Desktop Lighthouse Scores

![Screenshot of username page desktop lighthouse scores](documentation/username-desktop-lighthouse.png)

#### Username Page Mobile Lighthouse Scores

![Screenshot of username page mobile lighthouse scores](documentation/username-mobile-lighthouse.png)

#### Quiz Start Desktop Lighthouse Scores

![Screenshot of Quiz Start desktop lighthouse scores](documentation/quiz-start-desktop-lighthouse.png)

#### Quiz Start Mobile Lighthouse Scores

![Screenshot of Quiz Start mobile lighthouse scores](documentation/quiz-start-mobile-lighthouse.png)

#### Results Page Desktop Lighthouse Scores

![Screenshot of Results Page Desktop lighthouse scores](documentation/result-desktop-lighthouse.png)

#### Results Page Mobile Lighthouse Scores

![Screenshot of Results Page mobile lighthouse scores](documentation/result-mobile-lighthouse.png)

#### Leaderboard Desktop Lighthouse Scores

![Screenshot of Leaderboard desktop lighthouse scores](documentation/leaderboard-desktop-lighthouse.png)

#### Leaderboard Mobile Lighthouse Scores

![Screenshot of Leaderboard mobile lighthouse scores](documentation/leaderboard-mobile-lighthouse.png)

#### 404 Error Page Desktop Lighthouse Scores

![Screenshot of Error Page desktop lighthouse scores](documentation/error-page-desktop-lighthouse.png)

#### 404 Error Page Mobile Lighthouse Scores

![Screenshot of 404 Error Page Mobile lighthouse scores](documentation/error-page-mobile-lighthouse.png)

#### Findings and Actions

Overall I am very pleased with the Lighthouse scores for my pages. Some of the mobile pages has lower scores for performance, which seemed to be related to the size of the background image. I did consider changing this, however the background was already in a webp format, and worked very well with the overall style and colour scheme. I therefore kept the background as it was only a minor issue on some of the pages from a mobile view.

The vast majority of the scores however are 100% or extremely close to, so I am pleased that the work put into accessibility and performance has paid off across the vast majority of the pages.

In the future I would look at potentially scaling back the background for smaller screen sizes in some way, but from initial investigation this had major impacts on the over all look and feel of the pages, so was not something I could work into the scope of this project.

### WAVE Testing

Each page was assessed using the WAVE accessibility tool. Every page passed without any errors, please use the links below to view the scores for each page:

- [Homepage WAVE Test](documentation/index-wave.png)
- [Username page WAVE Test](documentation/username-wave.png)
- [Quiz Start WAVE Test](documentation/quiz-start-wave.png)
- [Result page WAVE Test](documentation/result-wave.png)
- [Leaderboard WAVE Test](documentation/leaderboard-wave.png)
- [404 page WAVE Test](documentation/error-page-wave.png)

A warning which was raised during the wave testing was that the pages used h2 elements instead of h1. As this was a relatively simple change I replaced the h2 elements with h1's where necessary.

Some of the other pages have similar warnings where the WAVE program thought that text was a possible h2, and should have been made as such, but these were for small pieces of text such as "score" inside the final score box, so semantically I didn't think it made sense to make these headings when they are more similar to labels.

The wave testing also flagged the "check leaderboard" button on the results page as redundant, as there was the same link the nav bar, but I kept this in as I felt it was good UX, and I didn't want to change the nav bar purely for one page.

No errors were raised on any page.

## Manual Testing

### Testing User Stories

#### First Time Visitors

| Aim                                                 | How does the site achieve this?                                                                                                                                                                                                   |
| :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Find out how to play the game                       | The how to play option, accessible from the home page, gives clear instruction on how to play the game                                                                                                                            |
| Start the quiz easily                               | The quiz can be started very easily and quickly from the option on the home screen, or immediately from the the instructions page to save navigating back to the home page                                                        |
| Know which questions I got right and wrong          | Each question highlights the correct answer in green when an answer is clicked on. If the answer that has been clicked is incorrect this is highlighted in red                                                                    |
| Know final score and how I compare to other players | Final score is returned to the player at the end of the quiz with the option to see if that score has been enough to make the leaderboard with a message to confirm whether or not the player has made the leaderboard on viewing |

#### Return Visitor

| Aim                                                    | How does the site achieve this?                                                                                                                                         |
| :----------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Quickly understand if my score is still in leaderboard | Every page has the option to navigate to the leaderboard in the nav bar at the top, players can go to view their previous scores at any time without doing another quiz |
| Start a new quiz                                       | A new quiz can be started from the home screen, or directly from the leaderboard, to save having to go to the home page                                                 |

## Full Testing

Full testing of the website was performed on a Dell optiplex desktop on 25 inch Toshiba and Soundwave monitors, Dell Latitude 5510 14 inch screen laptop, iPad 8th generation, Samsung Galaxy S10, iPhone 14 pro.

Google chrome developer tools was also used to test at a range of different pixel sizes.

Testing was conducted using Google Chrome, MS Edge and Safari.

### Homepage

| Feature/Function    | Expected Outcome                                          | Method of Test    | Result                           | Pass/Fail |
| :------------------ | :-------------------------------------------------------- | :---------------- | :------------------------------- | :-------- |
| NAVBAR              |                                                           |                   |                                  |
| Home Link           | Return/refresh home page on click                         | Clicked link      | Returned to home                 | Pass      |
| Home Link Hover     | Underline appears under text.                             | Hovered over link | Underline appeared               | Pass      |
| Leaderboard Link    | Return/refresh to Leaderboard page on click               | Clicked link      | Returned to Leaderboard page     | Pass      |
| Leaderboard Hover   | Underline appears under text.                             | Hovered over link | Underline appeared               | Pass      |
| FOOTER              |                                                           |                   |                                  |
| Facebook Icon Link  | Opens Facebook in separate browser on click               | Clicked icon      | Opened Facebook in separate tab  | Pass      |
| Instagram Icon Link | Opens Instagram in separate browser on click              | Clicked icon      | Opened Instagram in separate tab | Pass      |
| Twitter Icon Link   | Opens Twitter in separate browser on click                | Clicked icon      | Opened Twitter in separate tab   | Pass      |
| Linkedin Icon Link  | Opens Linkedin in separate browser on click               | Clicked icon      | Opened Linkedin in separate tab  | Pass      |
| HOMEPAGE            |                                                           |                   |                                  |
| Begin! Link         | When clicked user will be directed to username page       | Clicked link      | Redirected to username page      | Pass      |
| How to play Link    | When clicked user will be redirected to instructions page | Clicked link      | Redirected to instructions page  | Pass      |
| Leaderboard Link    | When clicked user will be redirected to Leaderboard page  | Clicked link      | Redirected to Leaderboard page   | Pass      |

### Username Page

| Feature/Function    | Expected Outcome                                                                             | Method of Test    | Result                                                                                          | Pass/Fail |
| :------------------ | :------------------------------------------------------------------------------------------- | :---------------- | :---------------------------------------------------------------------------------------------- | :-------- |
| NAVBAR              |                                                                                              |                   |                                                                                                 |
| Home Link           | Return/refresh home page on click                                                            | Clicked link      | Returned to home                                                                                | Pass      |
| Home Link Hover     | Underline appears under text.                                                                | Hovered over link | Underline appeared                                                                              | Pass      |
| Leaderboard Link    | Return/refresh to Leaderboard page on click                                                  | Clicked link      | Returned to Leaderboard page                                                                    | Pass      |
| Leaderboard Hover   | Underline appears under text.                                                                | Hovered over link | Underline appeared                                                                              | Pass      |
| FOOTER              |                                                                                              |                   |                                                                                                 |
| Facebook Icon Link  | Opens Facebook in separate browser on click                                                  | Clicked icon      | Opened Facebook in separate tab                                                                 | Pass      |
| Instagram Icon Link | Opens Instagram in separate browser on click                                                 | Clicked icon      | Opened Instagram in separate tab                                                                | Pass      |
| Twitter Icon Link   | Opens Twitter in separate browser on click                                                   | Clicked icon      | Opened Twitter in separate tab                                                                  | Pass      |
| Linkedin Icon Link  | Opens Linkedin in separate browser on click                                                  | Clicked icon      | Opened Linkedin in separate tab                                                                 | Pass      |
| Username Page       |                                                                                              |                   |                                                                                                 |
| Enter Name Field    | When clicked placeholder text will clear OR user will get suggestions for previous names     | Clicked in field  | Placeholder text cleared OR given suggestions to select from previous name which populate field | Pass      |
| Start Quiz!         | When clicked user will be redirected to quiz-start page and first question will be presented | Clicked link      | Redirected to quiz-start page and first question loaded                                         | Pass      |

### Instructions Page

| Feature/Function    | Expected Outcome                                    | Method of Test    | Result                           | Pass/Fail |
| :------------------ | :-------------------------------------------------- | :---------------- | :------------------------------- | :-------- |
| NAVBAR              |                                                     |                   |                                  |
| Home Link           | Return/refresh home page on click                   | Clicked link      | Returned to home                 | Pass      |
| Home Link Hover     | Underline appears under text.                       | Hovered over link | Underline appeared               | Pass      |
| Leaderboard Link    | Return/refresh to Leaderboard page on click         | Clicked link      | Returned to Leaderboard page     | Pass      |
| Leaderboard Hover   | Underline appears under text.                       | Hovered over link | Underline appeared               | Pass      |
| FOOTER              |                                                     |                   |                                  |
| Facebook Icon Link  | Opens Facebook in separate browser on click         | Clicked icon      | Opened Facebook in separate tab  | Pass      |
| Instagram Icon Link | Opens Instagram in separate browser on click        | Clicked icon      | Opened Instagram in separate tab | Pass      |
| Twitter Icon Link   | Opens Twitter in separate browser on click          | Clicked icon      | Opened Twitter in separate tab   | Pass      |
| Linkedin Icon Link  | Opens Linkedin in separate browser on click         | Clicked icon      | Opened Linkedin in separate tab  | Pass      |
| Instructions Page   |                                                     |                   |                                  |
| Begin! Button       | When clicked user will be returned to username page | Clicked button    | Returned to username page        | Pass      |

### Quiz Start

| Feature/Function       | Expected Outcome                                                                                                                                                                                                  | Method of Test           | Result                                                                                                                            | Pass/Fail |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| NAVBAR                 |                                                                                                                                                                                                                   |                          |                                                                                                                                   |
| Home Link              | Return/refresh home page on click                                                                                                                                                                                 | Clicked link             | Returned to home                                                                                                                  | Pass      |
| Home Link Hover        | Underline appears under text.                                                                                                                                                                                     | Hovered over link        | Underline appeared                                                                                                                | Pass      |
| Leaderboard Link       | Return/refresh to Leaderboard page on click                                                                                                                                                                       | Clicked link             | Returned to Leaderboard page                                                                                                      | Pass      |
| Leaderboard Hover      | Underline appears under text.                                                                                                                                                                                     | Hovered over link        | Underline appeared                                                                                                                | Pass      |
| FOOTER                 |                                                                                                                                                                                                                   |                          |                                                                                                                                   |
| Facebook Icon Link     | Opens Facebook in separate browser on click                                                                                                                                                                       | Clicked icon             | Opened Facebook in separate tab                                                                                                   | Pass      |
| Instagram Icon Link    | Opens Instagram in separate browser on click                                                                                                                                                                      | Clicked icon             | Opened Instagram in separate tab                                                                                                  | Pass      |
| Twitter Icon Link      | Opens Twitter in separate browser on click                                                                                                                                                                        | Clicked icon             | Opened Twitter in separate tab                                                                                                    | Pass      |
| Linkedin Icon Link     | Opens Linkedin in separate browser on click                                                                                                                                                                       | Clicked icon             | Opened Linkedin in separate tab                                                                                                   | Pass      |
| Quiz Start             |                                                                                                                                                                                                                   |                          |                                                                                                                                   |
| Click correct Answer   | When clicked user will have their selected button highlighted in green, all buttons will be disabled until next question, a score of 10 will be added to current score                                            | Clicked correct answer   | Correct answer/answer clicked highlighted in green, all buttons disabled until next question, score of 10 added                   | Pass      |
| Click incorrect Answer | When clicked user will have their selected button highlighted in red, correct answer will be highlighted in green, all buttons will be disabled until next question, a score of 10 will be added to current score | Clicked incorrect answer | Clicked answer/incorrect answer highlighted in red, correct answer highlighted in green, all buttons disabled until next question | Pass      |
| Next question load     | After correct/incorrect action, 2 seconds pass and then next question loaded with answer buttons enabled                                                                                                          | Clicked Answer           | 2 seconds pass and next question loaded with answer buttons enabled                                                               | Pass      |
| Max questions reached  | At max questions answered quiz is ended and user redirected to results page                                                                                                                                       | Max questions reached    | Returned to results page                                                                                                          | Pass      |

### Result Page

| Feature/Function           | Expected Outcome                                                                                                            | Method of Test    | Result                                                                    | Pass/Fail |
| :------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :---------------- | :------------------------------------------------------------------------ | :-------- |
| NAVBAR                     |                                                                                                                             |                   |                                                                           |
| Home Link                  | Return/refresh home page on click                                                                                           | Clicked link      | Returned to home                                                          | Pass      |
| Home Link Hover            | Underline appears under text.                                                                                               | Hovered over link | Underline appeared                                                        | Pass      |
| Leaderboard Link           | Return/refresh to Leaderboard page on click                                                                                 | Clicked link      | Returned to Leaderboard page                                              | Pass      |
| Leaderboard Hover          | Underline appears under text.                                                                                               | Hovered over link | Underline appeared                                                        | Pass      |
| FOOTER                     |                                                                                                                             |                   |                                                                           |
| Facebook Icon Link         | Opens Facebook in separate browser on click                                                                                 | Clicked icon      | Opened Facebook in separate tab                                           | Pass      |
| Instagram Icon Link        | Opens Instagram in separate browser on click                                                                                | Clicked icon      | Opened Instagram in separate tab                                          | Pass      |
| Twitter Icon Link          | Opens Twitter in separate browser on click                                                                                  | Clicked icon      | Opened Twitter in separate tab                                            | Pass      |
| Linkedin Icon Link         | Opens Linkedin in separate browser on click                                                                                 | Clicked icon      | Opened Linkedin in separate tab                                           | Pass      |
| Results Page               |                                                                                                                             |                   |                                                                           |
| Player name                | When returned to result page, player name inputted on username field to show in space between Well done and You Scored text | Returned to page  | Inputted player name shown in space between Well done and You Scored text | Pass      |
| Player Score               | When returned to result page, player score should be taken and displayed next to Score:                                     | Returned to page  | Correct player score shown next to Score:                                 | Pass      |
| Check the leaderboard link | When clicked, return use to the leaderboard                                                                                 | Clicked link      | Returned to leaderboard                                                   | Pass      |

### Leaderboard

| Feature/Function                      | Expected Outcome                                                                                                                                                   | Method of Test                          | Result                                                               | Pass/Fail |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- | :------------------------------------------------------------------- | :-------- |
| NAVBAR                                |                                                                                                                                                                    |                                         |                                                                      |
| Home Link                             | Return/refresh home page on click                                                                                                                                  | Clicked link                            | Returned to home                                                     | Pass      |
| Home Link Hover                       | Underline appears under text.                                                                                                                                      | Hovered over link                       | Underline appeared                                                   | Pass      |
| Leaderboard Link                      | Return/refresh to Leaderboard page on click                                                                                                                        | Clicked link                            | Returned to Leaderboard page                                         | Pass      |
| Leaderboard Hover                     | Underline appears under text.                                                                                                                                      | Hovered over link                       | Underline appeared                                                   | Pass      |
| FOOTER                                |                                                                                                                                                                    |                                         |                                                                      |
| Facebook Icon Link                    | Opens Facebook in separate browser on click                                                                                                                        | Clicked icon                            | Opened Facebook in separate tab                                      | Pass      |
| Instagram Icon Link                   | Opens Instagram in separate browser on click                                                                                                                       | Clicked icon                            | Opened Instagram in separate tab                                     | Pass      |
| Twitter Icon Link                     | Opens Twitter in separate browser on click                                                                                                                         | Clicked icon                            | Opened Twitter in separate tab                                       | Pass      |
| Linkedin Icon Link                    | Opens Linkedin in separate browser on click                                                                                                                        | Clicked icon                            | Opened Linkedin in separate tab                                      | Pass      |
| Leaderboard                           |                                                                                                                                                                    |                                         |                                                                      |
| Well done! Alert                      | On being returned to leaderboard, if score is high enough to make leaderboard, alert appears on screen, saying Well done! Leaderboard shuffled accordingly (below) | Returned to page with high enough score | Well done! Alert                                                     | Pass      |
| Not this time pilot, try again. Alert | When returned to leaderboard with score lower than lowest score on leaderboard, alert will appear with text Not this time pilot, try again.                        | Returned to page with low score         | Not this time pilot, try again. Alert                                | Pass      |
| Leaderboard reorder                   | If player score is high enough, after clicking okay on alert, leaderboard is shuffled with player score and name inputted into relevant rank                       | Clicked alert after high enough score   | leaderboard reordered with name and score inputted into correct rank | Pass      |

### 404 Error Page

| Feature/Function    | Expected Outcome                             | Method of Test    | Result                           | Pass/Fail |
| :------------------ | :------------------------------------------- | :---------------- | :------------------------------- | :-------- |
| NAVBAR              |                                              |                   |                                  |
| Home Link           | Return/refresh home page on click            | Clicked link      | Returned to home                 | Pass      |
| Home Link Hover     | Underline appears under text.                | Hovered over link | Underline appeared               | Pass      |
| Leaderboard Link    | Return/refresh to Leaderboard page on click  | Clicked link      | Returned to Leaderboard page     | Pass      |
| Leaderboard Hover   | Underline appears under text.                | Hovered over link | Underline appeared               | Pass      |
| FOOTER              |                                              |                   |                                  |
| Facebook Icon Link  | Opens Facebook in separate browser on click  | Clicked icon      | Opened Facebook in separate tab  | Pass      |
| Instagram Icon Link | Opens Instagram in separate browser on click | Clicked icon      | Opened Instagram in separate tab | Pass      |
| Twitter Icon Link   | Opens Twitter in separate browser on click   | Clicked icon      | Opened Twitter in separate tab   | Pass      |
| Linkedin Icon Link  | Opens Linkedin in separate browser on click  | Clicked icon      | Opened Linkedin in separate tab  | Pass      |
| Instructions Page   |                                              |                   |                                  |
| Back to home        | When clicked user returned to home page      | Clicked button    | Returned to homepage             | Pass      |

## Bugs

### Solved Bugs

1. Database issue causing ReverseMatch error - I encountered the ReverseMatch error a couple of times during the development of Mushroom Mappers, however there was one particular instance which took a great deal of time and exploration to resolve despite going through the steps of checking the view, url and html code for errors. The peculiar thing in this instance was that the error did not appear when the particular page in question, when accessing the application as the admin. It only appeared as the 'normal' user. The error would raise when, as the normal user, I was trying to access the View Finds page, which shows a filtered page of Finds that the logged in user had created. In a way it was strangely comforting when, after eventually contacting Code Institute Student support, is also took them quite some time to identify the error. The issue actually came from one of the earlier Finds created for the purpose of testing, having been created without a slug. This was leading to errors when trying to view the View Finds page, because each Find was loaded with a link to view the details of that particular find. The htmnl link requires the slug of the particular find to allow it to be rendered in the first instance. One of the earlier finds, created as the normal user, was created without a slug when I was developing an early version of the Create Find form, hence when trying to view this page as the normal user I was getting the error, but not as the admin, whose filtered view of View Finds did not contain the problem, slugless, find. With the help of Student support the find in question was deleted from the database and this resolved the error. 
Dealing with this bug highlighted to me the importance of understanding and ensuring the underlying base data is being sent and stored as desired. Had I been more careful in saving to the database initially I could have avoided running into these errors which led to me spending a long time investigating the code, when actually it was the data that was the issue. However this was a valuable lesson. 

2. Viewing User Attached/Uploaded Images - Whilst setting up the static folders and image storage was relatively simple, retrieving images which had been uploaded by a user via the create find form proved much more challenging. I could see that the url's for where the image was being hosted on Cloudinary were being saved correctly to the Find, by accessing the URL itself in the HTMl, but I couldn't retrieve the image itself. Using the url as img src simply didn't seem to render the image. After a great deal of investigation around the Django/Cloudinary API's, tweaking the create find view multiple finds, I eventually discovered the problem was with the create_find.html itself. A simple addition of enctype="multipart/form-data"> on the form element solved the issue. This defined the form as a multipart form, allowing the view to pick up both the text fields, and the image file. The view already had the necessary code of 
find_form = FindForm(request.POST, request.FILES)  , specifying that the view should take both text fields from the .POST and the image from .FILES. 

### Known Issues

1. Leaderboard Revisit - If revisiting the leaderboard after having played the quiz once, the function to alert and update the leaderboard will run, even if you have only played the game once. The solution to this was to use some kind of value which was set to true/yes when a quiz was started and then set to no/off after the leaderboard function had been performed, so that the alerts and leaderboard update would not be run if the leaderboard revisited. However as the leaderboard does not store updates permanently, I wanted a player to be able to return after a single play and still be able to see where their score ranked, so I decided the trade off for having the alerts run on every revisit was worthwhile, as the score could still be seen in the leaderboard if desired.