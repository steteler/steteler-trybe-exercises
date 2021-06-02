// @ts-ignore
const messageDelay = () => Math.floor(Math.random() * 5000);

// @ts-ignore
const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// @ts-ignore
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
// @ts-ignore
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
// @ts-ignore
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// @ts-ignore
const sendMarsTemperature = (onSuccess, onError) => {
    const currentTemperature = getMarsTemperature();
    const messageSuccessfullySent = Math.random() <= 0.6;
    setTimeout(() => {
      if(messageSuccessfullySent) onSuccess(currentTemperature)
      else onError('Robot is busy');
    }, messageDelay());
  }

// @ts-ignore
sendMarsTemperature(temperatureInFahrenheit, handleError);
// @ts-ignore
sendMarsTemperature(greet, handleError);