##Product Documentation
#Movie stack: 
1. Showing popular, upcoming and top rated movies on Home page. 
2. Allow user to create his own accounts
3. View and display user profile
4. Save the user's favorite movies to my list
5. Add, save and like movies user create
6. Display movie information with title, release date, and so on. 
7. Show similar movies for users to choose
8. Search function which allow user to search their movies they want
9. Search bar with both click and enter function to display movie list
10.  Share link for users to copy the link to share.



#Known bugs: 
Trailer: If the selected movie does not have any trailers available, the site still shows the Video option.
Edit profile button is outside the container
User cannot delete movie in the list
Search bars can not search by genre, actors, only they can search by movie names. 



#Requirements
- Node.js
- Code editor such as Visual Code
- Heroku and Netlify for online deployment

#User Manual
(Online)
Access the web via https://spu-movie-stack.netlify.app/

(Locally)
In order to run locally, some changes in the file must be made. There are 2 ways to do this.

First Method is going back to the version prior to deployment: 
Clone or download a zip of the project 
Type in Code editor terminal ” git reset --hard 63af2ad0a760d047e0c77fa6bcd1b128e8e06105 “
Open 2 terminal to run both client and server
Run client side
Type: ```cd client “ to access client directory```
Type:``` npm run start “ to start the client```
Run server side
Type: ```cd server``` to access client directory
Type: ```npm run start``` to start the client
You should be able to access the web app now with http://localhost:3000/

Second Method is change the file on client side
Clone or download a zip of the project 
Direct to this path “\movie-db\client\src\api\index.js” and select index.js
Find ```const API = axios.create({ baseURL: 'https://movie-stack.herokuapp.com/'});```
Change the line to ```const API = axios.create({ baseURL: 'http://localhost:5000/'});```
Save and try to run it
Open 2 terminal to run both client and server
Run client side
Type: ```cd client``` to access client directory
Type: ```npm run start``` to start the client
Run server side
Type: ```cd server``` to access client directory
Type: ```npm run start ``` to start the client
You should be able to access the web app now with http://localhost:3000/

If user wants to deploy it, they can use Heroku and Netlify

**Note to self: If posts and user info doesnt work, mongoDB atlas has been paused. Go start it up again.
