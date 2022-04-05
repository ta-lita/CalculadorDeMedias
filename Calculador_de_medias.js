
function calculador(){
    const valores = Number(prompt('Escolha quantas notas você possuí:\n 1- Tenho 2 nota\n 2- Tenho 3 notas\n 3- Tenho 4 notas\n 4- Tenho 5 notas '))
    
    if (!valores || valores <= 0 || valores >= 5){
        alert('Erro - Defina notas com valores numéricos válidos!')
        calculador()
    } else{
        (alert('Atenção: Nas notas que você não possuir declare o valor 1!'))
        let nota1 = Number(prompt('Digite sua primeira nota:'))
        let nota2 = Number(prompt('Digite sua segunda nota:'))
        let nota3 = Number(prompt('Digite sua terceira nota:'))
        let nota4 = Number(prompt('Digite sua quarta nota:'))
        let nota5 = Number(prompt('Digite sua quinta nota:'))
        let media;
            if(!nota1 || !nota2 || !nota3 || !nota4 || !nota5){
                alert('Erro - Defina notas com valores numéricos válidos!\nCaso você não possua todas as 5 notas declare p valor 1!')
                calculador()
            } else{
                
                function media2(){
                    media = (nota1 + nota2)/2
                    alert(`Sua média é: ${media}`)
                    novosValores()
                }
                function media3(){
                    media = (nota1 + nota2 + nota3)/3
                    alert(`Sua média é: ${media}`)
                    novosValores()
                }
                function media4(){
                    media = (nota1 + nota2 + nota3 + nota4)/4
                    alert(`Sua média é: ${media}`)
                    novosValores()
                }
                function media5(){
                    media = (nota1 + nota2 + nota3 + nota4 + nota5)/5
                    alert(`Sua média é: ${media}`)
                    novosValores()
                }

                function novosValores(){
                    let opcao = Number(prompt('Deseja calcular uma nova média?\n 1- Sim\n 2- Não'))
                    if (opcao == 1){
                        calculador()
                    } else if (opcao == 2){
                        alert('Até logo!')
                    } else {
                        alert('Erro - Digite valores numéricos válidos!')
                        calculador()
                    }
                
                }
            }

       
    }

    switch(valores){
        case 1:
            media2()
            break
        case 2:
            media3()
            break
        case 3:
            media4()
            break
        case 4:
            media5()
            break
    }

}
calculador()