
import './App.css'

function App() {


    // Definition des Studenten-Typs und der Funktion printStudentGrades

    type Student = {
        firstName: string;
        lastName: string;
        age: number;
        grades: number[];
    };

    function printStudentGrades(student: Student): void {
        console.log(`Name: ${student.firstName} ${student.lastName}`);
        console.log(`Alter: ${student.age}`);
        console.log("Noten:");

        for (const grade of student.grades) {
            console.log(grade);
        }
    }

// Erstellung eines Studenten-Objekts und Aufruf der Funktion printStudentGrades

    const student: Student = {
        firstName: "Max",
        lastName: "Mustermann",
        age: 18,
        grades: [85, 90, 95, 80],
    };

    printStudentGrades(student);
}
export default App
