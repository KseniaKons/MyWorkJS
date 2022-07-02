

console.log("Задание №9 \n");
let numb1 = 2, numb2 = 9,numb3 = -6, str;
str="";
if (numb1 > numb2 && numb1 > numb3)
{
    str += numb1 + " ";
    if(numb2 > numb3)
    {
        str += numb2 + " "+numb3;
    }
    else 
    {
        str += numb3 + " "+numb2;
    }

}
if (numb2 > numb1 && numb2 > numb3)
{
    str += numb2 + " ";
    if(numb1 > numb3)
    {
        str += numb1 + " "+numb3;
    }
    else 
    {
        str += numb3 + " " + numb1;
    }

}
if (numb3 > numb2 && numb3 > numb1)
{
    str += numb3 + " ";
    if(numb1 > numb2)
    {
        str += numb1 + " "+numb2;
    }
    else 
    {
        str += numb2 + " "+numb1;
    }

}
console.log(str);