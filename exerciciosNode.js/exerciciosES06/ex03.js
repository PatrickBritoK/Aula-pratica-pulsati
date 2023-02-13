const imprimeString = ({
    palavra,
    palavra2 = 'Não informada'}) => {
        console.log(`${palavra} e ${palavra2}`)
    }
    imprimeString({palavra: 'Pindamonhangaba(sla se ta certo)', palavra2: 'Sla'})