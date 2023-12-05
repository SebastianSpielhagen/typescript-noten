import './App.css'; // Import der CSS-Datei für die App-Styling

function App() {

    // Schülerklasse mit Konstruktor
    class Schueler {
        constructor(
            public vorname: string, // Vorname des Schülers
            public nachname: string, // Nachname des Schülers
            public alter: number, // Alter des Schülers
            public noten: (number | string | undefined)[] // Array mit Noten des Schülers
        ) {}

        // Methode zum Ausgeben der Noten des Schülers
        noten_ausgeben(): void {
            console.log(`${this.vorname} ${this.nachname} (${this.alter})`); // Ausgabe von Vorname, Nachname und Alter
            console.log("=".repeat(30)); // Ausgabe von 30 Gleichheitszeichen
            console.log("Grades: " + this.noten.map(n => (n === undefined ? "*" : n)).join(", ")); // Ausgabe der Noten mit Sternchen für undefinierte Noten
        }

        // Statische Methode zum Ausgeben einer Liste von Schülern
        static schueler_liste_ausgeben(schuelerListe: Schueler[]): void {
            for (const schueler of schuelerListe) {
                schueler.noten_ausgeben(); // Ausgabe der Noten jedes Schülers
                console.log(); // Leerzeile
            }
        }
    }

    // Schritt 1: Erstellen eines Schülers mit numerischen Noten
    const anton = new Schueler("Anton", "Meier", 17, [1, 4, 3, 1, 3, 2, 1, 2]);
    anton.noten_ausgeben(); // Ausgabe der Noten von Anton
    console.log(); // Leerzeile

    // Schritt 2: Erstellen eines Schülers mit gemischten Noten (numerisch und string)
    const anton2 = new Schueler("Anton", "Meier", 17, ["A", 2, "F", 3, 1, "B", 2, 5]);
    anton2.noten_ausgeben(); // Ausgabe der Noten von Anton2
    console.log(); // Leerzeile

    // Schritt 3: Erstellen eines Schülers mit undefinierten Noten
    const anton3 = new Schueler("Anton", "Meier", 17, ["A", 2, undefined, 3, 1, "B", undefined, 5]);
    anton3.noten_ausgeben(); // Ausgabe der Noten von Anton3
    console.log(); // Leerzeile

    // Schritt 4: Erstellen einer Liste von Schülern und Ausgabe der Noten aller Schüler
    const schuelerListe = [
        new Schueler("Anton", "Meier", 16, [1, 4, 3, 1, "A", undefined, 1, 2]),
        new Schueler("Berta", "Müller", 17, ["A", undefined, 1]),
        new Schueler("Cäsar", "Schmidt", 17, ["A", 1, undefined, 3, 2, 4, 5])
    ];
    Schueler.schueler_liste_ausgeben(schuelerListe); // Ausgabe der Notenliste der Schüler

}

export default App;