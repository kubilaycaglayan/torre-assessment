
# 1. Planning
⏲️ 08:00 (UTC +3)
- Receive the Technical Test Mail.
  - Experiment with API endpoints to understand how to use them.
  - Choose React SPA to create the project.

⏲️ 09:00
- Come up with an idea.

### 💡 Idea
Given a group of user ids, select one user to find the most relevant job opening for the one.
And then compare the selected user with others.
Comparison will be on the basis of pointing users with their abilities.
Pointing will be representational for the MVP. Basicall we can give 1 point for every presented skill.
### 💡 Idea

  - Check dependencies
  - Start building
  - Make it work
  - Make it right
  - Make it fast
  - Make it pretty
  - Check the assessment requirements again

# 2. Building

⏲️ 09:30
- Experiment more with endpoints
  - Get requests for every user
  - Ranking users
  - Get the most relevant job for the selected user

⏲️ 10:00
- Create folder structure

⏲️ 10:30
- Actions and Reducers

⏲️ 11:10
- Add getUser API call

⏲️ 12:00
- Add postJobs API call and initial states

⏲️ 12:20
- Think about the basic components and divide the application into small problems
  - Username input
  - Candidate card
  - Job details card
  - Candidate container with username input
      displays the single user state and can be change with input
  - Pool container with username input
      displays the pool state and we can add more users to the pool
  - Match calculator
  - Strengths grabber

⏲️ 12:42
- Create strengths and interests slicers

⏲️ 12:51
- Think about the user experience flow

  User puts a candidate name on the input
    Application finds the candidate
    Finds the proper job
    Makes the ranking
      Job requirements
      Candidate experience
      Candidate strengths
    Changes the inner state of the candidates

⏲️ 14:00
- Create ranking functions.

⏲️ 15:00

- Create action to change the candidate
      Create action to add candidate to the pool
      Create action to change the rankings of all the candidates in the state
      &&
      Add dependency => redux-devtools-extension

⏲️ 15:31

- Started to working on the components
      Input component
      Add new state => candidate input

⏲️ 16:00

- Bring everything together in App.js container

⏲️ 16:30

- Handle new candidate submission

⏲️ 17:00

- Lunch Break ☕

⏲️ 18:00

- Change job upon candidate change
      Change ranks of candidates upon job change

⏲️ 19:30

- Add styling for pool

⏲️ 20:30

- Finish styling, mobile first MVP is ready

⏲️ 21:30

- Add loading component

⏲️ 22:00

- Add header instructions

⏲️ 22:05

- Heroku Deployment https://all-for-talent.herokuapp.com/

### 💡 Idea (update)
Given one talent's username the application finds the best matching job(first result).
And then according to the job skills, it ranks the talents in the talent pool and it ranks the main talent.
With the help of this application, you can easily see how the other talent in your talent pool would fit for a specific job that you are looking for one of your talents. 😊
### 💡 Idea (update)

⏲️ 22:18

- Add Footer

⏲️ 23:11

- Add type checkings

# 3. Documenting
⏲️ 23:33

# 4. Video Presentation