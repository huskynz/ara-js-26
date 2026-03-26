class Controller { 
    static setup() {
        var theElection = new Election("NZ Election", 2020);
        

        // Adding parties
        theElection.addParty('ACT New Zealand');
        theElection.addParty('Advance NZ');
        theElection.addParty('Aotearoa Legalise Cannabis Party');
        theElection.addParty('Green Party');
        theElection.addParty('HeartlandNZ');
        theElection.addParty('Labour Party');

        // Adding electorates
        theElection.addElectorate('Otaki');
        theElection.addElectorate('Pakuranga');
        theElection.addElectorate('Palmerston');
        theElection.addElectorate('Panmure-Otahuhu');
        theElection.addElectorate('Papakura');
        theElection.addElectorate('Port Waikato');
        theElection.addElectorate('Rangitata');
        theElection.addElectorate('Rangitikei');
        theElection.addElectorate('Remutaka');

        // Logging added parties and electorates
        console.log("Parties:");
        theElection.allMyParties.forEach(party => console.log(`- ${party.name}`));

        console.log("Electorates:");
        theElection.allMyElectorates.forEach(electorate => console.log(`- ${electorate.name}`));

        return theElection;
    }
}

class Party { 
    constructor(name) {
        this.name = name; 
          
    }
    toString() {
        return this.name;
    }

}

class Electorate { 
    constructor(name) {
        this.name = name;
    }
    toString() {
        return this.name;
    }
}

class Election { 
    constructor(newName, newYear) {
        this.name = newName;
        this.year = newYear;
        this.allMyParties = [];
        this.allMyElectorates = [];
    }

    addParty(newName) {
        var newParty = new Party(newName);
        this.allMyParties.push(newParty); 
    }

    addElectorate(newName) {
        var newElectorate = new Electorate(newName);
        this.allMyElectorates.push(newElectorate);
    }

    toString() {
       this.sortParties();
       let result = `Election: ${this.name} (${this.year})\nParties:\n`;
       result += "Parties:\n";
       this.allMyParties.forEach(party => {
           result += `- ${party.name}\n`;
       });
       result += "Electorates:\n";  
         this.allMyElectorates.forEach(electorate => {
              result += `- ${electorate.name}\n`;
            });
         return result;
    }

    sortParties() {
        this.allMyParties.sort((a, b) => a.name.localeCompare(b.name));
        
    }
}
Controller.setup();