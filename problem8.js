function goInZigZag(N, M, matrix)
{
    let bag="";
    for(let i=0;i<N;i++)
    {
        if(i%2===0)
            for(let j=M-1;j>=0;j--)
                bag=bag+matrix[i][j]+" ";
        else
            for(let j=0;j<M;j++)
                bag=bag+matrix[i][j]+" ";
    }
  console.log(bag);
}
