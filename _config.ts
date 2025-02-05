import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import nav from "lume/plugins/nav.ts"; // used in _components/header.vto
import relations from "lume/plugins/relations.ts";
import date from "lume/plugins/date.ts";
import { cs } from "npm:date-fns/locale/cs";
import pagefind from "lume/plugins/pagefind.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import checkUrls from "lume/plugins/check_urls.ts";
import lightningCss from "lume/plugins/lightningcss.ts"
import esbuild from "lume/plugins/esbuild.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.8.0/toc/mod.ts";

const markdown = {
    plugins: [toc],
    options: {
      linkify: true,
      breaks: true,
    },
  };

const site = lume({
    src: "src", // the root folder for site
    location: new URL("https://vokymir.github.io/lume-playground/"), // if gonna live in subfolder
    },
    { markdown }
);


// Every MD file accepts VTO variables.
// Very useful to make the site more dynamic.
site.preprocess([".md"], (pages) => {
    for (const page of pages){
        page.data.templateEngine = ["vto", "md"];
    }
});


site.use(basePath()) // prepends site.location from above to paths
    .use(nav()) // useful for nav, currently not used but will be shortly (probably)
    .use(relations({ // creating (bi)directional relations
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
    .use(pagefind({ // search the website
        ui: {
            showImages: true,
            resetStyles: false,
        }
    }))
    .use(robots({ // crawling is disabled
        allow: [],
        disallow: "*",
    }))
    .use(sitemap()) // useful to robots
    .use(checkUrls({ // check broken URLs on build
        strict: true,
        external: false, // set it to true occasionally to check for broken external links - slows the build down a lot
    }))
    .use(lightningCss())
    .use(esbuild())
    ;

// Don't create pages for these.
site.ignore("/assets/css/pico-main/LICENSE.md", "/assets/css/pico-main/README.md");

export default site;
