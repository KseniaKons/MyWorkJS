console.log("Задание №8 \n");
let star = "*",
  sharp = "##",
  tree = "",
  u = 1;

tree += star + "\n" + sharp + "\n";

while (u <= 12) {
  if (u % 2 !== 0) {
    star += "**";

    tree += star + "\n";
  } else {
    sharp += "##";

    tree += sharp + "\n";
  }

  u++;
}
console.log(tree);