$(document).ready(function(){
  getCFQuotaMetrics();
});

function getCFQuotaMetrics(){
  $.getJSON("http://lidsmysqldb.cloudapp.net/sih2017/lids-api/fetchCF.php?licenseid=1", function(result){
      alert(result);
  });
}
