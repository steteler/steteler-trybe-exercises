const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
  const fun1 = paramInner => (
    `Tryber ${paramInner} aqui! Tudo bem?`
  )

  let result = `${fun1(paramOne)}\n\nMinhas cinco principais habilidades são:`

  array.forEach((skill, index) =>
  result = `${result}\n\n- ${skill}`)

  result = `${result}\n\n#goTrybe`

  return result
}

console.log(buildSkillsPhrase("Lucas"))