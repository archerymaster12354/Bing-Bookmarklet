function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
for ( var o = 0; o != 30; o++ ) {
window.open('https://www.bing.com/search?q=' + makeid(10)); 
}
window.open('https://account.microsoft.com/rewards/dashboard?ref=bingflyout' + '_blank');
