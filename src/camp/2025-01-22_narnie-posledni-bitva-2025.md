---
id: narnie2025
title: Příměstský tábor Narnie 2025
date_start: 11.7.2025
date_end: 
camp_type_id: primestsky
author_id: kubav
---

this is the title: {{ date }}

{{ for ct of camp_type}}
    {{ if ct.id == camp_type_id}}
        {{echo ct.name}}
    {{/if}}
{{/for}}

{{ date_start |> date("HUMAN_DATE") }}

{{ author.name}}