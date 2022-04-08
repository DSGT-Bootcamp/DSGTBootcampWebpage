# DSGT Bootcamp Webpage

Welcome to the DSGT Bootcamp Webpage. We are so happy that you want to be part of a team that's democratizing data science education for all! In order to help you deliver a positive impact and push the DSGT Mission forward, below are some helpful guidelines on how the webpage codebase is setup. 

## Repository Architecture:
`/.circleci`
	-part of the api tool for the website
	- This is the first step in the deployment process of the webpage. Pretty much
	checks that the site builds properly when merging commits from dev branch into main branch

`/.idea`
	-more stuff that's part of api tools

`/.vscode`
	-vscode settings, set to default

`/public`
	-contains the base files that come with react
	`index.html`
		-the basic webpage
**Best to not edit any of these as it may cause problems with the functionality/implementation of the website**


* `/src`
	* source files for basically everything that is displayed on the website
	- `/components`
		* `/About`
			* `Ethinicities.js`
				-pie chart with data of student ethnicity
			* `Gender.js`
				-a horizontal bar-shaped chart with data of student gender
			* `Locations.js`
				-a bar graph of in state, out of state, and international student data
			* `Major.js`
				-a pie chart with data of student major, all charts currently show data from Fall 2021 Bootcamp
			* `PastProjects.js`
				-slide show of Fall 2021 Bootcamp project results
			* `ThreePieCharts.js`
				-formats the three pie charts to display side by side
			* `Year.js`
				-a pie chart with data of student year
			* `index.js`
				-the webpage which takes the above elements and displays them on the About tab
		* `/AboutSlideshow`
			* takes the slideshow from About folder and formats it into a proper slideshow on the tab
		* `/BootcampOptions`
			* a table that shows the differences between the Udemy course and the in person Bootcamp
		* `/Footer`
			- the footer with DSGT logo and social media links at the bottom of the website
		* `/HomeScreen`
			* `FirstScrollScreen.js`
				- displays the top of the website not including the header, with the logo and apply button
			* `FourthScroolScreen.js`
				- the "Tell Me DSGT" portion at the bottom
			* `FourthScrollTellMe12.js`
				- the "What is Data Science?" and "Significance" tabs
			* `FourthScrollTellMe3.js`
				- the Resources under the fourth screen at the bottom
			* `Home.js`
				- takes the four screens (First/Second/Third/FourthScrollScreen) and combines them into the home screen of the website
			* `ItemToTeach.js`
				- the four logos of Python, Pandas, Numpy, and Machine Learning displayed on the third section of the homepage
			* `SecondScrollScreen.js`
				- the "Welcome" text section below the top
			* `ThirdScrollScreen.js`
				- the "We Teach" section of the website
			* `WelcomeToNewMsg.js`
				- now vestigial welcome popup to the new website
		* `/Mentors`
			* `Mentor.js`
				- formats each mentor's entry in the mentors tab
			* `allMentors.js`
				- contains all of the information for each of the members
			* `index.js`
				- displays the actual page on the website
		* `/Navigation`
			* `NavLinkButton.js`
				- the functionality of the header bar to navigate between the pages
			* `index.js`
				- displays the navigation bar at the top of the website
		* `/Resources`
			* `ResourceItem.js`
				- formats each of the items on the resources page
			* `index.js`
				- displays the resources page
		* `/Schedule`
			* `ScheduleItem.js`
				- formats each of the items on the schedule page
			* `index.js`
				- displays the schedule page
		* `Doc.js`
			- displays while page is loading
		* `RouteChangeTracker.js`
			- helps with tracking for Google analytics and changing in between pages
	* `/images`
		* `/footer`
			- images for the linkedin, email, and facebook links on the footer of the website
		* `/homescreen_images`
			- images for every image on the homescreen
		* `/logos`
			- images of the dsgt logo
		* `/mentors`
			- portraits of all of the bootcamp mentors
		* `/past_projects_images`
			- pictures for the about page slideshow of past bootcamp projects (from Fall 2021)
	* `App.css`
		- css formatting for the website/components
	* `App.js`
		- displays the actual website with each of the react components on the website
	* `App.test.js`
		- helps with testing and rendering the website
		- If you would like to add unit tests, this file is the file to start with!
	* `constants.js`
		- defines colors' hexcodes for ease of access/use
	* `index.css`
		- css formatting mainly for text
	* `index.js`
		- renders the website
	* `reportWebVitals.js`
		- backend stuff (best to not touch)
        - This is a file that comes when you create any React App!
	* `setupTests.js`
		- backend stuff (best to not touch)
		- This is a file that comes when you create any React App!
## Why this Architecture?
This is a good question. As a software engineer, design is key when building scalable, reusable, modular, maintainable, extendable systems. In this case, we are building a webpage to put information about DSGT's bootcamp in an easy to access place while also helping to spread the word (ie: advertising!). These days, websites are built in HTML/CSS/JS and other web generators like Wix, Weebly, etc. React.js is one of many popular JavaScript frameworks for building web apps. A key to React.js is that it has wide developer community support, interpretable documentation (at least in my opinion) and the various pages of the website are modular (this is where Components come in). When we want to build say a Welcome page, it is best to isolate the Welcome page code in one file and use `<WelcomePage>` as a module when needed for other pages. You'll see this a lot in our codebase. 

## How does deployment work?
To make deployment as seamless as possible, `CircleCI` is used to build the website into something deployable and if the build checks fail (ie: compilation errors from `React`, syntax errors, render errors, etc), the build won't occur. Only when the build occurs does our deployment endpoint trigger. Deployment of the bootcamp site is done through Netlify which allows for seamless integration of this GitHub repository. You can view the latest version of the site that's deployed through `dsgtbootcamp.netlify.app`. Try entering this URL into your browser!

## Tips for Good Coding Practice and Good Collaboration
* When developing a feature, work in a dev branch. DO NOT EVER make changes directly to the `main` branch. This `main` branch is the "master copy" of the website code and must be protected at all times. When working off of a dev branch, to merge changes into the master copy, you MUST make a **pull request** and select at least one person to review your code (for good style, functionality, etc). This is common practice in professional settings with large codebases
* Use good variable names, keep the logic as simple as possible (but try to accomplish the functionality intended), commit changes frequently when you are making good progress in development. 
* Don't reinvent the wheel. If there is a library in `React.js` that seems to address what you want to do, try to learn about that library and see if you can incorporate it
* When you want to propose a new feature that would help benefit the website, break the problem down into smaller subproblems. Sketch out a rough idea (preferably through simple diagrams or talking it out) for your plan of attack
* Keep your teammates updated on your progress
* Organize  team responsibilities through the **Github Project Board**. Regularly update it like you'd do for a Trello board! Tasks can be written in the form of **Github Issues**, which is used in codebases as well. 
* If you would like to reach the creator of this repository, email `karkir0003@gmail.com` or text me at `908-240-0310`. 
