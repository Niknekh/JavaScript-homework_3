const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  let allEmployees = Object.entries(employees);


  for (let i = 0; i < allEmployees.length; i += 1) {
    let bestEmployees = allEmployees[i];
    console.log(bestEmployees);
    for (let j = 0; j < bestEmployees.length; j += 1){
      let bestEmployeesValue = bestEmployees[j][1];
          console.log(bestEmployeesValue);

      if (bestEmployeesValue > bestEmployeesValue ) {
        return bestEmployees[0];
      };
    };
  };
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
