import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import nav from "lume/plugins/nav.ts"; // used in _components/header.vto
import relations from "lume/plugins/relations.ts";

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
    .use(nav())
    .use(relations({
        extensions: [".md", ".html"],
        foreignKeys: {
            article: "article_id",
            author: "author_id",
            basic_page: "page_id",
        }
    }));

// Include the pico style
site.copy("/assets/css/pico.min.css");

site.ignore("/assets/css/pico-main/LICENSE.md", "/assets/css/pico-main/README.md");

export default site;
