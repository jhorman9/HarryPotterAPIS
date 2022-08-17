const charactersArea = document.querySelector(".grilla")

//mediante fetch se hacen peticiones desde el http hacer consultas a otros servidores pr medio de una URL
//el FETCH 
fetch("http://hp-api.herokuapp.com/api/characters") //recibe un http como parametro, el FETCH devuelve una promesa
.then((response) => response.json())
.then(data => printCharacter(data));

function printCharacter(character) {
    newData = character.slice(0,20); // agregar al insertCharacter
    insertCharacters(character);
}

/*async function apis() {
    const allCharacters = await fetch("http://hp-api.herokuapp.com/api/characters");
    const all = await allCharacters.json();
    console.log(all.slice(0,20));
}

apis();
*/

function createCard(img, name) {
    return `
        <div class="hpCard">
        <div class="imgContainer">
            <img src="${img !== "" ? img : "https://www.cinemascomics.com/wp-content/uploads/2020/04/harry-potter-Trimeresurus-Salazar.jpg"}" alt="HarryPotter-Character">
        </div>
        <h2>${name}</h2>
    </div>    
    `
}

//LINK : http://hp-api.herokuapp.com/api/characters//

function insertCharacters(arr) {
    charactersArea.innerHTML = arr.map((character) => createCard(character.image, character.name)).join("")
}