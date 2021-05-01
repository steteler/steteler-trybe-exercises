const arraySkills = ["Android", "iOS", "Architecture", "Teach", "Run"];

const buildSkillsPhrase = paramOne => {
  const callTryber = paramInner => `Tryber ${paramInner} aqui! Tudo bem?`;

  let result = `${callTryber(paramOne)}\n\nMinhas cinco principais habilidades são:`

  arraySkills.forEach((skill, index) => {
    result = `${result}\n\n- ${skill}`
  })

  result = `${result}\n\n#goTrybe`;

  return result;
}

console.log(buildSkillsPhrase("kikuti"))