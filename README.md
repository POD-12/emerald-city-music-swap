<h1 align="center">Emerald City Music Swap</h1>
<p align="center">
    <!-- <img src="https://img.shields.io/github/repo-size/merikettapearl212/emerald_city_music_swap?style=for-the-badge"/> -->
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white/" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
    <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" />
    <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
    <img src="https://img.shields.io/badge/Express-404D59?style=for-the-badge&logo=express&logoColor=white" />
    <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
    <img src="https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white" />
</p>

![License Icon](https://img.shields.io/badge/license-MIT-informational.svg)

A Seattle-based MERN application which combines the love of music media with the community, savings and waste reduction of a Buy Nothing Group. 

## Table of Contents

- [Locations](#locations)
- [Application Summary](#application-summary)
- [Usage Instructions](#usage-instructions)
- [Installation](#installation)
- [Testing](#testing)
- [Future Development](#future-development)
- [Contributors](#contributors)
- [Resources](#resources)
- [Point of Contact](#point-of-contact)
- [License](#license)

## Locations

Github Repository: https://github.com/POD-12/emerald-city-music-swap

Deployed Application: https://emerald-city-music-swap.herokuapp.com/

## Application Summary

Anyone who appreciates music can easily connect with others on their shared musical interests. In today’s world many people are more inclined to interact with others online since the pandemic has made new in person interactions less than safe. The Buy Nothing Group on Facebook promotes a great community of individuals looking to rehome items rather than throw them away. Given all this, we in POD12 thought that a ‘buy nothing group’ for music media (e.g. vinyl records) would be a great way to reduce waste, connect with other music enthusiasts and promote a sustainable appreciation for all kinds of music listening avenues… 

And so we made Emerald City Music Swap (ECMS) -- an online community space where you can offer records (and eventually other media) to others when you are interested in rehoming or sharing them.

In this MVP a user can... 
1. Register an account and login.
2. Post information and an image of vinyl records to rehome to the centralized message board with their preferred contact information.
3. Browse available records by artist name, title, or genre.
4. Remove posts.

![Landing Page Stillshot]()

## Usage Instructions

Account Creation, Login, and Logout

1. Click the '[Deployed Application Link](https://emerald-city-music-swap.herokuapp.com/)' provided in the '[Location](#location)' section.
2. Click 'Account' in the Navbar.
3. To create an account click 'Signup' and enter your name, email and desired password in the form- then click the 'Signup' button.
4. To create login to an existing account, click 'Login' and enter your email and password in the form- then click the 'Login' button.
5. To Logout while signed in, click 'Account' and then click 'Logout'.

![Account Creation Demo]()

Add and Delete Record Postings

1. Signup or Login to your existing account.
2. Click 'Recent' in the Navbar.
3. Choose an album to delete.
4. Click the 'Delete' button on the album card to remove posting.
NOTE: CASSETTE, DISC, AND CHART OPTIONS IN THE ADD DROP DOWN ARE NOT FUNCTIONAL AT THIS TIME (03/16/1988).

![Add/Delete Demo]()

Browse Records

1. Signup or Login to your existing account.
2. Click 'Browse' in the Navbar.
3. To browse by 'Artist name', make sure the other form fields are clear type the artist name into the corresponging form.
3. To browse by 'Album', make sure the other form fields are clear type the album name into the corresponging form.
4. To browse by genre, make sure the other form fields are clear and select the genre from the dropdown menu.
NOTE: CONFLICTING FORM FIELDS WILL YIELD NO RESULTS, FIELDS ARE CASE SENSITIVE.

![Browse Demo]()

## Installation

No installation is required for running the deployed version of ECMS. Simply click the '[Deployed Application Link](https://emerald-city-music-swap.herokuapp.com/)' provided in '[Location](#location)' section to get started.

When downloading and running the application locally, use the following steps:

1. Install MongoDB Atlas and Robo 3T workbench using the directions outlined in the '[mongoDB Documentation](https://docs.mongodb.com/manual/installation/)' and '[Robo 3T Documentation](https://robomongo.org/)'.
2. Clone the repository to your computer.
3. Connect the repository to your Robo 3T by logging into Robo 3T, right click on 'New Connection', select 'Create Database' and name it "hipsterapp".
4. Open a new terminal instance in the ECMS code file and run "npm i" to install the npm packages needed to run the program.

## Testing
To test the deployed app, click the '[Deployed Application Link](https://emerald-city-music-swap.herokuapp.com/)' provided in '[Location](#location)' and run through the steps listed in '[Usage Instructions](#usage-instructions)'.

To test ECMS code locally on your computer, begin by completing the local installation process. Then do the following: 
1. Using the CLI, start the server by running the command 'npm start'.
2. Open another instance of your CLI and in the new instances execute the command "node scripts/SeedDB.js" to run the seed file.
3. If the seed file populates the collection in your Robo 3T 'hipsterapp' database, then you have a successful connection to your local database.
4. Additional testing of api routes can be completed via Postman Application. Instructions for Postman installation and usage can be found at https://www.postman.com/.

## Future Development

Additional goals and application features for future devlopment include:
- Conditional Rendering of delete buttons on item cards
- Additional UX/UI development
- Remove case sensitivity of browse forms
- In app messaging of other users using socket i/o
- Include other types of media items to share and post
    - Cassette Tapes
    - Compact Discs
    - Music Charts
    - Sheet Music
    - Music Books

## Contributors

- [Alejandro Brand](https://github.com/alejo-brand)
- [Gavin Calkins](https://github.com/Gavin867)
- [Mia Dilberovic](https://github.com/Dilberovicka31)
- [Meagan James](https://github.com/merikettapearl212)

## Resources

- Lessons from UW Full Stack Flex Boot Camp.
- Insights from instructor Anthony Brown.
- TA help from Ming Ho and Jamey Gronewald.
- Tutoring from Phil Loy and Namita Shenai.

## Point of Contact
<!-- possibly set it up for group email -->
Have questions? Contact us at [gavin.calkins@gmail.com](mailto:gavin.calkins@gmail.com?subject=Hi%20Gavin!%20I%20have%20a%20question%20about%20Emerald%20City%20Music%20Swap!).

## License

    MIT License
    
    Copyright (c) 2021 Alejandro Brand, Gavin Calkins, Mia Dilberovic, Meagan James

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.


#### Powered by :coffee: and <img src="https://img.shields.io/badge/Spotify-1ED760?&style=for-the-badge&logo=spotify&logoColor=white"/> 
Thanks for stopping by! :vulcan_salute:
