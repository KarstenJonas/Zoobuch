import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Zoobuch';

  animals : Animal[] = [
    { name : "Hansi",     type : "Hund"},
    { name : "Poseidon",  type : "Papagei"},
    { name : "Schildi",   type : "Schildkröte"},
    { name : "Gerd",      type : "Giraffe"}
  ];

  filteredAnimals : Animal[] = [];

  newAnimal: Animal = {
    name : "",
    type : ""
  }

  deleteAnimal(animal: Animal)  : void {
    this.animals = this.animals.filter(a => a != animal);
  }

  addAnimal(){
    this.animals.push(this.newAnimal);
  }

  // Methode zum Öffnen des Bearbeitungsmodus für ein Tier
editAnimal(animal: Animal) {
  
}

// Attribut für die Suchanfrage
searchQuery: string = "";

// Methode zum Durchführen der Suche
searchAnimals() {
  if (this.searchQuery) {
    this.filteredAnimals = this.animals.filter(animal =>
      animal.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      animal.type.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  } else {
    this.filteredAnimals = this.animals;
  }
}


}
