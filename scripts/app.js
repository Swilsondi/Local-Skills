import { users } from '../data/users.js';

// const userCard = document.querySelector('.usercards');
const searchInput = document.querySelector('#search-field');
const searchButton = document.querySelector('.search');
const userForm = document.querySelector('#skill-form'); // Select the form element
const userFormInput = document.querySelectorAll('#skill-form input, #skill-form textarea'); // Select all input fields
const userCards = document.querySelector('.cards');

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
// currently the form works and the user search works but first we need to display all the users upon page load and I also need to fix the search for skills and tags to find the user. So far the first name works for pulling users. Going to  need that extra form input for last name.

            // Dynamically update the userCards inner HTML
            userCards.innerHTML = ''; // Clear existing content
            userCards.innerHTML = `
                <img src="${users[i].image || 'https://via.placeholder.com/120'}" alt="${users[i].firstName}" class="card-img">
                <h3>${users[i].firstName} ${users[i].lastName}</h3>
                <p><strong>Skill:</strong> ${users[i].skill}</p>
                <p><strong>Bio:</strong> ${users[i].bio}</p>
                <div class="tags">${users[i].tags.map(tag => `<span>#${tag}</span>`).join(' ')}</div>
                <p><a href="mailto:${users[i].email}" class="card-email">Contact</a></p>
            `;
            console.log(userCards.innerHTML);
            console.log("User is available");
            break;
        }
    }

    if (!isFound) {
        console.log("User not found");
        userCards.innerHTML = `<p>No user found matching "${userSearch}".</p>`;
    }
}

searchButton.addEventListener('click', function () {
    findUser(searchInput.value);
    searchInput.value = ""; // Clear the input field;
});

 searchInput.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        findUser(searchInput.value);
        searchInput.value = ""; // Clear the input field
    } else {
        return;
    }
 })


userForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from reloading the page
    const formData = {};
    for (let i = 0; i < userFormInput.length; i++) {
        const input = userFormInput[i];
        formData[input.name] = input.value; // Collect input values by their name attribute
        input.value = ""; // Clear the input field
    }
    
    console.log(formData); // Logs an object with all input values
    addUser(formData); // Pass the collected data to the addUser function
});

// Passes the user form through this function and pushes it to the users.js database.
function addUser(userFormData) {
    users.push(userFormData); // Add the new user to the users array
    console.log('User added:', userFormData);
}