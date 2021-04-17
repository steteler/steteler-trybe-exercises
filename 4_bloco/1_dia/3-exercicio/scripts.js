let noteCandidate = 81;

if (noteCandidate >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
}
else if (noteCandidate < 80 && noteCandidate >= 60) {
  console.log("Você está na nossa lista de espera");
}
else {
  console.log("Você foi reprovada(o)");
}