// Create two variables, one using let to store a student's grade (which can change) and another using const to store their name (which shouldn't change). Modify the grade variable but attempt to modify the name variable. Observe the outcome.

let grade = 90;       
const name = "Alice";  

grade = 95;  
name = "Bob";  
console.log(grade);  
console.log(name);   
