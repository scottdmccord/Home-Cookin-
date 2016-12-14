# Home Cookin'

![alt text] (http://i.imgur.com/mm9ObyU.jpg "Home Cookin'")

## About

Sick of getting lunch from the same restaurants every day? Ever wish you could have a home cooked meal for lunch but don’t have the time to make it yourself? Or, do you love to cook and want to turn your skills into a small business venture? Welcome to Home Comin'...

As a registered chef, you can login each week and post the meals you’ll be making. When you post a meal, you will indicate the following: Name of dish, cuisine type, list of ingredients, quantity (number of meals), pickup address, pickup time, and price. On the day of your meal, users of will come to your specified address and will pay for (cash) and pick up their meal.

As a user, each week you’ll be able to browse meals and chefs in your neighborhood and register for the meals you’d like to eat. After you’ve had a meal from a chef, you’ll be able rate the quality of the experience. You will also be able to friend people on the app to see their reviews and where they are getting their lunches.

(Note: ratings feature is currently not implemented)

## Technologies Used:

-javascript
-javaScript web tokens (jwts)
-react
-react router
-node.js
-express
-express-jwt
-morgan
-path
-pg-promise
-bcryptjs

## User Stories:

When a visitor first arrives on the site, he will see a simple, sleek landing page with the app’s name and a description of what the app does. The landing page will also have two clickable boxes, one for Cooks and one for Eaters. This boxes will take the visitor to the respective sign up / login pages.

###Cook User

If the visitor chooses to sign up as a Cook, he will first have to enter the information required to make his account. Once this is complete, he will log into the app. Next, he will see the Cook landing / welcome page. On this page, he will be able to create a meal, and see past meals he’s cooked. To create a new meal, he will click on a button which will bring up a form with all of the required meal information. After the meal form has been filled out, the meal will be live and Eaters will be able to reserve an order. After the transaction has been completed (or at the end of the day), the meal will be put into the Cook’s archive.

###Eater user

If a visitor chooses to sign up as an Eater, he will also have to enter the information required to make his account. Once this is complete, he will be taken to the Eater landing / welcome page. On this page, he will be able to search upcoming meals by location, price, and cuisine type. He also will be able to browse Cooks and save them to his database of “Favorite Cooks”. After conducting a search, the Eater will be able to reserve meals. After the transaction has been completed, the Eater will be eligible to review the Cook.

## Wireframes


