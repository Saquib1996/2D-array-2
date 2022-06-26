let arr = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];
let k=11;
let x=-1,y=-1,d=0,s=0;
let rows=arr.length;
let cols=arr[0].length;
for(let i=0;i<rows;i++)
  {
    for(let j=0;j<cols;j++)
      {
        if(arr[i][j]===k)
        {
          x=i;
          y=j;
        }
      }
  }
d=x-y;
let bag2="";
for(let i=0;i<rows;i++)
  {
    for(let j=0;j<cols;j++)
      {
        if(d===(i-j))
          bag2=bag2+arr[i][j]+" ";
      }
  }
console.log(bag2);
s=x+y;
let bag1="";
for(let i=0;i<rows;i++)
  {
    for(let j=0;j<cols;j++)
      {
        if(s===(i+j))
          bag1=bag1+arr[i][j]+" ";
      }
  }
console.log(bag1);