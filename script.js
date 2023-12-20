const formularioEl = document.getElementById('formulario')

function enviarFormulario(event) {
event.preventDefault()
console.log(formularioEl)
console.log(event)
console.log(formularioEl.nome.value)
console.log(formularioEl.endereco.value)
console.log(formularioEl.cidade.value)
console.log(formularioEl.estado.value)
console.log(formularioEl.dados_profissionais.value)
console.log(formularioEl.miniCurriculo.value)
const checkboxs = Array.from(event.srcElement.area_interesse)
  const checkboxsFormatados = checkboxs.map((area_interesse) => {
    return `${area_interesse.value} | ${area_interesse.checked}`
  })
  console.log('Área de interesse', checkboxsFormatados)
}
