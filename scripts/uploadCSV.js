    function getCSV() {
        //Get the 3 ELements from HTML with their corresponding IDsja
        const realFileButton = document.getElementById("real-file");
        const customFileButton = document.getElementById("custom-file");
        const fileText = document.getElementById("file-text");


        customFileButton.addEventListener("click", () => 
        {realFileButton.click()})

        realFileButton.addEventListener("change",
            (event) =>
            {
                if (realFileButton.value != "") {
                    console.log("CSV uploaded");

                    //Referencing file 
                    const csvFile = event.target.files[0];

                    //Changing Import Button to name of File and removing Button Possibility
                    customFileButton.textContent = csvFile.name;
                    customFileButton.disabled = true;
                    customFileButton.className = "commonButtonDisabled"
                    customFileButton.style = "background-color: #6482c1"

                    


                    //Creating Remove Import Button
                    createElement("button")
                        .with_inner_html("Remove Import")
                        .with_class("commonButton")
                        .with_styles("background-color: #e81212")
                        .with_id("removeButton")
                        .insert("mainDIV")
                        .finish()

                    const removeButton = document.getElementById("removeButton")
                    
                    //Creating Eventlistner which removes all Buttons on Remove
                    removeButton.addEventListener("click", () =>
                        {
                            //Active CustomFile Button
                            customFileButton.textContent = "Import Vocabulary Set";
                            customFileButton.disabled = false;
                            customFileButton.className = "commonButton";
                            customFileButton.style = "background-color: #0844C4"

                            playButton.remove();
                            removeButton.remove();



                        }
                    )

                    //Creating PlayButton Element
                        createElement("button")
                            .with_inner_html("Play Vocabulary Quiz")
                            .with_class("commonButton")
                            .with_styles("background-color: #0d890b;")
                            .with_id("playButton")
                            .insert("mainDIV")
                            .finish()

                    customFileButton.removeEventListener('click', function() {
                        console.log('Custom file clicked');
                        
                    });
                } 
            
            }
            
        )

    }
    