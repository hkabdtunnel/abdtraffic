function getcrossharbourtime() {
	url = "https://api.allorigins.win/get?url=https://resource.data.one.gov.hk/td/journeytime.xml";
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open("GET", url, false);

    } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open("GET", url);

    } else {

        // Otherwise, CORS is not supported by the browser.
        xhr = null;

    }
	//xhr.open("GET","marks.xml",false);
	xhr.send();
	xmlDoc=xhr.responseXML;
	document.write("<table border='1' width='320px' style='font-size:25px;'>");
	
	// this line will write table tag on html document
	
	document.write("<tr><th>經 Via</th><th>分鐘 Minutes</th></tr>");
	var x=xmlDoc.getElementsByTagName("LOCATION_ID");
	
	// This line will store array of object in variable x
	var tunnel;
	for (i=0;i<x.length;i++) {
		
		if (xmlDoc.getElementsByTagName("LOCATION_ID")[i].childNodes[0].nodeValue == 'H2'){
			switch(xmlDoc.getElementsByTagName("DESTINATION_ID")[i].childNodes[0].nodeValue) {
				case 'CH':
				tunnel = "紅隧 CHT";
				break;
				case 'EH':
				tunnel = "東隧 EHC";
				break;
				case 'WH':
				tunnel = "西隧 WHC";
				break;
				}
			
			var jdata = xmlDoc.getElementsByTagName("JOURNEY_DATA")[i].childNodes[0].nodeValue;
			var wordcolor;
			
			document.write("<tr><td>");
			document.write(tunnel);
			document.write("</td><td>");
			switch(xmlDoc.getElementsByTagName("COLOUR_ID")[i].childNodes[0].nodeValue) {
				case '1':
				wordcolor = "red";
				break;
				case '2':
				wordcolor = "orange";
				break;
				case '3':
				wordcolor = "green";
				break;
				}
			document.write("<b><center><font size='7'>" + jdata.fontcolor(wordcolor) + "</center></font></b>");
			document.write("</td><tr>");
			}
		}
	document.write("</table>");
}
