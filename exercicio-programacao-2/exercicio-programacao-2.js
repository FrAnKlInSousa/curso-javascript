
function life(age){
    ano_limite = 90;
    anos_restantes = ano_limite - age;
    dias_restantes = anos_restantes * 365;
    semanas_restantes = anos_restantes * 52;
    meses_restantes = anos_restantes * 12;

    console.log(
        `You have ${dias_restantes} days, ${semanas_restantes} weeks and ${meses_restantes} months left.`
    );    
}

