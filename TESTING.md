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

The W3C validator was used to validate all HTML pages and CSS.

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

- ![Homepage WAVE Test](documentation/wave-homepage.webp)
- ![Register WAVE Test](documentation/wave-register.webp)
- ![Login WAVE Test](documentation/wave-login.webp)
- ![Create Find WAVE Test](documentation/wave-create-find.webp)
- ![Find Detail WAVE Test](documentation/wave-find-detail.webp)

After editing to include all alt tags, all pages passed without any errors. The majority of alerts raised in the testing, such as those on the homepage, were due to 'Very small text'. These were actually coming from the hidden div's which hold the data necessary for making map markers, so were not appearing on screen at all. These divs are needed for the map to function properly and despite exploring other options for holding the map marker data I could not find a suitable mechanism in the time frame for this project so they have remained as is. 

Another of the common alerts relates to a redundant link. This is the second home link on the nav bar. I have deliberately kept this, as when displayed on smaller screens and the burger menu is shown for the other nav items, I wanted a home option to appear in this dropdown list as well as the main MushroomMappers icon home link.

## Manual Testing

### Testing User Stories

**col1 **|**col2**|**col3**
:-----:|:-----:|:-----:
one|two|three


## Full Testing

Full testing of the website was performed on a Dell optiplex desktop on 25 inch Toshiba and Soundwave monitors, Dell Latitude 5510 14 inch screen laptop, iPad 8th generation, Samsung Galaxy S10, iPhone 14 pro.

Google chrome developer tools was also used to test at a range of different pixel sizes.

Testing was conducted using Google Chrome, MS Edge and Safari.

### Homepage

**Feature/Function**|**Expected Outcome**|**Method of Test**|**Result**|**Pass/Fail**
:-----:|:-----:|:-----:|:-----:|:-----:
Home Link|Return/refresh home page on click|Clicked link|Returned to home|Pass
Home Link Hover|Underline appears under text.|Hovered over link|Underline appeared|Pass
MushroomMappers Home Text|Return/refresh home page on click|Clicked link|Returned to home|Pass
MushroomMappers Home Text Hover|Underline appears under text.|Hovered over link|Underline appeared|Pass
IF USER NOT AUTHENTICATED| | | | 
Register Link|Returned to register/create account page|Clicked link|Returned to create account page|Pass
Register Link Hover|Underline appears under text.|Hovered over link|Underline appeared|Pass
Login Link|Returned to sign in page|Clicked link|Returned to sign in page|Pass
Login Link Hover|Underline appears under text.|Hovered over link|Underline appeared|Pass
IF USER AUTHENTICATED/SIGNED IN| | | | 
Home Link|Return/refresh home page on click|Clicked link|Returned to home|Pass
Home Link Hover|Underline appears under text.|Hovered over link|Underline appeared|Pass
Logout Link|Returned to sign out page|Clicked link|Returned to sign out page|Pass
Logout Link Hover|Underline appears under text.|Hovered over link|Underline appeared|Pass
View Finds Link|Returned to users View Finds page|Clicked link|Returned to users View Finds page|Pass
View Finds Link Hover|Returned to users View Finds page|Clicked link|Returned to users View Finds page|Pass
User name displayed|Item in nav bar should appear as "Logged in as: Username", After log in|Logged in|Item appear in nav bar displaying "Logged in as: Username.|Pass
FOOTER| | | | 
Facebook Icon Link|Opens Facebook in separate browser on click|Clicked icon|Opened Facebook in separate tab|Pass
Instagram Icon Link|Opens Instagram in separate browser on click|Clicked icon|Opened Instagram in separate tab|Pass
Twitter Icon Link|Opens Twitter in separate browser on click|Clicked icon|Opened Twitter in separate tab|Pass
Youtube Icon Link|Opens Youtube in separate browser on click|Clicked icon|Opened Youtube in separate tab|Pass
HOMEPAGE SPECIFIC TESTING| | | | 
 | | | | 
IF USER NOT AUTHENTICATED| | | | 
Register Button Click|Pale blue highlight around button, redirect to Sign Up page |Clicked button|Blue highlight appeared around button and redirected to sign up page|Pass
Register Button Hover|Button background turns darker green|Hovered over button|Button turned darker green| 
Map stuff| | | | 
Map stuff| | | | 
Continue Reading Link on Find - Click|Returns the relevant find detail page|Clicked continue reading link|Returned relevant find detail page| 
Continue Reading Link on Find - Hover|Text turns dark green with dark green box surrounding|Hovered over link|Text turned dark green with dark green box surrounding it| 
Pagination nav options| | | | 
 | | | | 
IF USER AUTHENTICATED| | | | 
Create Find Button|Returns the create find page|Clicked button|Redirected to create find page| 
Create Find Button Hover|Button turns dark green|Hovered over button|Button turned dark green| 
Your Existing Finds Button|Returns the user to view finds page, filtered to display finds they have created|Clicked button|Returned to view finds page with filtered list of finds| 
Your Existing Finds Button Hover|Button turns darker grey|Hovered over button|Button turned darker grey| 


### OLD OLD OLD
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

3. Http on edit or delete - Due to the way in which my views were set up, when a user edited or deleted a view (correctly) the form data would be edited or the entire find deleted respectively and the user would be returned to the view finds page. This would happen without any issues, and would appear okay, however with the original view set up the acted-on find slug would appear in the http:

[http issue image](documentation/edit-delete-http-issue.PNG)

Whilst this wasn't a major issue, as view_finds was still returned, it did mean that if for some reason a user refreshed at that particular moment after editing or deleting a find, the site would error, as that finds specific slug may have been edited or deleted entirely. To resolve this I used return HttpResponseRedirect(reverse('view_finds')) to specifically return the view_finds http, which would then correctly show an updated find list. 

4. Triggering Map Initilisation - Oringally map initilisation was based on Javascript which looked for the number of divs that belonged to the 'hidden' class. On the index page there are multiple hidden divs to hold the data needed to create the map markers, on the create find page there is only 1. Therefore by getting the number of hidden div elements with a getElementsByClassName and using an if statement to compare the total number, JS could detect the index and create find page and render a specific map per page. However this option left the issue of an error being presented in the console log for any page which did not have any 'hidden' divs. Whilst this had no impact on the user experience of the site, I wanted to find a way to clear up the error for a general site cleanliness. The solution I found was to use querySelector inside an if statement, with similar counting logic e.g. if (document.querySelectorAll("div.hidden").length === 1) would recognise the create find page as this is the only page with only one hidden div. Any pages without hidden divs do not raise the error. 

5. Map Marker View Find on Heroku - I was very pleased with the eventual creation of the map markers, and that a user could click from the map to view a particular find. I was very worried when, much to my horror, this didn't work on the deployed Heroky app, instead I got a a server 500 error. I investigated if this was due to the find needing to be approved, or perhaps being caught in some king of author-only access. However I realised that on Heroku, when clicking View Find on one of the map markers, it was actually trying to access a local server URL. After investigation this was due to this piece of code in the Javascipt:

[Map marker Javascript code which caused isssue](documentation/edit-delete-http-issue.PNG)

Changing the text2 line, to make the template literal create a URL with the Heroku app URL solved this issue. 

### Known Issues

1. Leaderboard Revisit