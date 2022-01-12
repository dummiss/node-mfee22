const axios = require('axios');   //1.安裝 2.引用
// Make a request for a user with a given ID
axios.get("http://34.221.173.92:3000/data")
.then(function (response) {
// handle success
console.log(response.data); //回傳一個response物件 ，可以多看，之後好debug，常用是data區
})
.catch(function (error) {
// handle error
console.log(error);
});