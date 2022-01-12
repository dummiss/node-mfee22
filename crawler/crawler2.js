const axios = require('axios');   //1.安裝 2.引用

(async () => {
    try {
        let response = await axios.get("http://34.221.173.92:3000/data")
        console.log(response.data); //回傳一個response物件 ，可以多看，之後好debug，常用是data區
    }
    catch (err) {
        console.error(err);

    }

})();
