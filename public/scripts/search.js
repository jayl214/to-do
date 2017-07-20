$(document).ready(function() {

const amazon = require('amazon-product-api');
const client = amazon.createClient({
  awsId: "AKIAIE6ZKACQTLVXRPIQ",
  awsSecret: "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",
  awsTag: "wat0a-20"
});

const Yelp = require('yelp-v3');
const yelp = new Yelp({
  access_token: 'eKBKyEHCCNdqNez6B2VwzHa1DbAe5bIDlyOJ8LUK0ruhdAEip22cIgfOp7nsS7lvyefmXJ_auZdgRekSVoOCf4wLYM5CQeg2W9vySnoWOaxOqefey3Wkw8g1FDdwWXYx'
});


$('#amazonsearch').on('submit', function(event) {
  let searchTerms = $('#amazon-search-field').val();

  client.itemSearch({
    Keywords: searchTerms,
    responseGroup: 'ItemAttributes,Offers,Images'
  }).then(function(results){
      console.log(results[0].LargeImage[0].URL[0])
  }).catch(function(err){
    console.log(err.Error[0].Message);
  });

});
