export function validEmail(email: string){
  var re = /\S+@\S+\.\S+/;
  return re.test(email) ? true : false;
}

export function validName(name: string) {
  const re = /^[a-z A-Záàâãéèêíóôõúç]+$/i
  return re.test(name) ? true : false;
}