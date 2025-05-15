

import { users } from '../data/users.js';

const userCard = document.querySelector('.usercards');
const searchInput = document.querySelector('#search-field');
const searchButton = document.querySelector('.search');
const userForm = document.querySelector('#skill-form'); // Select the form element
const userFormInput = document.querySelectorAll('.formgroup input'); // Select all input fields

// Searching to see if user exists then removes user input after successful find.
function findUser(userSearch) {
    let isFound = false;
    for (let i = 0; i < users.length; i++) {
        const lowerUserSearch = userSearch.toLowerCase();
        const lowerFirstName = users[i].firstName.toLowerCase();
        const lowerLastName = users[i].lastName.toLowerCase();
        const lowerSkill = users[i].skill.toLowerCase();

        if (
            lowerUserSearch.includes(lowerFirstName) ||
            lowerUserSearch.includes(lowerLastName) ||
            lowerUserSearch.includes(lowerSkill)
        ) {
            isFound = true;
            console.log("User is available");
            break;
        } else if (users[i].tags.includes(userSearch)) {
            isFound = true;
            console.log("User is available");
            break;
        }
    }
    if (!isFound) {
        console.log("User not found");
        return;
    }
}

searchButton.addEventListener('click', function () {
    findUser(searchInput.value);
    searchInput.value = ""; // Clear the input field
});


userForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from reloading the page
    
    const formData = {};
    for (let i = 0; i < userFormInput.length; i++) {
        const input = userFormInput[i];
        formData[input.name] = input.value; // Collect input values by their name attribute
    }
    
    console.log(formData); // Logs an object with all input values
    addUser(formData); // Pass the collected data to the addUser function
});

// Passes the user form through this function and pushes it to the users.js database.
function addUser(userFormData) {
    users.push(userFormData); // Add the new user to the users array
    console.log('User added:', userFormData);
}