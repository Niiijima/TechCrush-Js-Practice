// Write a function called summarizeStudent that accepts an array of student objects (each with name and score). The function should return a new array of strings in this format:'Amara scored 88 — Grade: B'
function summarizeStudent(students) {
    return students.map(student => {
        let grade;  
        if (student.score >= 70) {
            grade = 'A';
        } else if (student.score >= 60) {
            grade = 'B';
        } else if (student.score >= 50) {
            grade = 'C';
        }       else if (student.score >= 40) {  
            grade = 'D';
        } else {
            grade = 'F';
        } 
        return `${student.name} scored ${student.score} — Grade: ${grade}`;
    });
}      

