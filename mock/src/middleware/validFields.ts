export async function validEmail(email: string){
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export async function validName(name: string) {
  const re = /^[a-z A-Záàâãéèêíóôõúç]+$/i
  return re.test(name)
}