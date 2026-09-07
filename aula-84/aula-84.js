function slicing(frase, tweet_limit=140){
    return frase.slice(0, tweet_limit);
}

console.log(slicing('franklin'));