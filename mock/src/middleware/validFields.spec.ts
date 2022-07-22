import { validEmail, validName } from "./validFields"

describe("Testing Fields Validators.", () => {
  
  test("Invalid email.", () => {
    expect(validEmail("fillipegmail.com.br")).toBe(false);
  })

  test("Valid email.", () => {
    expect(validEmail("fillipe@gmail.com.br")).toBe(true);
  })

  test("Invalid name.", () => {
    expect(validName("Fill1pe Yuri Vieira Araújo")).toBe(false);
  })

  test("Valid name.", () => {
    expect(validName("Fillipe Yuri Vieira Araújo")).toBe(true);
  })

})
