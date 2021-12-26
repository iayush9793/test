var a = 2;
a=parseInt(a);
var b = 5;
b=parseInt(b);
var n = 7;
n=parseInt(n);

var NthTerm;
for (var i = 0; i < n; i++)  {
   NthTerm = a * Math.pow(b, i);
        console.log(NthTerm + " ");
    }
