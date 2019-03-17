/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   let  n = 0, a=[];
   outer:
   for (let i = 0, b = preferences.length; i < b; i++) {
       for (let q = 0; q < a.length; q++) {
           if (i + 1 == a[q]) {
               continue outer;
           }
       }
       if (preferences[i] != i+1) 
       {
          let j = preferences[i] - 1;
          let k = preferences[j] - 1;
          if (preferences[k] == i + 1) {
              n++;

              a.push(preferences[i]);
              a.push(preferences[j]);
              a.push(preferences[k]);
          }   
      }
  }
  return n;
};
