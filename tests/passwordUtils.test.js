const utils = require("../lib/passwordUtils")

const passTest_1 = "HelloWorld"
const saltTest_1 = '9cb2cc33dc767f83a5bdd95fac2e2b07308185318faa92f606b41e7a7d044fc6'
const hashTest_1 = '9e3351aeffa8360f746c8de451408c877d3a3d5b6bf26140f278ba8d7d9ec6797f76e3563e74cd428e215c4ec29a682c57336d555aee8b1c5ebdfcccc4f6a39f'

const passTest_2 = "GitHub_123"
const saltTest_2 = 'a70c9ee8e62f0677048f2284190d16d5ef214cb6988eaa23304874e4949d63ec'
const hashTest_2 = 'dc4f04e6e2f77b1220765cc7a7d6eb991ef7499981a76c0282aa9e6d8a7ee451c74bad423c5ad7abead7171457eb8a512b5d67eb95aebbe9b682c1c97ae030e7'



it("verify password #1", () =>{
    const result = utils.validPassword(passTest_1, hashTest_1, saltTest_1)
    expect(result).toBe(true)
})

it("verify password #2", () =>{
    const result = utils.validPassword(passTest_2, hashTest_2, saltTest_2)
    expect(result).toBe(true)
})
