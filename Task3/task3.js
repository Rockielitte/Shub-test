const axios = require("axios");
axios
  .get("https://share.shub.edu.vn/api/intern-test/input")
  .then((response) => {
    const { token, data, query } = response.data;
    const results = [];
    for (let i = 0; i < query.length; i++) {
      const { type, range } = query[i];
      const [l, r] = range;
      let result;
      if (type === "1") {
        result = sumQuery(data, l, r);
      } else if (type === "2") {
        result = differentQuery(data, l, r);
      }

      results.push(result);
    }
    console.log("Results: ", results);
    axios
      .post("https://share.shub.edu.vn/api/intern-test/output", results, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        console.log("Gửi kết quả thành công.");
      })
      .catch((error) => {
        console.error("Lỗi gửi kết quả :", error.message);
      });
  })
  .catch((error) => {
    console.error("Lỗi lấy dữ liệu Input:", error.message);
  });

function sumQuery(data, l, r) {
  let sum = 0;
  for (let i = l; i <= r; i++) {
    sum += data[i];
  }
  return sum;
}
function differentQuery(data, l, r) {
  let difference = 0;
  for (let i = l; i <= r; i++) {
    difference += i % 2 === 0 ? data[i] : -data[i];
  }
  return difference;
}
