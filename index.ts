//ESSE AQUI É O VOID DAÍ
function newSection(section : string) : void{
    console.log("=================");
    console.group(section);
}
newSection("STRING")
function concatenarDuasStrings(s1 : string, s2: string) : string
{
    return `${s1}, ${s2}`;
}
console.log(concatenarDuasStrings("Wagner", "Worst"));
console.groupEnd();

newSection("NUMBER")
function somarDoisNumeros (n1 : number, n2 : number) : number
{
    return n1+n2;
}
console.log(somarDoisNumeros(10,15));
console.groupEnd();

newSection("BOOLEAN");
function verificarNumeroEhPar (n : number) : boolean
{
    return Boolean(n%2 == 0 ? 1 : 0);
}
console.log(verificarNumeroEhPar(10));
console.groupEnd();

newSection("NULL");
function retornarNullo () : null
{
    return null;
}
console.log(retornarNullo());
console.groupEnd();

newSection("UNDEFINED");
function retonarIndefinido (s : string) : undefined
{
    return;
}
console.log(retonarIndefinido("qualquer coisa"));
console.groupEnd();

newSection("ARRAY");
function listarPedidos(p1 : string, p2 : string ) : string[]
{
    let vetorPedidos : string[] = [];
    vetorPedidos.push(p1);
    vetorPedidos.push(p2);
    return vetorPedidos;
}
console.log(listarPedidos("ABC01","ABC02"));
console.groupEnd();

newSection("ANY");
function retornaAlgo (algo : any) : any
{
    return algo;
}
console.log(retornaAlgo(3.14));
console.groupEnd();

newSection("OBJECT")
enum CoresCarrosFord{
    V = "Verde",
    A = "Azul",
    V2 = "Vermelho",
    P = "Preto",
    P2 = "Prata",
    B = "Branco"
}
interface Carro{
    Marca: string,
    Modelo: string,
    Ano: number
    Cor: CoresCarrosFord
}
function devolverObjetoCarro(marca : string, modelo : string, ano : number) : Carro
{
    let carro : Carro = {
        Marca: marca,
        Modelo: modelo,
        Ano: ano,
        Cor: CoresCarrosFord.P2
    }
    return carro;
}
console.log(devolverObjetoCarro("Ford", "Fiestinha", 2002));
console.groupEnd();

newSection("ENUM")
function devolverCorresCarro() : CoresCarrosFord
{
    let kwidSuvAnao : Carro = {
        Marca: "Ford",
        Modelo: "Kwid",
        Ano: 2024,
        Cor: CoresCarrosFord.V
    }
    return kwidSuvAnao.Cor;
}
console.log(devolverCorresCarro());
console.groupEnd();