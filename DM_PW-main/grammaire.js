// function from https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API 	 
 	 function dragstartHandler(ev) {
	
		ev.dataTransfer.setData("application/my-app", ev.target.id);
		ev.dataTransfer.effectAllowed = "move";
	  }
	  function dragoverHandler(ev) {
		ev.preventDefault();
		ev.dataTransfer.dropEffect = "move";
	  }
	  function dropHandler(ev) {
		ev.preventDefault();
		
		const data = ev.dataTransfer.getData("application/my-app");
		ev.target.appendChild(document.getElementById(data));
		
		const dropZoneId = ev.target.id; // Example: r1, r2, etc.
        tabRep[dropZoneId] = data; 
	  } 
	  


