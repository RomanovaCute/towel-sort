
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  
  if(!Array.isArray(matrix) || !matrix.length){
    return [];
  } else {
    matrix.map((item, i) => {
      if(i % 2 === 0) {                    // если индекс массива в составе матрицы четный 0,2,4... 
        array.push(...matrix[i])           // то добавляем входящие в него значения в массив array
     } else {                              // иначе (индекс массив нечетный 1,3,5...)
      array.push(...matrix[i].reverse())   // добавляем значения в обратном порядке в array
     }
    })
    return array;
  }  
}      