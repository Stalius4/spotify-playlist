




export const searchMusic = async (input) =>{
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${input}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '53cf785130msh2f69642cadc97d6p10893djsna1436527c5fb',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    
    


}



