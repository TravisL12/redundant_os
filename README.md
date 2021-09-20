# RedundantRobot OS

This is just another thing built because I was bored one weekend. The nice thing about projects like this is I can put in a lot of work, get tired of it, commit and forget it, and then a year later come back and pick up where I left off.

I have a lot of [CodePens](https://codepen.io/TravisL12/) and I tend to forget about what I've built. So I realized I could embed those into a large site like this.

[Check it out live!](https://redundantrobot.com/redundant_os/)

##### Scraping CodePens

I went to my Scrape codepens: `https://codepen.io/TravisL12/pens/public?grid_type=list` and wrote a quick script to scrape out the title's and id's of each one. I had to paginate through and run it multiple times but that wasn't so bad.

```
[...document.querySelectorAll(".title")].map((el) => {
  const title = el.title;
  const link = el.querySelector("a");
  const id = link.href.split("/").slice(-1)[0];
  return { title, id };
});
```

## Current features of RedundantOS

### Menu Bar

- Customizeable menu content
- Opens new window

### Window Management

- keeps track of which window is open
- the window stack order (what's on top and active)

### Window Types

- iframe
- component

### Content

- Mainly populates my CodePens using the iframe link provided by CodePen
- The APOD API is used to show the Astronomy Picture of the Day
- Simple background color preference is available, maybe more to come, maybe not...

##### todo:

- Add some notes on how to deploy this thing
- Do a reponsive site like an iPhone (easier said than done)
- Add icons of some type
- categorize the codepens
- keyboard command/shortcuts?
- Dock to minimize windows into?
