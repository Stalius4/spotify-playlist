

  
    const client_id = '22a43583eba9467f9f2105f8d7fdfef6';
    const client_secret = 'eb2f41d274c845858c983e9e9c26f02c';
    const tokenn ="BQDmrD_XEpQesJajpDgk8J1s2-5XX3r3472P5sZaOGSrlcQrmdjqMz3BpLPy8l9HO4BZ7hatvag8SWjJLKQegYFyl8JLo40CvuQJTetzmbHUVGPN66yT2kuoeovbflVVZmbsNsNjlekLhYKhMxQfThDgpEcZEVePkP9CSdvSDPOOVhoK8u_eNXe4Vtk"







     const handleAuth = (setToken) => {
      const authOptions = {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          'grant_type': 'client_credentials'
        }).toString()
      };
  
      fetch('https://accounts.spotify.com/api/token', authOptions)
        .then(response => response.json())
        .then(data => {
          setToken(data.access_token);
          console.log(data.access_token)
         
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };




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


      export  const  addPlaylist = async (token) => {
        const authOptions = {
          method: 'POST',
          headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: 'New Playlistadss',
            description: 'New playlist description',
            public: false
          }) // Adding the body object here
      };
        try{
          const response = await fetch(`https://api.spotify.com/v1/users/1136378692/playlists`, authOptions)
          if(response.ok){
           const jsonResponse = await response.json()
           console.log(jsonResponse)
           
          }
        }
        catch(error){
          console.log(error)
        }
      }