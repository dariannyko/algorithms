function diagonalSum(mat: number[][]): number {
    let sum=0; 
    let l= mat.length;
      for(let i=0; i<l/2; i++) {
          let j = l-1-i;
          if(i===j){
              sum+=mat[i][i];
          }else{
            sum+= mat[i][i] + mat[i][j] + mat[j][i] +mat[j][j];
          } 
      }
    return sum;
};