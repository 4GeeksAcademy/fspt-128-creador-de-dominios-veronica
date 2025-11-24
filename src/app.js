const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const extenxions = [`.com`, `.net`, `.us`, `.io`]
function generadorDominios(pronoun, adj, noun,extenxions) {

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; extenxions.length>l; l++) {
          console.log(`${pronoun[i]}${adj[j]}${noun[k]}${extenxions[l]}`);
        }
      }
    }
  }
 
}generadorDominios(pronoun,adj,noun,extenxions);