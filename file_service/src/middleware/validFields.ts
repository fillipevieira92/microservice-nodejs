export async function validEmail(email: string){
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export async function validName(name: string) {
  const re = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
  return re.test(name)
}