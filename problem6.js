let arr=[
  [2,4,7,9],
  [6,1,2,3],
  [4,2,7,3]
];
let bag="";
let row=arr.length;
let col=arr[0].length;
for(let i=0;i<col;i++)
  {
    for(let j=row-1;j>=0;j--)
      {
        bag=bag+arr[j][i]+" ";
      }
  }
console.log(bag);