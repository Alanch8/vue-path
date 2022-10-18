import axios from 'axios'

const apiKey = "pAnVp49EoVI80OQTLC7ucqusVk4kOB24";
// https://api.giphy.com/v1/gifs/random?api_key=${apiKey}

const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey
  }
});


// giphyApi.get('/random')
// .then( resp => {

//   const { data } = resp.data
//   const { url } = data.images.original

//   const img = document.createElement("img")
//   img.src = url
  
//   document.body.append(img)
// })