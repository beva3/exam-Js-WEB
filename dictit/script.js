function search(){
    // alert('Searching...');
    // TODO get the word => resultat
    let word = document.getElementById('text').value;
    let resultat = document.getElementById('resultat');

    // ! verify if existing word
    if(word.length > 0){
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

        fetch(url).then(response => response.json().then(data => {
            // console.log(data);
            try {
                for (let words of data){
                    let definition = words.meanings[0].definitions[0].definition;
                    resultat.innerHTML = "<p class='res'> <span>Definition</span><br>"+ definition + "</p>";

                }
            } catch (error) {
                resultat.innerHTML = "<p class='res'>Auccune definition trouver !</p>";
            }
        }));
    }else{
        resultat.innerHTML = "<p class='res'>Veuiller remplir ce champ !</p>";
    }
}