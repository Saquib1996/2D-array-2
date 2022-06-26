let arr=[
  [1,2,3,4],
  [5,6,7,8],
  [21,22,34,19]
];
let sum=0;
let rows=arr.length;
let columns=arr[0].length;
for(let i=0;i<rows;i++)
  {
    
    for(let j=0;j<columns;j++)
      {
        if(arr[i][j]%2===0)
          sum=sum+arr[i][j];
      }
  }
console.log(sum);