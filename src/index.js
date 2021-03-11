module.exports = function towelSort (matrix) {
  if( matrix == undefined){
    return [];
  }  

  if( matrix.length == 0){
    return [];
  }
  let temp = [];

  for( let i = 1; i < matrix.length; i += 2){
    if(matrix[i].length == 2){
      temp = matrix [i][0];
      matrix[i][0] = matrix[i][1];
      matrix[i][1] = temp;
    }
    else if(matrix[i].length == 3){
      temp = matrix [i][0];
      matrix[i][0] = matrix[i][2];
      matrix[i][2] = temp;
    }
    else if(matrix[i].length == 4){
      temp = matrix [i][0];
      matrix[i][0] = matrix[i][3];
      matrix[i][3] = temp;
      temp = matrix[i][1];
      matrix[i][1] = matrix[i][2];
      matrix[i][2] = temp;
    }
  }
  let matrix2 = [];
  for ( let i =0; i < matrix.length; i++){
    matrix2 = matrix2.concat(matrix[i]);
  }
  return matrix2;
}