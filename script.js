
// let email = "test@gmail.com";

// let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// if (emailRegex.test(email)) {
//     console.log("Valid Email");
// }  else {
//     console.log("Invalid Email");
// }

// let password = "Password123"

// let passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// if (passwordRegex.test(password)) {
//     console.log("Strong Password");
// }else {
//     console.log("Week Password");
// }

// try {
//     let age = -5;

//     if (age < 0) {
//         throw new Error("age cannot be negativel");
//     }

//     console.log("Valid Age");
// } catch (error) {
//     console.log("Error:", error.mssage);
// }

// const user = {
//     name: "Afif",

//     showName:function () {
//         console.log(this.name);
//     }
// }

// user.showName ();

// function greet(city) {
//     console.log("Hello" + this.name + " from" + city);
// }

// const parson = {
//     name: "Rahim"
// };

// greet.call(parson, "Dhaka");

// function greet(city, country) {
//     console.log("Hello" + this.name + " from " + city + ", " + country);

// }

// const parson = {
//     name: "Karim"
// };

// greet.apply(parson,["Barisal", "Bangladesh"]);

function greet(city) {
    console.log("hello " + this.name + " from " + city);
}

const parson = {
    name: "Sakib"
}

const newGreet = greet.bind(parson, "Khulna");

newGreet();