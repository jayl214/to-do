$(document).ready(function() {

var amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: "AKIAIE6ZKACQTLVXRPIQ",
  awsSecret: "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",
  awsTag: "wat0a-20"
});

$('#amazonsearch').on('submit', function(event) {
  let searchTerms = $('search-field').val();

  client.itemSearch({
    Keywords: searchTerms,
    responseGroup: 'ItemAttributes,Offers,Images'
  }).then(function(results){
      console.log(results[0].LargeImage[0].URL[0])
  }).catch(function(err){
    console.log(err.Error[0].Message);
  });

});
