function getCSV() {
    //Get the 3 ELements from HTML with their corresponding IDsja
    const realFileButton = document.getElementById("real-file");
    const customFileButton = document.getElementById("custom-file");
    const fileText = document.getElementById("file-text");

    customFileButton.addEventListener("click", () => 
    {realFileButton.click()}
    )
}