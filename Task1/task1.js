const axios = require("axios");
const XLSX = require("xlsx");
const path = require("path");
const url = "https://go.microsoft.com/fwlink/?LinkID=521962";
axios
  .get(url, { responseType: "arraybuffer" })
  .then((response) => {
    const data = response.data;
    const workbook = XLSX.read(data, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    const filterResults = jsonData.filter((row) => row["  Sales "] > 50000);
    const newWorkbook = XLSX.utils.book_new();
    const newWorksheet = XLSX.utils.json_to_sheet(filterResults);
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Filtered results");
    const outputFile = path.join(__dirname, "results.xlsx");
    XLSX.writeFile(newWorkbook, outputFile);
    console.log(`Lưu file thành công tại: ${outputFile}`);
  })
  .catch((error) => {
    console.error("Lấy dữ liệu tại URL xảy ra lỗi:", error.message);
  });
