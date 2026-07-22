# University of Helsinki - Full Stack Open

This is a repo where I will add all the tasks and projects I do for the Full Stack Open course provided by the University of Helsinki! I will also try to document the progress and process of how I do things.

# File Format

<pre>
Part_0
  Course Name
    (other files needed in task e.g. html, css, js, md ...)
  Course Name
  Course Name
part_1
  ...
part_2
  ...
</pre>

# Dates and Documentation

## Table of Contents

- [Part 1 - 19.07.2026 - xx](#part-1---19072026---xx)
  - [Task 1 - Course Information, step 1](#task-1---course-information-step-1)
  - [Task 2 - Course Information, step 2](#task-2---course-information-step-2)
  - [Task 3 - Course Information, step 3](#task-3---course-information-step-3)
  - [Task 4 - Course Information, step 4](#task-4---course-information-step-4)
  - [Task 5 - Course Information, step 5](#task-5---course-information-step-5)
  - [Task 6 - Unicafe, step 1](#task-6---unicafe-step-1)
  - [Task 7 - Unicafe, step 2](#task-7---unicafe-step-2)
  - [Task 8 - Unicafe, step 3](#task-8---unicafe-step-3)
  - [Task 9 - Unicafe, step 4](#task-9---unicafe-step-4)
  - [Task 10 - Unicafe, step 5](#task-10---unicafe-step-5)
  - [Task 11 - Unicafe, step 6](#task-11---unicafe-step-6)
  - [Task 12 - Anecdotes, step 1](#task-12---anecdotes-step-1)
  - [Task 13 - Anecdotes, step 2](#task-13---anecdotes-step-2)

- [Part 0 - 18.07.2026 - 19.07.2026](#part-0---18072026---19072026)
  - [Task 1 - HTML](#task-1---html)
  - [Task 2 - CSS](#task-2---css)
  - [Task 3 - HTML forms](#task-3---html-forms)
  - [Task 4 - New note diagram](#task-4---new-note-diagram)
  - [Task 5 - Single page app diagram](#task-5---single-page-app-diagram)

## Part 1 - 19.07.2026 - xx

### Task 1 - Course Information, step 1

Got done with part one. I did two versions. One that was finite, so there can only be 3 parts and exercises, and another one with a loop and checks for the errors to make the code work with as many parts and exercises as wanted. In the process, I learnt how to use a for loop in JS and React.

**Time used:** Around 1 hour

### Task 2 - Course Information, step 2

Made a `Part` function that returns a paragraph.

**Time used:** Around 5 minutes

### Task 3 - Course Information, step 3

Updated the code to work with an object.

**Time used:** Around 10 minutes

### Task 4 - Course Information, step 4

I was technically already doing this in step 3.

**Time used:** Around 30 seconds

### Task 5 - Course Information, step 5

Made the whole params into a single JavaScript object as instructed.

**Time used:** Around 1 minute

### Task 6 - Unicafe, step 1

Made a new project for Unicafe inside `part_1` and created a feedback project. I chose to use an object for the review and have a single `useState`, as that felt more natural in this case.

**Time used:** Around 15 minutes

### Task 7 - Unicafe, step 2

Added all, average, and percentage of positive feedback to the website.

**Time used:** Around 10 minutes

### Task 8 - Unicafe, step 3

Skipped this step since `Statistics` and the other parts were already separate components from the beginning of the project.

**Time used:** Around 0 minutes

### Task 9 - Unicafe, step 4

Statistics are only rendered if there is feedback; otherwise, a message is shown.

**Time used:** Around 2 minutes

### Task 10 - Unicafe, step 5

Added `StatisticLine` to be used inside `Statistics`. The `Button` component was already done, so I didn't need to change it.

**Time used:** Around 2 minutes

### Task 11 - Unicafe, step 6

Made the statistics display in a table.

**Time used:** Around 15 minutes

### Task 12 - Anecdotes, step 1

Made a new project for Anecdotes and added functionality to display a random anecdote with a button to show another random one.

**Time used:** Around 20 minutes

### Task 12 - Anecdotes, step 2

Added the ability to vote. My first thought on this went to using an object. I made an object `votes` with the use of `useState`. My thought was to connect each quote to each object. When I did this, the main hurdle I had was learning how I could turn a variable to work as an object's key. <br><br>
But this idea does look quite bad since if we were to add more quotes, it wouldn't be dynamic; as such, I started working to make the same thing but with an array that could be made bigger dynamically. Tho even in the current version, if more quotes were to be added mid-run, it would not work as intended, but since that is not of concern right now, I am overlooking it. <br><br>
Both version is commited in GitHub with "task 13 with objects" and "task 13 with Array"

**Time used:** Around 40 minutes

## Part 0 - 18.07.2026 - 19.07.2026

### Task 1 - HTML

I have used HTML before and already know the basics, so I didn't spend much time reading the documentation.

**Time used:** Around 5 minutes

### Task 2 - CSS

I have used CSS before and already know the basics, so I didn't spend much time reading the documentation.

**Time used:** Around 5 minutes

### Task 3 - HTML forms

I have built forms before, so I didn't spend much time looking through the documentation.

**Time used:** Around 5 minutes

### Task 4 - New note diagram

Learnt about Mermaid and Git terminal commands, then used Mermaid to create the diagram.

**Time used:** Around 1 hour

### Task 5 - Single page app diagram

Created a diagram showing the requests sent by the SPA and the responses returned by the server.

**Time used:** Around 25 minutes
