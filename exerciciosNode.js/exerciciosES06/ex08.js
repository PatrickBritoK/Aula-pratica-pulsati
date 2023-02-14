//concatenar Strings com templates.

    const pegarPalavra = ({
        palavra1,
        palavra2,
        palavra3 }) => {
            console.log(`${palavra1},${palavra2},${palavra3}`);
        }

        pegarPalavra({palavra1: 'Teste1', palavra2: 'Teste2', palavra3: 'Teste3'})