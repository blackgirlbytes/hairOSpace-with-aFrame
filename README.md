# hairOSpace

![arresult](https://user-images.githubusercontent.com/22990146/38533945-7ae8bad6-3c49-11e8-9f30-3ef234594a37.png)
![3dimages](https://user-images.githubusercontent.com/22990146/38533976-a0dc5d42-3c49-11e8-854b-59d02469b0f4.png)
![results](https://user-images.githubusercontent.com/22990146/38533936-7613800e-3c49-11e8-8ed4-6e6dd03be9b8.png)
![homepage](https://user-images.githubusercontent.com/22990146/38533928-71216610-3c49-11e8-88d1-a5df4ab7b06d.png)
![first question](https://user-images.githubusercontent.com/22990146/38533926-6fbc3368-3c49-11e8-8043-6485297574b3.png)
![quizbeginning](https://user-images.githubusercontent.com/22990146/38533933-747f3c92-3c49-11e8-9284-20b1d614e8e3.png)
![login](https://user-images.githubusercontent.com/22990146/38533938-779f07c2-3c49-11e8-8b53-27908f3b2154.png)

# How it's made 
Tech Used: JavaScript, JQuery, Aframe, AR, HiroMarkers, Node.js, Express.js, MongoDB, HTML5/CSS3, EJS templating
## Frontend
User is brought to the first endpoint--the homepage. One the homepage is a button, with a click function that links the user to a new endpoint--the quiz endpoint. On the quiz endpoint, I use a number of hide and show methods to hide and show new questions and answers. The algorithm behinds this states if the user clicks one--choice  they will get a certain number of points. Depending on the number of points, you are then assigned a hair  type result ranging from 1A to 4C and low porosity to high porosity. When this is determined, after using multiple conditionals, picture is rendered from an array. You can then click the Learn More button to get advice for yor hair type. 
## Backend
On the backend, the user can sign up and login in. When you sign up,your credentials are saved to a database within MongoDB. If the login is successful, the user is brought to a profile endpoint. On this endpoint, the user can post the result they got to share with other users. The user can also click a link to view an AR avatar.

## Aframe
After clicking view AR avatar, the user is brought to another endpoint called /certs. In the certs endpoint, a number of boxes are rendered. I did this use the <a-box> entity from aframe. The images for hair results that were in the previous array during the quiz are being used as a background for each of the a-boxes. I added animation to each box making them spin 360 degrees infinitely. There is an <a-plane> with <a-text> that says "go back to forum." The plane will bring you back to the profile because it has a link in it. Each of the boxes with images has a link attached to it. The link will bring the user to another endpoint--this endpoint has a camera setting. When you hold up your hiro marker, your avatar that you chose will pop up! It's real AR. So amazing. In order to click , you have to add an onclick link href to your entity. You also have to create a cursor entity (the circle) , and that has to hover over your entity.

## Optimizations
If more time was available to me, I would create a chat room, I would have object models for the AR portions, and I would use an API to suggest products with prices for the user. I also wanted to have my whole quiz in web AR or 3D models! I also wanted to host it on heroku, so I would be able to get to the site using my phone and not have to hold a hiro marker, but my file and folder sizes are too large. 

## Lessons Learned 
I learned about the wonders of a-frame! I know I only touched the surface, but I can't wait to delve into it more
