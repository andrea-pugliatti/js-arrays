const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// const reversedTeachers = teachers.toReversed();
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
// const longNames = teachers.filter((teacher) => teacher.length >= 5);
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];
  if (teacher.length >= 5) {
    longNames.push(teacher);
  }
}

// 3. Rimuovi 'Ed' dall'array teachers
// teachers.splice(1, 1);
const teachersTemp = [];
for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];
  if (teacher !== "Ed") {
    teachersTemp.push(teacher);
  }
}
// teachers = teachersTemp;

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
// const isFabioPresent = teachers.includes("Fabio");
let isFabioPresent = false;
for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];
  if (teacher === "Fabio") {
    isFabioPresent = true;
  }
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
// const teachersString = teachers.toString();
// oppure const teachersString = teachers.join(", ");
let teachersString = "";
for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];
  teachersString += teacher;
  if (i !== teachers.length - 1) {
    teachersString += ", ";
  }
}
