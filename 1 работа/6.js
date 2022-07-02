console.log("Задание №6 \n");
let kol,i, string;
kol = prompt('Количесво овец');
i = 1;
string = "";
while(i <= kol)
{
    string += i + "овечка... ";
    i++;
}

console.log(string);