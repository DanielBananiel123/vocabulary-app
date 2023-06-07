
function startPage() {
    
    createElement("div")
        .with_class("mainDIV")
        .with_id("mainDIV")
        .with_children(
            createElement("button")
                .with_inner_html("Create New Vocabulary Set")
                .with_class("commonButton")
                .with_styles("background-color: #0844C4;")
                .finish(),
                
            createElement("input")
                .with_type("file")
                .with_id("real-file")
                .with_hidden("hidden")
                .with_accept(".csv")
                .with_styles("background-color: #0844C4;")
                .finish(),

            createElement("button")
                .with_class("commonButton")
                .with_inner_html("Import Vocabulary Set")
                .with_id("custom-file")
                .with_styles("background-color: #0844C4;")
                .finish()
        )
        .insert("body")
        .finish()
        
}


