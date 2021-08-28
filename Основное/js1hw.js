// Поиск по возрасту работника
let ask_age = prompt("Age")

//Поиск по зарплату работника
let ask_salary = prompt("Salary")



//Массив с работниками
let workers = [
    {
        name: 'Anvar',
        age: 18,
        salary: 3000,
        
    },
    {
        name: 'Jhonibek',
        age: 22,
        salary: 8000,
        
    },
   {
        name: 'Ratatuy',
        age: 35,
        salary: 4200,
        
    },
    { 
        name: 'Amanda',
        age: 32,
        salary: 2800,
        
    },
    {
        name: 'Kevin',
        age: 25,
        salary: 7000,
        
    },
    {
        name: 'Ahad',
        age: 38,
        salary: 22000,
        
    },
    {
        name: 'Sabrina',
        age: 19,
        salary: 6000,
        
    },
    {
        name: 'Bob',
        age: 20,
        salary: 5000,
       
    },
    {
        name: 'Munisa',
        age: 24,
        salary: 9000,
      
    },
]


for(let item of workers){
    if(ask_age == item.age & ask_salary == item.salary){
        console.log(item)
    }
}



// Потом в консоли должны быть указаны работники, которые соответствуют этим требованиям.