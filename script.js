function calculo() {
  let nome = document.getElementById('primnome').value
  let bimestre1 = document.getElementById('bim1').value
  let bimestre2 = document.getElementById('bim2').value
  let bimestre3 = document.getElementById('bim3').value
  let bimestre4 = document.getElementById('bim4').value
  document.getElementById('bim1').value = ''
  document.getElementById('bim2').value = ''
  document.getElementById('bim3').value = ''
  document.getElementById('bim4').value = ''

  
  let soma = Number(bimestre1) + Number(bimestre2) + Number(bimestre3) + Number(bimestre4)
  let divis = soma/4
  document.getElementById('label1').innerHTML = divis
  document.getElementById('labelnome').innerHTML = nome
  
  if (divis >= 7){
    document.getElementById('label2').innerHTML = 'aprovado'
    document.getElementById('label3').innerHTML = ''
   } 
  else if(divis<=4){
    document.getElementById('label2').innerHTML = 'Reprovado'
    document.getElementById('label3').innerHTML = ''
  }
  else{
    document.getElementById('label2').innerHTML = 'Você está na prova final'
    let verificar = Number((50 - (divis * 6)) / 4)
    document.getElementById('label3').innerHTML = 'Pontos necessários para passar: '+verificar;
  }
};