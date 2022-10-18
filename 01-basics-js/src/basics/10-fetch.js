

const apiKey = "pAnVp49EoVI80OQTLC7ucqusVk4kOB24";
// https://api.giphy.com/v1/gifs/random?api_key=pAnVp49EoVI80OQTLC7ucqusVk4kOB24

fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then( resp => resp.json() )
  .then ( ( { data } ) => {
    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append( img )
  })