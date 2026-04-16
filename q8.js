// write a function gradeScore(score) that returns a letter grade: 70 to 100 A, 60 to 69 B, 50 to 59 C, 40 to 49 D, below 40 F. Test it with: 85, 62, 45, and 30
function gradeScore(score) {
  if (score >= 70) {
    return 'A';
  } else if (score >= 60) {
    return 'B';
  } else if (score >= 50) {
    return 'C';
  } else if (score >= 40) {
    return 'D';
  } else {
    return 'F';
  }
}
console.log(gradeScore(85)); // A
console.log(gradeScore(62)); // B
console.log(gradeScore(45)); // D
console.log(gradeScore(30)); // F   