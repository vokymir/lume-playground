import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import nav from "lume/plugins/nav.ts"; // used in _components/header.vto
import relations from "lume/plugins/relations.ts";
import date from "lume/plugins/date.ts";
import { cs } from "npm:date-fns/locale/cs";
import pagefind from "lume/plugins/pagefind.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
    src: "src",
    location: new URL("https://vokymir.github.io/lume-playground/"),
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
            grant: "grant_id",
            sponsor: "sponsor_id",
        }
    }))
    .use(date({
        locales: { cs },
    }))
    .use(pagefind({
        ui: {
            showImages: true,
            resetStyles: false,
        }
    }))
    .use(robots({
        allow: [],
        disallow: "*",
    }))
    .use(sitemap());

// Include the pico style
site.copy("/assets/css/pico.min.css");

site.ignore("/assets/css/pico-main/LICENSE.md", "/assets/css/pico-main/README.md");

export default site;
