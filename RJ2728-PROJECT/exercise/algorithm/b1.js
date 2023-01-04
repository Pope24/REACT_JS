let h = 5;
let content = "";
for (let i = 1; i <= h; i++) {
  for (let j = 1; j <= i; j++) {
    content += "*";
  }
  content += "\n";
}
console.log(content);
let content2 = "";
for (let i = 1; i <= h; i++) {
  for (let j = h; j > i; j--) {
    content2 += " ";
  }
  for (let k = 1; k <= i * 2 - 1; k++) {
    content2 += "*";
  }
  content2 += "\n";
}
console.log(content2);
