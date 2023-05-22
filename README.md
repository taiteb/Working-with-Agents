# Working-with-Agents
## Exploratory project using the p5 library

This is a bit of code I have put together from a few tutorials (the Coding Train, [this wolf/sheep sim](https://www.section.io/engineering-education/building-a-sheep-wolves-grass-agent-based-model-from-scratch/), [this lerpColor guide](https://www.geeksforgeeks.org/how-to-create-animation-of-color-changing-and-moving-cube-using-p5-js/))
It's pretty simple. It draws a canvas as large as the screen, creates a number of objects (circles), uses the wander function built by the coding train and sourced in the wolf sheep sim, 
and shifts the hue from a randomized list of colors, which it refreshes every 150 frames. The hues are skewed green/blue, bright values. The radius of the circle drawn is modulated by
-0.8 to 0.8 each frame, but that may change. 
