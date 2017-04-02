$(document).ready(function(){
  getCFQuotaMetrics();
});

function getCFQuotaMetrics(){
  $.getJSON("http://lidsmysqldb.cloudapp.net/sih2017/lids-api/fetchCF.php?licenseid=1", function(result){
      var currentCF = result[0]["CurrentCF"];
      var cfQuota = result[0]["CFQuota"];
      var expireDate = result[0]["EstimatedExpiry"];
      var licenseID = result[0]["LicenseID"];
      var startDate = result[0]["Startdate"];
      document.getElementById("cfData").innerHTML=currentCF+" of "+cfQuota+"<br> Estimated Date Of Expiry: "+expireDate;
  });

}

function changeToGreen($rowid){
  $("rowid").removeClass("first-responder-red");
  $("rowid").addClass("first-responder-green");
}
