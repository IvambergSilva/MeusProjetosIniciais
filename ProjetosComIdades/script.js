function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#textano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero ='homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'criancahomem.png')        
            } else if(idade < 21){
                img.setAttribute('src', 'jovemhomem.png')    
            } else if(idade < 50){
                img.setAttribute('src', 'adultohomem.png')    
            } else{
                img.setAttribute('src', 'idoso.png')    
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'criancamulher.png')        
            } else if(idade < 21){
                img.setAttribute('src', 'jovemmulher.png')        
            } else if(idade < 50){
                img.setAttribute('src', 'adultomulher.png')   
            } else{
                img.setAttribute('src', 'idosa.png')   
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos um ${genero} que possuí ${idade} anos em ${ano}`
        res.appendChild(img)
    }
}