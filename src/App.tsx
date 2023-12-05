
import './App.css'

function App() {

    class Schueler {
        constructor(
            public vorname: string,
            public nachname: string,
            public alter: number,
            public noten: (number | string | undefined)[]
        ) {}

        noten_ausgeben(): void {
            console.log(`${this.vorname} ${this.nachname} (${this.alter})`);
            console.log("=".repeat(30));
            console.log("Grades: " + this.noten.map(n => (n === undefined ? "*" : n)).join(", "));
        }

        static schueler_liste_ausgeben(schuelerListe: Schueler[]): void {
            for (const schueler of schuelerListe) {
                schueler.noten_ausgeben();
                console.log();
            }
        }
    }

// Schritt 1
    const anton = new Schueler("Anton", "Meier", 17, [1, 4, 3, 1, 3, 2, 1, 2]);
    anton.noten_ausgeben();
    console.log();

// Schritt 2
    const anton2 = new Schueler("Anton", "Meier", 17, ["A", 2, "F", 3, 1, "B", 2, 5]);
    anton2.noten_ausgeben();
    console.log();

// Schritt 3
    const anton3 = new Schueler("Anton", "Meier", 17, ["A", 2, undefined, 3, 1, "B", undefined, 5]);
    anton3.noten_ausgeben();
    console.log();

// Schritt 4
    const schuelerListe = [
        new Schueler("Anton", "Meier", 16, [1, 4, 3, 1, "A", undefined, 1, 2]),
        new Schueler("Berta", "Müller", 17, ["A", undefined, 1]),
        new Schueler("Cäsar", "Schmidt", 17, ["A", 1, undefined, 3, 2, 4, 5])
    ];
    Schueler.schueler_liste_ausgeben(schuelerListe);
}
export default App
