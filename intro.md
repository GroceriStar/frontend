## Main piccha

Story behind
Ok, main goal of creating this repository is to separate frontend logic of GroceriStar project with API logic.
Right now, at current project stage it's looks like a mess. Project is simple, but at this stage too - it must be improved. So i dig into different options with question - how i can improve 'flow' when client and server are separated, files have good structure, project have build feature and can be updated/extended easily.
All times, when i read articles I see that only React with webpack provide such kind of functionality. So i decide that in future i'll split front and API into a two different projeccts.

Big picture
Whole frontend must be implemented and then connected to a GS project.
Design must be improved, pages must load fast, scripts must be organized, minified and combined together. Responsive for sure.

From what we can start.
Right now we have an ugly homepage. Yep it bad, cause i created it from landing page builder. Lazy and don't want to spend time on it. but content for LP was completed and can be an advantage for a next page creation steps.

So create a brand new, shunny page will be a first task. Tell me if you you need my guidance? or you can create it from scratch with some cool design that you'll pick? I mean there a lot of cool homepage designs, where we can grab styles and view. i have a few things to show you - but i want to see what you capable of.

next part is pages, not related to shopping list and homepage.
right now this pages are inner pages. and they looks like a default dashboard with bootrstrap styles - and this is how they was build. i grab some styles, html tempaltes from my previous projects.

right now this pages don't have a one simple UI. right now it's just pages, that connected. a lot of people confused about how they can use the product. So it can be a different ways to accomplish this problem. I'll want to hear your thoughts first and then explain my vision.

shopping list views. before i just get a layouts and js code from TODOMVC and apply it. but it has some troubles with converting a logic. and it was not really optimized to mobiles. so when my friend starts joke about it - i spend few weeks and redo it basically from scratch. i find a HTML framework with styles related to mobile form elements and apply groceristar logic into that elements.
Not sure if i want to redo it again. maybe it'll be better to implement a gap between Gs and some other TODO list projects. cause I don't want to reinvent the wheel - better to focus on expanding features of it.

next item will be to understand for me - if some parts of React logic can be copy-pasted and converted into React native, cause I want to build an app in the future.
maybe I need to share with you some design starter kits, that have a lot of predefined pages and can be used in my project.

Tell me what do you think!
I'll extend this task - plan to add screens from current online version - so you'll have all data in one place. will do it later - if I'll see a lot of progress.

Btw, as we're trying to work as development companies works - I'll need to get some kind of estimate from you. I want to know at least how much time you want to spend on the homepage and what will be a delivery date(date when everything will works perfect)

Tasks
- [ ] Try to create some sort of first plan about how to switch and improve GS frontend part by moving from nodejs template engine to reactjs. 
