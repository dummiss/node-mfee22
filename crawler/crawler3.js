const axios = require("axios");
const { readFile } = require("fs/promises");




(async () => {
  try {
    // 根據變數去抓取資料

    let today= new Date();
    let queryDate=today.getFullYear+(today.getMonth()+1)+today.getDate();

    let result = await readFile("stock.txt", "utf-8")
    let stockNo = result;

    let response = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        // 這裡可以放一些設定
        // params: 放 query string 的參數
        params: {
          response: "json",
          date: queryDate,
          stockNo,
        },
      }
    );

    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
})();


