//use this to get the crypto sym(s)?
//get all the name as well
const apiKey='0508a8c308a4911949020199b2c8f31c33e23ee4246547990a8eaf5aa1fbf42a';
export const fetchCryptos = () => {
  return $.ajax ({
    url: 'https://min-api.cryptocompare.com/data/all/coinlist',
  });
};

//get general information of coin
export const fetchCryptoInfo = (sym) => {
  return $.ajax ({
    url: `https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=${sym}&tsym=USD&api_key=${apiKey}`
  });
};

//syms = BTC,ETH,DASH,PHR*
//need to add apiKey (&api_key=${apiKey})
//current: PRICE, CHANGE24HOUR, CHANGEPCT24HOUR, CHANGEPCTDAY
export const fetchStats = (syms) => {
  return $.ajax({
    url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${syms}&tsyms=USD&api_key=${apiKey}`
  });
};

export const fetchHistoryDatas = (sym, dateType) => {
  let num = "31";
  let reqType = "minute";
  if (dateType === "1d"){
    num = "1440";
    reqType= "minute";
  } else if(dateType === "1w"){
    num = "168";
    reqType= "hour";
  } else if(dateType === "1m"){
    num = "31";
    reqType= "day";
  } else if(dateType === "3m"){
    num = "92";
    reqType= "day";
  } else if(dateType === "6m"){
    num = "183";
    reqType= "day";
  } else if (dateType === "home"){
    num = "28";
    reqType="day";
  } else{
    num = "365";
    reqType= "day";
  }
  return $.ajax({
    url: `https://min-api.cryptocompare.com/data/histo${reqType}?fsym=${sym}&tsym=USD&limit=${num}&api_key=${apiKey}`
  });
};

export const fetchCoinPrice = (sym) => {
  return $.ajax({
    url: `https://min-api.cryptocompare.com/data/price?fsym=${sym}&tsyms=USD&api_key=${apiKey}`
  });
};

export const fetchMultCoinsPrice=(syms) => {
  return $.ajax({
    url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${syms}&tsyms=USD&api_key=${apiKey}`
  });
};