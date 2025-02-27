let money = Number(prompt("Mời bạn nhập vào số tiền gửi tiết kiệm:"));
let month = Number(prompt("Mời bạn nhập vào số tháng gửi tiết kiệm:"));
const laiSuatNam = 4.3 / 100;
const laiSuatThang = laiSuatNam / 12;
let tienLai = money * laiSuatThang * month;
let tongTien = money + tienLai;
document.write(`Số tiền lãi sau ${month} tháng là: ${tienLai.toLocaleString("vi-VN")} VNĐ <br>`);
document.write(`Tổng số tiền sau ${month} tháng là: ${tongTien.toLocaleString("vi-VN")} VNĐ`);
