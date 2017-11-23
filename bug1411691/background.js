/// Initialisation
function init() {
	browser.storage.sync.get(null).then(onGot, onNone);

    // Load search engines if they're not already loaded in storage sync
	function onGot(data){
        console.log("success");
	}

	function onNone(error){
		console.log("fail");
        console.error(error);
	}
}
init();