// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays what type of movie someone can watch based off their age entered
 */
function displayRating() {
  	// initialize variables
	let rating = "Please enter your age."
	
	// get the age of the user
	let age = parseInt(document.getElementById('age').value)	

  	if (age >=17) {
	  rating = "You can watch movies that are rated R alone."
	}
	else if (age >= 13) {
		rating = "You can watch movies that are rated PG or PG-13 alone."
	}
	else if (age >= 9) {
			 rating = "You can watch movies that are rated G alone."
	}

 else if (age > 0) {
		rating = "You are not old enough to go to the theatre."
	}

  else if (age <=0) {
		rating = "Please enter a valid age."
	}

  	// display the rating of movie that the user can watch 
  	document.getElementById('display-results').innerHTML = rating
}