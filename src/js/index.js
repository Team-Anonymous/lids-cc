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
  $("rowid").removeClass("first-responder-red").addClass("first-responder-green");
  $("rowid").addClass("first-responder-green");
}

function getTrafficSignal(){
  $.getJSON("http://lidsmysqldb.cloudapp.net/sih2017/lids-api/fetchTrafficControl.php?signalid=1", function(result){
    var signalStatus = result[0]["SignalStatus"];
    var signalLocation = result[0]["SignalLocation"];
    var signalId = result[0]["SignalID"];
    if(signalStatus==1){

    }
  }
}

function getAlertsAndNotificationsByPriority(){
  // Step 1: Invoke getNOtfications api
  // Step 2: Parse the object 
}
