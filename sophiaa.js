<html>
    <head>
	
    </head>
    <body>
 
        <script>
		
		<p> Zagraj w kamień, papier, nożyce z komputerem. Poczuj się jak Jimmy Fallon grający z Sophią.
		
        // User choice
        var gracz = prompt("Kamień, papier, nożyce?");
       
            // Display user choice
            document.write("<p>Twój wybór:" + gracz + "</p>");
       
        // Computer choice
        var komputer = Math.floor(Math.random()*3)+1;
        if (komputer == 1) {
            komputer = "kamień";
        } else if(komputer == 2) {
            komputer = "papier";
        } else {
            komputer = "nożyce";
        }
        // Display computer choice
        document.write("<p>Wybór komputera:" + komputer + "</p>");
        // Compare user choice vs computer choice
        var wynik = function(wyborgr,wyborkomp) {
            if (wyborgr == wyborkomp) {
                return "Remis";
            }
            if (wyborgr == "kamień") {
                if (wyborkomp == "nożyce") {
                    // rock wins
                    return "Wygrywasz";
                } else {
                    // paper wins
                    return "Wygrał komputer.";
                }
            }
            if (wyborgr == "papier") {
                if (wyborkomp == "kamień") {
                    // paper wins
                    return "Wygrywasz";
                } else {
                    // scissors wins
                    return "Wygrał komputer";
                }
            }
            if (wyborgr == "nożyce") {
                if (wyborkomp === "kamień") {
                    // rock wins
                    return "Wygrał komputer";
                } else {
                    // scissors wins
                    return "Wygrywasz";
                }
            }
        };
        // Run the compare function
        var wynikostateczny = wynik(wyborgr,wyborkomp);
        // Display results
        document.write("Wynik:" + wynikostateczny);
 
          
        </script>
		
	
    </body>
</html>