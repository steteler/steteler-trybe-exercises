// @ts-ignore
const messageDelay = () => Math.floor(Math.random() * 5000);

// @ts-ignore
const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// @ts-ignore
const sendMarsTemperature = () => {
  setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`), messageDelay());
};


sendMarsTemperature();