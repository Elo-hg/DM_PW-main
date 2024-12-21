// function from https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API 	 
 	 function dragstartHandler(ev) {
		// Add the target element's id to the data transfer object
		ev.dataTransfer.setData("application/my-app", ev.target.id);
		ev.dataTransfer.effectAllowed = "move";
	  }
	  function dragoverHandler(ev) {
		ev.preventDefault();
		ev.dataTransfer.dropEffect = "move";
	  }
	  function dropHandler(ev) {
		ev.preventDefault();
		// Get the id of the target and add the moved element to the target's DOM
		const data = ev.dataTransfer.getData("application/my-app");
		ev.target.appendChild(document.getElementById(data));
		
		const dropZoneId = ev.target.id; // Example: r1, r2, etc.
        tabRep[dropZoneId] = data; 
	  } 
	  


