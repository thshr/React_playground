var axios = require('axios');


module.exports = {
    fetchPlayers: function () {
        const uri = 'https://ogameapi.azurewebsites.net/api/players?uni=109';
        //const uri = 'http://localhost:7071/api/players?uni=109';

        return axios.get(uri)
            .then(response => response.data);

    }

}