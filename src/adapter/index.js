const localStorage = require('./localStorage');

console.log("localStorage length: ", localStorage.length);

const uid = localStorage.getItem("user_id");

if (!uid) {
    console.log("User ID not found. Setting the user id and token...");
    localStorage.setItem("token", "ERYsfg435ysrfbsrh45tWgfd43tH2tSDFe34tre34");
    localStorage.setItem("user_id", "12345");
} else {
    console.log("User ID found.", uid);
    console.log("cleaning the User ID...");
    localStorage.clear();
}