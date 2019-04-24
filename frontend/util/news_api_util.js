export const fetchAllNews = (syms) => {
  //have to deep dup otherwise this.props.syms will get changed as well.
  let symbols = Array.from(syms);
  symbols.push("Blockchain,Technology,Market,Exchange,Regulation,Trading");
  symbols = symbols.join(',');
  return $.ajax({
    url: `https://min-api.cryptocompare.com/data/v2/news/?categories=${symbols}&excludeCategories=Sponsored`
  });
};

export const fetchNews = (sym) => {
  return $.ajax({
    url: `https://newsapi.org/v2/everything?q=${sym}&apiKey=620a6eaefef54d27acc8c6e534c5fcb3`
  });
};