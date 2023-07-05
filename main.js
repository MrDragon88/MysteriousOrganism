// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  const pAequorFactory = (number, arrDNABase)=>{
        return{
            specimenNum : number,
            dna: arrDNABase,
            mutate(){
                let basePosition = Math.floor(Math.random()*15);
                //console.log(basePosition);
                let dnaBase = this.dna[basePosition];
                //console.log(`Original Base: ${dnaBase}`);
                do{
                    let newBase = returnRandBase();
                    //console.log(`New Base: ${newBase}`);
                    this.dna[basePosition] = newBase;
                }
                while(this.dna[basePosition] === dnaBase);
            },
            compareDNA(pAequor){
                let count = 0;
                let percentage = 0;
                    //console.log(`Specimen ${this.specimenNum}: DNA: [${this.dna}]`);
                    //console.log(`Specimen ${pAequor.specimenNum}: DNA: [${pAequor.dna}]`);
                for(let i = 0; i<15;i++){
                    if(this.dna[i]===pAequor.dna[i]){
                        count++;
                    }
                }
                percentage = +(Math.round(count/14*100 + "e+2") + "e-2");
                console.log(`Specimen #${this.specimenNum} and Specimen #${pAequor.specimenNum} have a ${percentage}% DNA in common.`);
            },
            willLikelySurvive(){
                let count = 0;
                let percentage = 0;
                let state = null;
                //console.log(`Specimen ${this.specimenNum}: DNA: [${this.dna}]`);
                for(let i = 0 ; i < 15 ; i++){
                    if(this.dna[i]=== 'C' || this.dna[i]=== 'G'){
                        count++;
                    }
                }

                percentage = Math.round(count / 14 *100);
                //console.log(`Percentage: ${percentage}`);
                if(percentage >= 60){
                    state = true;
                }
                else{
                    state = false;
                }
                return state;
            },
            complementStrand(){
                let dnaComplement =[];
                for(let i = 0; i<15;i++){
                    switch(this.dna[i]){
                        case 'A':
                            dnaComplement.push('T');
                            break;
                        
                        case 'T':
                            dnaComplement.push('A');
                            break;
                        
                        case 'C':
                            dnaComplement.push('G');
                            break;
                        
                        case 'G':
                            dnaComplement.push('C');
                            break;
                    }
                }
            return dnaComplement;
            }
        }
  };

  
  
  const specie1 = pAequorFactory(5,mockUpStrand());
  const specie2 = pAequorFactory(6,mockUpStrand());
  
  
  //console.log(specie.specimenNum);
  //console.log(specie1.dna);
  //specie.mutate();
  //console.log(specie1.dna);

  //specie1.compareDNA(specie2);
  //console.log(specie1.willLikelySurvive());
  //console.log(specie2.willLikelySurvive());

let numberInstance = 30;
let newStrands = [];
 while(numberInstance>0){
    let temp = pAequorFactory(numberInstance,mockUpStrand());
    if(temp.willLikelySurvive() === true){
        newStrands.push(temp);
    }
    numberInstance--;
 }

 console.log(newStrands);

 console.log(specie1.dna);
 console.log(specie1.complementStrand());