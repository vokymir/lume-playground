import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import nav from "lume/plugins/nav.ts";

const site = lume({
    src: "src",
});


// Every MD file accepts VTO variables.
site.preprocess([".md"], (pages) => {
    for (const page of pages){
        page.data.templateEngine = ["vto", "md"];
    }
});


site.use(basePath())
    .use(nav());

// Include the pico style
site.copy("/assets/css/pico.min.css");

site.ignore("/assets/css/pico-main/LICENSE.md", "/assets/css/pico-main/README.md");

export default site;
