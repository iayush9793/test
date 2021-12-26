var n = prompt("enter number");
{
for(i=2;i<=n/2;i++)
{
if(n%i == 0)
{
break;
}
}
if(i>n/2)
alert("it is prime");
else
alert("it is not");
}