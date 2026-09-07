function captalize(palavra){
    return palavra.slice(0,1).toUpperCase() + palavra.slice(1,palavra.lenght).toLowerCase();
}

console.log(captalize('frankLIn'))