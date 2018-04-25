window.onscroll = function() {
			if (document.documentElement.scrollTop > 10) {
                document.getElementById("pre-header").className= "pre-header-fixed";
                document.getElementById("header").className= "header-fixed";
        		document.getElementById("AnhLogo").className="AnhLogo-fixed";
                document.getElementById("NavbarSearch").className= "col-3 NavbarSearch-fixed";
                document.getElementById("NavBar").className= "NavBar-fixed";
            };
    		if (document.documentElement.scrollTop < 10) {
                document.getElementById("pre-header").className= "pre-header";
                document.getElementById("header").className= "header";
        		document.getElementById("AnhLogo").className="AnhLogo"; 
                document.getElementById("NavbarSearch").className= "col-3 NavbarSearch";
                document.getElementById("NavBar").className= "NavBar";
            };
		};