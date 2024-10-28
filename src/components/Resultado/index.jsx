function Resultado({peso, altura}) {
  function visualizaResultado() {
    let classificacao
    const resultado = peso / (altura ** 2)

    if (!isNaN(resultado) && isFinite(resultado)) {

      if (resultado < 18.5) {
        classificacao = 'Baixo Peso'
      } else if (resultado > 18.5 && resultado < 25 ) {
        classificacao = 'Peso Adequado'
      } else if (resultado > 25 && resultado < 30 ) {
        classificacao = 'Sobrepeso'
      } else if (resultado > 30 && resultado < 35 ) {
        classificacao = 'Obesidade Grau I'
      } else if (resultado > 35 && resultado < 40 ) {
        classificacao = 'Obesidade Grau II'
      } else if (resultado > 40) {
        classificacao = 'Obesidade Grau III'
      }

      return (
        <>
          <h4>Resultado: {resultado.toFixed(2)}</h4>
          <h4>Classificação: {classificacao}</h4>
        </>
      )
    }
  }

  return (
    <>
      {visualizaResultado()}
    </>
  )
}

export default Resultado