//Listado de los 151 pokemon usando la poke api, donde salga su experiencia base, altura peso id sprite de cara.
//Al hacer click en un pokemon, se redirige a una página con más detalles del pokemon.

class Pokedex {
    constructor() {
        // this.apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
        this.apiURL = 'https://pokeapi.co/api/v2/pokemon/';
        this.numberOfPokemons =200;
    }

    async getPokemons() {
        //En este método se hace una petición a la API de pokemon para obtener los datos de los 151 primeros pokemon.
        const pokemonPromises = [];// esta arrat guardará las promesas de las peticiones a la API, cada pokemon.
        for (let i = 1; i <= this.numberOfPokemons; i++) {
            // Por cada pokemon se hace una petición a la API y se guarda la promesa en un array.
            pokemonPromises.push(fetch(this.apiURL + i).then(response => response.json()));
        }
        // ESPERAMOS a que todas las promesas se resuelvan.
        const pokemons = await Promise.all(pokemonPromises);
        // una vez tenemos los datos de todos los pokemon, usamos renderPokemons
        this.renderPokemons(pokemons);
    }

    renderPokemons(pokemons) {
        //Este método recibe un array de objetos con los datos de los pokemon y los muestra en una tabla.
        const table = document.createElement('table');
        // Creamos la fila de cabecera de la tabla.
        const headerRow = document.createElement('tr');
        const headers = ['ID', 'Name', 'Base Experience', 'Height', 'Weight', 'Sprite'];

        headers.forEach(headerText => {
            // Por cada cabecera creamos un th y lo añadimos a la fila de cabecera.
            const header = document.createElement('th');
            header.textContent = headerText;
            headerRow.appendChild(header);
        });
        table.appendChild(headerRow);

        // Por cada pokemon creamos una fila y añadimos las celdas correspondientes.
        pokemons.forEach(pokemon => {
            const row = document.createElement('tr');
            //Le añadimos un evento a la fila para que al hacer click en ella se redirija a la página de detalles del pokemon.
            row.addEventListener('click', () => {
                //woindow.location.href es una propiedad que nos permite redirigir a otra página.
                window.location.href = `pokemon_detail.html?id=${pokemon.id}`;
            });

            const idCell = document.createElement('td');//creamos la td para meter los datos del id
            idCell.textContent = pokemon.id;
            row.appendChild(idCell);

            const nameCell = document.createElement('td');//del nombre
            nameCell.textContent = pokemon.name;
            row.appendChild(nameCell);

            const baseExperienceCell = document.createElement('td');//de la xp base
            baseExperienceCell.textContent = pokemon.base_experience;
            row.appendChild(baseExperienceCell);

            const heightCell = document.createElement('td');//de la altura
            heightCell.textContent = pokemon.height;
            row.appendChild(heightCell);

            const weightCell = document.createElement('td');//del peso
            weightCell.textContent = pokemon.weight;
            row.appendChild(weightCell);

            const spriteCell = document.createElement('td');//del sprite
            const spriteImg = document.createElement('img');//y una imagen
            spriteImg.src = pokemon.sprites.front_default;
            spriteCell.appendChild(spriteImg);
            row.appendChild(spriteCell);

            table.appendChild(row);//añadimos la fila a la tabla
        });
        //cuanod ya hemos recorrido todos los pokemon, añadimos la tabla al html.
        document.body.appendChild(table);
    }
}


