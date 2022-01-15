const axios = require('axios');   //1.安裝 2.引用

(async () => {
    try {
        let response = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220109&stockNo=2330&_=1641716372516")
        console.log(response.data); //回傳一個response物件 ，可以多看，之後好debug，常用是data區
    }
    catch (err) {
        console.error(err);

    }

})();