$(document).ready(function(){
  getCFQuotaMetrics();
  getAlertsAndNotificationsByPriority();
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

function changeToGreen(rowid){
  $("#".rowid).removeClass("first-responder-red").addClass("first-responder-green");
  $("rowid").addClass("first-responder-green");
}

/*function getTrafficSignal(){
  $.getJSON("http://lidsmysqldb.cloudapp.net/sih2017/lids-api/fetchTrafficControl.php?signalid=1", function(result){
    var signalStatus = result[0]["SignalStatus"];
    var signalLocation = result[0]["SignalLocation"];
    var signalId = result[0]["SignalID"];
    if(signalStatus==1){

    }
  }
}*/

function getAlertsAndNotificationsByPriority(){
  // Step 1: Invoke getNOtfications api
  // Step 2: Parse the object 
  $.getJSON("http://lidsmysqldb.cloudapp.net/sih2017/lids-api/fetchAlerts.php?count=2", function(result){
	  var timeStamp= result[0]["timestampMs"];
	  var actiontaken = result[0]["Action"];
	  var alertPriority = result[0]["AlertPriority"];
	  var vehicleNumber = result[0]["Number"];
	  var violationId = result[0]["Violation"];
	  createAndUpdateTableRow(timeStamp,actiontaken,alertPriority,vehicleNumber,violationId);
  });
}

function createAndUpdateTableRow(timeStamp,actiontaken,alertPriority,vehicleNumber,violationId){
	var alertTable = document.getElementById("alertNotifsTableBody");
	
	var alertTR = document.createElement("TR");
	alertTR.style.backgroundColor="#B3D1FF";
	
	var timeStampTD = document.createElement("TD");
	var newDateTime = new Date();
	var timeStampText = document.createTextNode(newDateTime);
	timeStampTD.appendChild(timeStampText);
	timeStampTD.style.fontSize="10px";
	alertTR.appendChild(timeStampTD);
	
	var ViolationTD = document.createElement("TD");
	var violationText = document.createTextNode(violationId);
	ViolationTD.appendChild(violationText);
	alertTR.appendChild(ViolationTD);
	
	var vehicleNumberTD = document.createElement("TD");
	var vehicleNumberText = document.createTextNode(vehicleNumber);
	vehicleNumberTD.appendChild(vehicleNumberText);
	vehicleNumberTD.style.fontSize="12px";
	alertTR.appendChild(vehicleNumberTD);
	
	var actionTD = document.createElement("TD");
	var actionText= document.createTextNode("   INFORM PATROL");
	actionTD.appendChild(actionText);
	actionTD.style.fontSize="12px";
	alertTR.appendChild(actionTD);
	
	
	
	alertTable.appendChild(alertTR);
	
	
	
}