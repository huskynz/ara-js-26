class myController { 
    static setup() {
        var theElection = new myElection("NZ Election", 2020);
        

        // Adding parties
        theElection.addParty('Green Party');
        theElection.addParty('ACT New Zealand');
        theElection.addParty('Advance NZ');
        theElection.addParty('Aotearoa Legalise Cannabis Party');
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

        // This is moved down to the .toString() method of the myElection class
        // 
        // // Logging added parties and electorates
        // console.log("Parties:");
        // theElection.allMyParties.forEach(party => console.log(`- ${party.name}`));

        // console.log("Electorates:");
        // theElection.allMyElectorates.forEach(electorate => console.log(`- ${electorate.name}`));

        console.log(theElection.toString());
    }
}

class myParty { 
    public name: string;

    constructor(name: string) {
        this.name = name; 
          
    }
    toString() {
        return this.name;
    }

}

class myElectorate { 
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
    toString() {
        return this.name;
    }
}

class myElection { 
    public name: string;
    public year: number;
    public allMyParties: myParty[];
    public allMyElectorates: myElectorate[];

    constructor(newName: string, newYear: number) {
        this.name = newName;
        this.year = newYear;
        this.allMyParties = [];
        this.allMyElectorates = [];
    }

    addParty(newName: string) {
        var newParty = new myParty(newName);
        this.allMyParties.push(newParty); 
    }

    addElectorate(newName: string) {
        var newElectorate = new myElectorate(newName);
        this.allMyElectorates.push(newElectorate);
    }

    toString() {
       this.sortParties();
       let result = `Election: ${this.name} (${this.year})\nParties:\n`;
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
myController.setup();