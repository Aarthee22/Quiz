# **My Quiz Application**
This is a quiz game that I created using MERN Stack. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It will engage anyone that wants to play the quiz.

## **UX and Features**
I have chosen a simple and responsive layout for the application. 
### **Existing Features**
1. Main Component - THis displays the rules of the quiz and allows the user to enter a username and click on the start button to start the quiz. Username cannot be empty.
2. Quiz Component - This encompasses the Questions component and displays the questions and options from the MongoDB database on the cloud.
    1. When the user selects an option, they can submit to evaluate if the answer is correct. 
    2. If it is correct, a green tick mark is displayed, else a red cross mark will be displayed.
    3. The result is also stored on the cloud MongoDB database which is retreived on the Result Component using Node.js and Express.
    4. There is also a music play button on the top left hand corner. The user can turn it on and off. If playing, it will stop once the user finished the quiz 
3. Result Component - This displays the result for the user.
4. Footer Component - This is rendered on all pages
### **Features Left to Implement**
1. Timer for each question
2. Difficulty Level implementation
## **Technologies Used**
* HTML 5
    * The project uses HTML5 to create the basic elements and content of my website.
* CSS3
    * The project uses CSS3 to add custom styles to the elements and content of my website
* Bootstrap v4.3
    * The project uses Bootstrap v4.3 to add a responsive grid system, prebuilt components, plugins built on jQuery, and Bootstrap styles to my website, before adding my custom styles.
* React
    * The project uses React to establish the front end. 
* Node.js, Express and MongoDB
    * The project uses Node.js and Mongo DB to implement the server side logic of storing and fetching both questions and result from the database.
* Font Awesome
    * The project uses Font Awesome play/pause buttons and tick/cross symbols
* Visual Studio Code
    * I've used Visual Studio Code as the development environment to write the code for my website.
* GitHub
    * I've used GitHub as a remote repository to push and store the committed changes to my project from Git. I've also used GitHub pages to deploy my website in a live environment.
* Heroku
    * I've used Heroku to deploy the application.

## **Testing**
I used Google Chrome's Development tools to constantly test each change that I made to my website and to ensure that it appeared in the desired way on different screen sizes. I also tested my website on different screen sizes (mobile, tablet and desktop) to ensure it appeared in the desired way on different devices.

To test my whole website, I went through each page, feature by feature, and documented the results on a spreadsheet. The spreadsheet also documents any responsive features and confirms that they work and appear as intended on different screen sizes. The link to the spreadsheet it below:
* [Testing Checklist](https://github.com/Aarthee22/Quiz/blob/main/Testing%20Checklist.xlsx)

### **Bugs**
1. Running Locally was working but when deployed on Heroku the Questions Component was not rendering. Upon invstigation, I found that the URL to connect to the server was being passed incorrectly. Once I fixed this, it is working as intended
2. The Submit button was not evaluating the last question's answer instead was taking the user directly to the Result page. 
    * This was due to the placement of the Navigate script on the code. Once I moved that to on click of the Finish button, the answer was being evaluated.
3. Submit button was not popping up for an unanswered question after clicking Prev button. A varaible that changes state when clicking these buttons was not being handled correctly. Once this was fixed, it was working as intended.
4. Running Locally was working but when deployed on Heroku the Result table Component was not rendering. Upon invstigation, I found that the URL to connect to the server was being passed incorrectly. Once I fixed this, it is working as intended

## **Deployment**
The hosting platform that I've used for my project is Heroku. To deploy my website to Heroku, I used the following steps:

1. Loaded the terminal window in my Vistual Studio workspace.

2. Initialised Git using the git init command.

3. Added all files to the Staging area (Git) using the git add . command.

4. Committed the files to Git using the git commit -m "My first commit" command.

5. Created a new repository in GitHub called 'Portfolio'.

6. Copied the below code from GitHub into the terminal window in my Visual Studio workspace:

        git remote add origin https://github.com/Aarthee22/Portfolio.git

        git push -u origin main
7. Used the command heroku login
8. Issues the command git push heroku main. This builds the application and deploys it in heroku

## Available Scripts

In the project,client directory, you can run:

### `npm run server`

Starts the server in devlopment mode.
Open [http://localhost:5000](http://localhost:3000) to view it in your browser.

In the project's root directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run dev`

This will start the client and teh server concurrently and will build the application. 

## Repository Link
https://github.com/Aarthee22/Quiz

## Running Code Locally
To run my code locally, users can download a local copy of my code to their desktop by completing the following steps:

1. Go to my [GitHub](https://github.com/Aarthee22/Quiz) repository.
2. Click on 'Clone or download'.
3. Click on 'Download ZIP'.
4. Once downloaded, extract the zip file's contents and run my website locally.

