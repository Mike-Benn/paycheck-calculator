# Paycheck Calculator

My wife frequently calculates her paycheck ahead of time based on the hours she worked and I thought it would be a good day project to make her a form that calculates it for her.  This is my second project working in React so it was good to get some more experience with the library.

**Link to project:** https://cosmic-lebkuchen-8c0507.netlify.app/

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:
**Tech used:** HTML, CSS, JavaScript, React

This project is just a simple form with a fieldset at the bottom with a couple fields that are readonly and display gross pay and net pay.  State is being handled at the top level component and passed down to the necessary inputs.  


## Optimizations

There are several things I will eventually add to this down the road but I'm going to leave it alone as is.  Some of those things include:
  -  A drop down box to select between users which will then toggle the rates that affect how things are calculated
  -  A place to customize said rates in the app if they change instead of it being hard-coded under the hood
  -  Maybe include a stats/totals page for pay over time although this feels overkill as she can just view her paystub for this kind of information

## Lessons Learned:

I think maybe the biggest lesson learned is just the continuing understanding of how best to manage my components and how they are passed between each other.  Also I am trying to be cognizant of choosing identifiers for things that are considerably more concise than my last React project.





