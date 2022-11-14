const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("RESOURCES/error.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeInfo = data.abilities;
            let pokeNm = data.name;
            pokeImage(pokeImg);
            pokeData(pokeInfo);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
    pokePhoto.style.width = "auto";
    pokePhoto.style.height = "150px";
}

const pokeData = (abilities) => {
    const pokeAbilities = document.getElementById('abilities');
    const abilitiesName = abilities.map(item => item.ability.name);
    pokeAbilities.innerHTML = "<p>" + abilitiesName [0] + "<p>" + "<p>" + abilitiesName [1] + "<p>" + "<p>" + abilitiesName [2] + "<p>";
}
