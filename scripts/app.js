const userCard = document.querySelector('.usercards');
const searchInput = document.querySelector('#search-field');
const searchButton = document.querySelector('.search');
const userForm = document.querySelector('.submit-btn');

//Searching to see if user exists then removes user input after sucessful find.
function findUser(userSearch) {
    isFound = false;
    for (let i = 0; i < users.length; i++){
        
    if (userSearch.toLowerCase().includes(users[i].firstName.toLowerCase()) || userSearch.toLowerCase().includes(users[i].lastName.toLowerCase()) || userSearch.toLowerCase().includes(users[i].skill.toLowerCase())) {
            isFound = true;
            console.log("User is available");
            break;
        } else if (users[i].tags.includes(userSearch)){
            isFound = true;
            console.log("User is available");
            break;
        }
    } 
    if (!isFound){
        console.log("User not found");
        return;
        }
}

searchButton.addEventListener('click', function() {
    findUser(searchInput.value);
    searchInput.value = "";
});

//Passes the user form through this function and pushes it to a the users.js database.
function addUser(userForm) {
    userForm = userForm.value;

}