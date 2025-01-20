import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";

const site = lume({
    src: "src",
});


// Every MD file accepts VTO variables.
site.preprocess([".md"], (pages) => {
    for (const page of pages){
        page.data.templateEngine = ["vto", "md"];
    }
});


site.use(basePath());

// Include the pico style
site.copy("/assets/css/pico-main/css/pico.min.css");

export default site;
