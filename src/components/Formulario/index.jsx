
function Formulario({peso, altura}) {

  return (
    <>
      <form className="mt-3 mb-5">
        <input onChange={evt => peso(evt.target.valueAsNumber)} type="number" className="form-control" placeholder="Digite o valor do peso" />
        <input onChange={evt => altura(evt.target.valueAsNumber)} type="number" className="form-control mt-2" placeholder="Digite o valor da altura" />
      </form>
    </>
  )
}

export default Formulario