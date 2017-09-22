const Bitfinexapi = require('./index.js');


const API_KEY = "93209";
const API_SECRET = "NIez7jAcKC3VwgwtVxOizGxhJMx2J7PkXMx4u/xG8emS+ofw0Xj6lfgPwFQ+RIveKwruSM12ODVAZ7evtGadgg==";
var opts = { version: 2, transform: false, nonceGenerator: false };
const client = new Bitfinexapi(API_KEY, API_SECRET, opts);

// console.log(client)




client.products("",function(err,ret){
  console.log(err);
  console.log(ret);
});


client.products("1",function(err,ret){
  console.log(err);
  console.log(ret);
});



//获取当天最新信息
// client.today("BTCUSD",function(err,ret){
//   console.log(ret);
//   // console.log(ret);
// });

//获取bitfinex行情（盘口数据）
// client.ticker("btcusd",function(err,ret){
//   console.log(ret);
// });
// client.ticker("ltcusd",function(err,ret){
//   console.log(ret);
// });
// client.ticker("ethusd",function(err,ret){
//   console.log(ret);
// });

// client.account_infos(function(err,ret){
//   console.log(ret);
//   console.log(typeof(ret));
//   console.log(ret[0]['fees']);
// });
