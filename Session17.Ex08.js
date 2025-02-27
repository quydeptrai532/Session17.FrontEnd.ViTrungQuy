let date1 = prompt("Mời bạn nhập vào mốc thời gian đầu tiên")
let date2 = prompt("Mời bạn nhập vào mốc thời gian thứ hai")
let newDate1 = new Date(date1)
let newDate2 = new Date(date2)

let time = Math.abs(newDate2 - newDate1)
let day = Math.ceil(time / (60 * 60 * 24 * 1000))
document.write(`Số ngày chênh lệch là ${day}`)
