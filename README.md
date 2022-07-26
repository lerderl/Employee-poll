# Employee Polls Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let one access the data. 

This application allows employees of a company to create polls and vote on polls created by other employees. The main goal of this app is to improve employee collaboration and transparency. A user can create a new Poll, respond to an existing Poll, view information on polls created and answered by other employees on the leaderboard, see the votes for each poll, and so on.

It was created with the following ideas in mind:

- State Management
- Redux
- Routing

## QuickStart

Perform the following steps to get this application up and running:

- Run the `<git clone repo-link>` command on your local machine to clone the project.
- Launch your preferred text editor and open that project.
- Navigate to the `employee-poll` directory.
- To install the dependencies, run `npm install`.
- Run `npm start` to start the development server

This will run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

And you're all set!

## Testing Instructions

`npm run test`

You can use the above command to run all of the unit tests on this project.

## Features

1. The dropdown list menu allows users to login using previously created users.

2. The first page you'll see after logging in is a dashboard. To help you navigate the app, there will be a navigation bar at the top. The dashboard displays information about the logged in user as well as his or her unanswered poll. The user can also toggle to see his or her poll results.

3. When you click a poll on the dashboard, all of the poll's details will be displayed.
   If the poll is unanswered, you will be asked to respond. When you respond, the details of all the votes (including yours) will be displayed.
   If the poll is answered, all of the details will be displayed.

4. You'll be taken to the leaderboard page if you click **Leaderboard** in the navigation bar. All users are listed here, sorted by the number of polls they have created and the number of polls they have answered.

5. Clicking **New** in the navigation bar will take you to a page where you can create a new poll. Simply enter the two options and click the **Submit** button. Your poll will be created, and you will be directed to the dashboard, where it will appear in the **New Questions** category.

## Author and Developer

**Joseph Olukunle**
