# Lume playground => RR website
I created this project to try out [Deno's](https://deno.com/) static web generator [lume](https://lume.land/).
In the process it became clear to me that it's an awesome tool I want to build at least one website with. 
Therefore it is no more a playground, more like repo for our [Royal Rangers](https://www.royalrangers.cz/) outpost. I hope to achieve nice looking, easy-to-manage website.

# I am using
- [Deno](https://deno.com/) just to run Lume
- [Lume](https://lume.land/) to build the website
- [Pico.css](https://picocss.com/) to nice default styles

# What precisely I want to achieve
In short I want to be able to quickly add new posts in an easy way to the live website. Mostly am I concerned about camp post type, because our website should be the place for the most up-to-date info about what we do, not an email or what-you-may.

Longer answer is as follows:
1. Have a nice website with as little visual quirks as possible.
2. The general site structure should have:
   - Page - static (basic) info, such as landing page, About us, ...
   - Camp - info about all specific camps, has a template for front-matter.
   - Leader - page about leaders in our outpost, can be linked to camps, or other pages.
   - Post - I wish to have a blog about what we do, explaining some stuff, creating material for others. We kinda started a few years ago when created this [Morse code video](https://youtu.be/gLCsvdRocow?si=3prBYB9WAZwf3DAS), but haven't done anything at similar scale since.
   - Sponsor - list all of our sponsors (who wish to be).
   - Grant - posts about specific grants we received (linked to sponsor).
   - Author - to assign specific posts/pages/etc to specific leaders, but with the possibility of someone contributing even though not being listed leader.
3. All posts (and other types) to have easy-to-create relations, e.g. assign main leader of a camp to a camp, to show his/her contact here etc.
4. Write as little code as possible, to lower keep-up cost (just time) - therefore creating and reusing components a lot. Also using what Pico has to offer.
5. When the site is live, write new posts occasionally and help others to do as well (even if it means setting up a [CMS](https://lume.land/cms/) and renting some [low-budget server](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm)).

# How I want to achieve it
These are mainly pointers for me, for the future me which would pick up after a longer period of a project-wide stagnation due to school, royal or life in general.
- Relations: done by lume's [relation plugin](https://lume.land/plugins/relations/).
  - All posts you want to relate must have *type* set up. Usually in _data.yml for the whole folder.
  - In config file are created foreign keys for some types. If you wish to relate two pages, make sure both have their type key in there.
  - You relate them by setting *id* in one and appropriate foreign key (e.g. *post_id*) in the other. 
  - Now, the related page is available under \<type\> variable (e.g. *post*). It is bi-directional, so the other page has this available as well.
  - If you want to relate more page than one, use array.
  - Beware: don't use type of *page*, it conflicts with another page variable.
- Search: done by lume's [pagefind plugin](https://lume.land/plugins/pagefind/)
  - Basically all is set up in the header component. Most styling is default or pico.
- Not funny things: managed by lume's plugins, most don't require any attention:
  - [robots.txt](https://lume.land/plugins/robots/) file created
  - [sitemap.xml](https://lume.land/plugins/sitemap/) also created
  - [css](https://lume.land/plugins/lightningcss/) and [js](https://lume.land/plugins/esbuild/) processing and optimization
  - detect [broken links](https://lume.land/plugins/check_urls/) and report to the console on build
  - [date](https://lume.land/plugins/date/) formats, check which to use on link
  - correct [path](https://lume.land/plugins/base_path/)
- Header: uses _data/menu to create menu dynamically

Not that bad, aye. See ya.