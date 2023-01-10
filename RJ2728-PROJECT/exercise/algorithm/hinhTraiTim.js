let cao = 40;
let tren = parseInt((cao / 100) * 40);
let duoi = cao - tren;
let hinhTren = "";
for (let i = tren / 2; i <= tren; i++) {
  for (let k = 1; k < tren - i; k += 2) {
    hinhTren += " ";
  }
  for (let k = 1; k <= i; k++) {
    hinhTren += "*";
  }
  for (let k = 1; k <= tren - i; k++) {
    hinhTren += " ";
  }
  for (let k = 1; k <= i; k++) {
    hinhTren += "*";
  }
  hinhTren += "\n";
}
let hinhDuoi = "";
for (let i = 1; i <= duoi; i++) {
  for (let j = 1; j < i; j++) {
    hinhDuoi += " ";
  }
  for (let k = (cao + duoi) / 2; k >= i * 2 - 1; k--) {
    hinhDuoi += "*";
  }
  hinhDuoi += "\n";
}
let hinhTraiTim = hinhTren + hinhDuoi;
console.log(hinhTraiTim);
