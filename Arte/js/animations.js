const combinaciones=[
    {config : 1, redondez: 1},
    {config : 1, redondez: 2},
    {config : 1, redondez: 4},
    {config : 2, redondez: 2},
    {config : 2, redondez: 3},
    {config : 3, redondez: 3},
];
let combinacionInicial = 1
let actualizarAtributo;

function NewCombination ()
{
    const container = document.getElementById("Container");
    const currentCombinaction = combinaciones [combinacionInicial];
    container.setAttribute("config",currentCombinaction.config);
    container.setAttribute("redondez",currentCombinaction.redondez);

    combinacionInicial++;

    if (combinacionInicial>=combinaciones.length)
    {
        combinacionInicial = 0;
    }   
}

actualizarAtributo = setInterval(NewCombination,3000);