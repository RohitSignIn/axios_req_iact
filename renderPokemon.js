function renderPokemons(url) {
  $.ajax({
    type: "get",
    url: url,
    pending: function (res) {
      $("#poke_con").append(`<div> Loading </div>`);
    },
    success: function (res) {
      const pokemons = res.results;
      pokemons.forEach((poke) => {
        $.ajax({
          type: "get",
          url: poke.url,
          success: function (response) {
            $("#poke_con").append(`
                    
                    <div class="poke_card">

                        <div>
                            <div>
                                <img src="${response["sprites"]["other"]["official-artwork"]["front_default"]}"
                                    alt="${response["forms"][0]["name"]}">
                            </div>
                            <div>
                                <p>${response["forms"][0]["name"]}</p>
                            </div>
                        </div>

                        </div>
                    `);
          },
        });
      });
    },
  });
}
