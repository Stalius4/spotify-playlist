

    const client_id ='22a43583eba9467f9f2105f8d7fdfef6'
    const client_secret = 'eb2f41d274c845858c983e9e9c26f02c'
    const redirect_uri = 'http://localhost:3000/callback';





export const handleAuth = () => {
    const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';
  
    // Redirect user to Spotify authorization page
    window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${encodeURIComponent(client_id)}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  };





  export const fetchAccessToken = (code, setToken) => {

  
    const authOptions = {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': redirect_uri,
      }).toString()
    };
  
    fetch('https://accounts.spotify.com/api/token', authOptions)
      .then(response => response.json())
      .then(data => {
        setToken(data.access_token);
        console.log('Token:', data.access_token);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };