        async function getPersonaje(){
            try{
                const res = await fetch("https://api.disneyapi.dev/character");
                const {status, data} = await res.json();
                const personajes = document.getElementById("personaje");

                data.forEach(({name, imageUrl}) =>{
                    const card = crearCard (name, imageUrl);
                    personajes.appendChild(card);
                });
            }catch(error){
                console.log(error)
            }
        }





        function crearCard(name, imageUrl){
            const card = document.createElement("div")
            card.classList.add("col", "s12", "m6", "l4");
            card.innerHTML =  `
                <div class="card row">
                <div class="card-image waves-effect waves-block waves-light">
                <img class="card-img" src="${imageUrl}" width=75 height=100 alt="${name}">
                </div>
                <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${name}</span>
                </div>
            `;
            return card
        }

        getPersonaje();