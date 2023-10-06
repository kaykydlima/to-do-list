export function validation(values) {
  const errors = {}

  const today = new Date()
  const initialDate = new Date(values.initialDate)
  const finalDate = new Date(values.finalDate)
  const limitDate = new Date("2099-12-12T12:00:00")

  if (values.name === "") {
    errors.name = "O campo nome não pode estar vazio!"
  }

  if (values.initialDate === "" || initialDate <= today) {
    errors.initialDate = "A data inicial deve ser posterior a hoje!"
  }

  if (values.finalDate === "" || finalDate >= limitDate) {
    errors.finalDate = "A data final deve ser anterior ao limite de 12/12/2099!"
  }

  if(finalDate < initialDate) {
    errors.finalDate = "A data final deve ser posterior a data inicial!"
  }
  return errors
}
