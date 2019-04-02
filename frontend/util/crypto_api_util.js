//use this to get the crypto sym(s)?
//get all the name as well
const apiKey='0508a8c308a4911949020199b2c8f31c33e23ee4246547990a8eaf5aa1fbf42a'
export const fetchCryptos = () => {
  return $.ajax ({
    url: 'https://min-api.cryptocompare.com/data/all/coinlist'
  });
};

//syms = BTC,ETH,DASH,PHR*
//need to add apiKey (&api_key=${apiKey})
//current: PRICE, CHANGE24HOUR, CHANGEPCT24HOUR, CHANGEPCTDAY
export const fetchStats = (syms) => {
  return $.ajax({
    url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${syms}&tsyms=USD`
  });
};

export const fetchHistoryDatas = (sym, reqType, dateType) => {
  let num = "31";
  if (dateType === "1day"){
    num = "1440"; //reqType === "minute"
  } else if(dateType === "1week"){
    num = "168"; //reqType === "hour"
  } else if(dateType === "1month"){
    num = "31"; //reqType === "day"
  } else if(dateType === "3month"){
    num = "92"; //reqType === "day"
  } else if(dateType === "6month"){
    num = "183"; //reqType === "day"
  } else{
    num = "365"; //reqType === "day"
  }
  return $.ajax({
    url: `https://min-api.cryptocompare.com/data/histo${reqType}?fsym=${sym}&tsym=USD&limit=${num}&api_key=${apiKey}`
  });
};