let year= prompt('Год');

if(year % 4 == 0 && year % 100 != 0) 
{
    alert(true); 
}
else
{
    alert(false);
}