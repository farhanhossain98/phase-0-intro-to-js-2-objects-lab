// Write your solution in this file!
const employee = {
    name: "sam",
    streetAddress: "m12 broadway"
}
// 1
function updateEmployeeWithKeyAndValue(employee,name,streetAddress) {
    const newemployee = {...employee};
    newemployee[name] = streetAddress
    return newemployee ;
}
// 3
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key] = value;
    return employee; 
}
// 4
function  deleteFromEmployeeByKey(employee,key) {
    const newemployee = {...employee} ;
    delete newemployee[key] ;
    return newemployee; 
}
// 5
function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key]
    return employee;
}