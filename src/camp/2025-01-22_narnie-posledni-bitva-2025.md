---
id: narnie2025
title: Příměstský tábor Narnie 2025

camp_type_id: primestsky
price: 1000

date_start: 2025-07-21 
date_end: 2025-07-25 

leader_id: [krystofv, kubav] # first for camp leader, second for contacting
gallery_url: https://eu.zonerama.com/prrestice/1402979
author_id: kubav
---

this is the title: {{title }}

date of added: {{ date }}

Who is the base leader:
{{ comp.find_info({what:site.base_leader})}}

Who is the camp leader:
{{ leader[0].name}}

Who is the camp leader to be contacted:
{{ leader[1].name}} ({{leader[1].full_name}}): {{leader[1].email}} / {{leader[1].tel}}

Camp type:
{{ for ct of camp_type}}
    {{ if ct.id == camp_type_id}}
        {{echo ct.name}}
    {{/if}}
{{/for}}

Price: {{ price}}

[Gallery]( {{gallery_url}} )

Date of start:
{{ date_start |> date("HUMAN_DATE") }}

Date of end:
{{ date_end |> date("HUMAN_DATE") }}

author:
{{ author.name}}