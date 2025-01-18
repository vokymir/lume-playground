import lume from "lume/mod.ts";

const site = lume({
    src: "src",
});


// Every MD file accepts VTO variables.
site.preprocess([".md"], (pages) => {
    for (const page of pages){
        page.data.templateEngine = ["vto", "md"];
    }
});

export default site;
