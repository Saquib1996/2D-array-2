let arr=[
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
];

for(let i=0;i<arr.length;i++)
  {
     let bag="";
    for(let j=0;j<arr[0].length;j++)
      {
        bag=bag+(arr[i][j])+"       ";
      }
    console.log(bag);
  }
