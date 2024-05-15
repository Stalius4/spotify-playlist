

  




    export  const  searchSong = async (token, setSearchData, searchValue) => {
        const authOptions = {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + token
            }}
        try{
          const response = await fetch(`https://api.spotify.com/v1/search?q=${searchValue}&type=track`, authOptions)
          if(response.ok){
           const jsonResponse = await response.json()
           console.log(jsonResponse.tracks.items)
           setSearchData(jsonResponse.tracks.items)
          }
        }
        catch(error){
          console.log(error)
        }
      }

    
      export  const  addPlaylist = async (token, playlistName , playlist) => {

        const trackArr = []

        for (let i = 0; i < playlist.length; i++) { // Corrected the loop condition and typo
         trackArr.push(playlist[i].uri)
        }

        const authOptions = {
          method: 'POST',
          headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: playlistName,
            description: '',
            public: false,
          })
      };
      const authOptions1 = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uris:trackArr,
          position: 0
        })
    };

        try{
          const response = await fetch(`https://api.spotify.com/v1/users/1136378692/playlists`, authOptions)
          if(response.ok){
           const jsonResponse = await response.json()
           const createdPlaylistId = jsonResponse.id
           console.log(jsonResponse)
           console.log(createdPlaylistId, "id")
          const addSong = await fetch(`https://api.spotify.com/v1/playlists/${createdPlaylistId}/tracks`,authOptions1)
          if(addSong.ok){
            const addSongResponse = await addSong.json()
            console.log(addSongResponse)
          }
          }
        }
        catch(error){
          console.log(error)
        }
      }

      