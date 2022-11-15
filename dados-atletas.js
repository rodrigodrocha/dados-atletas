class Atleta{
    constructor (nome, idade, peso, altura, notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }    
    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return `Categoria: Infantil`
        } else if (this.idade <= 13) {
            return `Categoria: Juvenil`    
        } else if (this.idade <= 15){
            return `Categoria: Intermediário`
        } else if (this.idade <= 30){
            return `Categoria: Adulto`
        } else {
            return `Sem Categoria`
        }
        
    } 
    calculaIMC(){
        let imc = this.peso/this.altura**2
        return `IMC: ${imc}`
    }
    calculaMediaValida(){
        this.notas.sort(function(a, b) {
            return a - b;
        });
        let notas = this.notas.slice(1,4)
        let soma = notas.reduce(function(total, atual){
            return atual + total
        }, 0)
        let media = soma/notas.length
        return `Média Válida: ${media}`
    }
    obtemNomeAtleta(){
        return `Nome: ${this.nome}`
    }
    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`
    }
    obtemPesoAtleta(){
        return `Peso: ${this.peso}Kg`
    }
    obtemNotasAtleta(){
        return `Notas: ${this.notas}`
    }
    obtemCategoria(){
        return this.calculaCategoria()
    }
    obtemIMC(){
        return this.calculaIMC()
    }
    obtemMediaValida(){
        return this.calculaMediaValida()
    }
}

let atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())