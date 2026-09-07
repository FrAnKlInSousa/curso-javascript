function tweet( frase , tweet_limit=140) {
    return `You have written ${frase.length} characters, you have -${tweet_limit - frase.length} characters left.`
}

console.log(tweet('olah'));
