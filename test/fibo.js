var n = parseInt(prompt());
function fibo(n)
{
if(n<=1)
{return n;
}
else
{
return fibo(n-1)+fibo(n-2);
}
}
console.log(fibo(n));