function _(id){ return document.getElementById(id); }
function submitForm(){
	_("submitBtn").disabled = true;
	_("status").innerHTML = 'please wait ...';
	var formdata = new FormData();
	formdata.append( "n", _("n").value );
	formdata.append( "e", _("e").value );
	formdata.append( "m", _("m").value );
	var xml = new XMLHttpRequeåst();
	xml.open( "POST", "email_parser.php" );
	xml.onreadystatechange = function() {
		if(xml.readyState == 4 && xml.status == 200) {
			if(xml.responseText === "success"){
                _("status").innerHTML = '<p style="color: green; text-align: center; height: 40px; line-height: 40px; width: 292x; margin-top: 10px; margin-bottom: 20px; border: 1px solid green; border-radius: 3px; font-size: 24px;"> Thank you '+_("n").value+'</p>';
			} else {
				_("status").innerHTML =  xml.responseText;
				_("submitBtn").disabled = false;
			}
		}
	}
	xml.send( formdata );
}