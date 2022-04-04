const getCurrencies = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const APIResponse = await fetch(url);
  const currencies = await APIResponse.json();
  delete currencies.USDT;
  return Object.keys(currencies);
};

export default getCurrencies;
