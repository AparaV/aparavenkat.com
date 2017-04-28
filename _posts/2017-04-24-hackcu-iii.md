---
layout: post
title: HackCU III
published: false
comments: true
---

Last week, the third edition of Colorado's largest student hackathon, [HackCU III](https://hackcu.org/), took place at Boulder. With nearly 400 hackers from all over US, this 24 hour hackathon is the largest one yet. And being a part of the [organizing team](https://hackcu.org/#team) this year was an amazing experience.

Along with meeting new people, the learning, and having fun, the best thing about a hackathon is simply being in an atmosphere filled with passionate students skipping school, sleep, and what-not, who travelled all the way to Boulder just to do what they love - creating something cool. Even if you're not a tech person, if you've ever been to a place that is so full of energy and enthusiasm you'd definitely agree that there's no other place you'd rather be!

## What I did

I was mostly involved in the web team and helped build the website. This was a really simple task compared to all the other things that needed to be done. And the website was nearly finished early in January, so I started helping the put together another event - [Startups2Students](https://startups2students.hackcu.org/). As the event drew closer, we started creating a live page, that displays updated schedules, a countdown timer, API's and hardware available, etc. We used Google Sheets to fetch the information to display on the website rather than editing the source. This was done to make sure that it is easy for any admin to edit the schedule on the fly (as opposed to someone cloning, fetching commits, and all that mess) and to bypass the caching process (we don't want any hacker to have an outdated schedule simply because they didn't clear cache).

## Other cool things we used

We had a [SMS notification system](https://github.com/HackCU/mercurysms) through which we could send a text message reminding hackers about upcoming tech talks, workshops, deadlines, etc. This was a really sweet software our team built. Unfortunately, during our first run, the server timed out and killed the process because it took a long time for Twilio to validate a single request and running it on an entire list timed out the process. And during the event, we didn't have time to fix that issue. So the workaround was sending texts in small batches.

This year, we also used [HelpQ](https://github.com/ehzhang/HELPq) created by the HackMIT team for mentoring hackers. It is a very effective tool that uses tickets hackers create to tell mentors what issues they have with their code. The mentors, on the other side, can view all of these tickets and choose the one they want to help with. Earlier, Slack was used. But with 400 hackers, Slack is very inefficient and requests for help can get buried in messages. So we [adapted HelpQ](https://mentors.hackcu.org/). Despite my initial skepticism, a lot of hackers and mentors used this and I think we will definitely use this moving forward (unless we find a better alternative).

## During the hackathon

The event was 24 hours and I was there during the entire event. I took a 90 minute (power?) nap at 1:30 AM. You'd have probably met me at check-in at MATH 100 or at the MLH Hardware Lab helping you guys check out the right hardware. Or you might have seen me moving tables around or caught me taking out the trash or refilling RedBull (they ran out fast!).

I haven't been to a lot of hackathons. But I felt that HackCU proceeded smoothly overall except for two small hiccups. At the beginning, our lunch order was messed up by the vendor (which we corrected soon to get more food!). And towards the end, there was a lot of confusion and panic among hackers about when they had to submit their projects to Devpost. This was due to the clock on hackers' computers being not set to MST (Boulder time zone). So the countdown on the live page and the Devpost both told the hackers to submit their hacks an hour earlier! Luckily we found what was going wrong soon and notified all hackers.

## The aftermath

After the closing ceremonies, and after all the hackers had bid farewells, came the most tedious job - cleaning up the rooms. The building we had rented was a new building and the officials wanted the rooms to be super clean after the event. So we manually picked out all the trash and soda cans that hackers left behind. wiped all the tables clean with a solvent, cleared the boards that had been used, vacuumed the carpets, rearranged the tables to how they were before, etc. It was very tiring work - especially vacuuming the carpets. The coffee spills were another story.

10 people cleaning up after 400 hackers is quite a tall task. Since we're planning to expand to 600 hackers next year, we're also thinking about hiring a professional cleaning service next time.

## Final remarks and takeaways

As a hacker (or any sensible human being) you must really take the following seriously when you travel to hackathons (or any other event):

1. Always clean up after your mess. If you spilt coffee on the table, go get a paper towel and wipe it clean. It is much easier to clean a coffee spill when the coffee still hasn't dried up.
2. If it is a mess you can't clean up on your own (such as a radioactive spillage), inform one of the admins or other staff.
3. If you emptied a soda can, throw it in the trash. Don't leave it lying around or wait for someone else to do it.
4. When you travel to another state, make sure to update your computer and phone clocks to the local time (just like your watches during daylight savings). This can prevent mass false panic attacks at a later time.

## The future

Now that this edition came to successful end, our team has taken a small break and started buckling up for the final exams. Next year, it's going to be a lot bigger and better with  more cool prizes! So be sure to keep an eye out for us next year and return to make more awesome stuff! Until then, keep hacking hard!
