import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import nav from "lume/plugins/nav.ts"; // used in _components/header.vto
import relations from "lume/plugins/relations.ts";
import date from "lume/plugins/date.ts";
import { cs } from "npm:date-fns/locale/cs";

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
            basic_page: "page_id",
            author: "author_id",
            leader: "leader_id",
            camp: "camp_id",
        }
    }))
    .use(date({
        locales: { cs },
    }));

// Include the pico style
site.copy("/assets/css/pico.min.css");

site.ignore("/assets/css/pico-main/LICENSE.md", "/assets/css/pico-main/README.md");

export default site;
