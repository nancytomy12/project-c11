var weight = [35,38,42,45,43,34,36,41,48,32];
console.log(weight.length)
var sum = 0

for (var i=0; i<weight.length; i++){
sum = sum + weight[i]
}

console.log(sum)
console.log(sum/weight.length)
function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 

