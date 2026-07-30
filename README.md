# University of Helsinki - Full Stack Open

This is a repo where I will add all the tasks and projects I do for the Full Stack Open course provided by the University of Helsinki! I will also try to document the progress and process of how I do things. <br>

# File Format

<pre>
Part_0
  Course Name
    (other files needed in task e.g. html, css, js, md ...)
  Course Name
  Course Name
  Lecture_Follow (This is a project where I do the stuff shown in lecture, aka chapters.)
part_1
  ...
part_2
  ...
</pre>

# Dates and Documentation

## Table of Contents

- [Part 3 - 29.07.2026 - xx](#part-3---29072026---xx)
  - [Task 1 - Phonebook backend, step 1](#task-1---Phonebook-backend-step-1)
  - [Task 2 - Phonebook backend, step 2](#task-2---Phonebook-backend-step-2)
  - [Task 3 - Phonebook backend, step 3](#task-3---Phonebook-backend-step-3)
- [Part 2 - 23.07.2026 - 27.07.2026](#part-2---23072026---27072026)
  - [Task 1 - Course Information, step 6](#task-1---course-information-step-6)
  - [Task 2 - Course Information, step 7](#task-2---course-information-step-7)
  - [Task 3 - Course Information, step 8](#task-3---course-information-step-8)
  - [Task 4 - Course Information, step 9](#task-4---course-information-step-9)
  - [Task 5 - Course Information, step 10](#task-5---course-information-step-10)
  - [Task 6 - The Phonebook, Step 1](#task-6---the-phonebook-step-1)
  - [Task 7 - The Phonebook, Step 2](#task-7---the-phonebook-step-2)
  - [Task 8 - The Phonebook, Step 3](#task-8---the-phonebook-step-3)
  - [Task 9 - The Phonebook, Step 4](#task-9---the-phonebook-step-4)
  - [Task 10 - The Phonebook, Step 5](#task-10---the-phonebook-step-5)
  - [Task 11 - The Phonebook, Step 6](#task-11---the-phonebook-step-6)
  - [Task 12 - The Phonebook, Step 7](#task-12---the-phonebook-step-7)
  - [Task 13 - The Phonebook, Step 8](#task-13---the-phonebook-step-8)
  - [Task 14 - The Phonebook, Step 9](#task-14---the-phonebook-step-9)
  - [Task 15 - The Phonebook, Step 10](#task-15---the-phonebook-step-10)
  - [Task 16 - The Phonebook, Step 11](#task-16---the-phonebook-step-11)
  - [Task 17 - The Phonebook, Step 12](#task-17---the-phonebook-step-12)
  - [Task 18 – Data for Countries, Step 1](#task-18--data-for-countries-step-1)
  - [Task 19 – Data for Countries, Step 2](#task-19--data-for-countries-step-2)
  - [Task 20 – Data for Countries, Step 3](#task-20--data-for-countries-step-3)
- [Part 1 - 19.07.2026 - 23.07.2026](#part-1---19072026---23072026)
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
  - [Task 14 - Anecdotes, step 4](#task-14---anecdotes-step-3)
- [Part 0 - 18.07.2026 - 19.07.2026](#part-0---18072026---19072026)
  - [Task 1 - HTML](#task-1---html)
  - [Task 2 - CSS](#task-2---css)
  - [Task 3 - HTML forms](#task-3---html-forms)
  - [Task 4 - New note diagram](#task-4---new-note-diagram)
  - [Task 5 - Single page app diagram](#task-5---single-page-app-diagram)

## Part 3 - 29.07.2026 - xx

### Task 1 - Phonebook backend, step 1

started with `node init` to make a project. I installed `express` and added `dev` and `start` in `package.json`.

```json
  "scripts": {
    "dev": "node --watch index.js",
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

I coded the get method in `index.js`. At the end also added `.gitignore` so not all the stuff would be added in github.

**Time used:** Around 10 min

### Task 2 - Phonebook backend, step 2

Added an new `app.get()` request to get an info page on `/info`.

**Time used:** Around 5 min

### Task 3 - Phonebook backend, step 3

Added an new `app.get()` request to get an data from one id page on `/persons/id`.

**Time used:** Around 5 min

## Part 2 - 23.07.2026 - 27.07.2026

### Task 1 - Course Information, step 6

Put all the components in their own JSX file in the components folder and made a course component that will make the whole course file.

**Time used:** Around 30 min

### Task 2 - Course Information, step 7

Added a `Total` component that uses `arr.reduce` to calculate the sum of the total exercises and shows it on the website.

**Time used:** Around 10 min

### Task 3 - Course Information, step 8

Was already using reduce, as such task was skipped :))

**Time used:** Around 0 min

### Task 4 - Course Information, step 9

At the start, I had made a new component `Courses` which would input a course and work through that. But at the end I decided on having the code directly in the `App`.

**Time used:** Around 30 min

### Task 5 - Course Information, step 10

At the start of [Task 1 - Course Information, step 6](#task-1---course-information-step-6), I already had all the components in their own file inside the folder components; as such, I didn't have to do anything in this part.

**Time used:** Around 0 min

### Task 6 - The Phonebook, Step 1

I initially implemented the entire project in `App.jsx`. I created a `newName` state variable to store the value entered by the user in the input field. As the user typed, `newName` was updated, causing the `App` component to re-render on every keystroke.

After creating `RenderNumbers.jsx`, I noticed that it was also re-rendering every time the input changed, even though the `persons` array itself had not changed. This happened because `RenderNumbers` is a child of `App`, and React re-renders child components whenever the parent component re-renders.

To improve the component structure, I extracted the form into its own component, `Form.jsx`. I passed `persons` and `setPersons` as props to the form component, allowing it to handle adding new people independently. Since the `newName` state is now managed inside `Form`, typing into the input only re-renders the `Form` component. The `App` component and `RenderNumbers` only re-render when `persons` is updated after the user clicks the **Add** button.

**Time used:** Around 40 min

### Task 7 - The Phonebook, Step 2

In this task, I needed to check whether the name entered by the user already existed in the phonebook.

My first idea was to use the `filter` method, but I initially implemented the logic incorrectly by accidentally comparing an object to a string. After noticing that it wasn't working, I tried using the `map` method instead. However, I made the same logical mistake there as well.

Eventually, I recognised the error in my comparison logic through `console.log`. I returned to using `filter` and implemented the solution correctly.

**Time used:** Around 20 minutes.

### Task 8 - The Phonebook, Step 3

In this task, I added a **number** input field to the form and extended the `person` object to include a `number` property.

I reused the `onChange` handler for the name input as a template and created a similar handler for the number input.

I also added validation in `onAddButtonClicked` to ensure that both the name and number fields are filled in before adding a new person. If either field is empty, an alert is displayed, and the person is not added to the phonebook.

**Time used:** Around 10 minutes.

### Task 9 - The Phonebook, Step 4

I created a new component called `Filter` to filter the phonebook entries. I used `useState` to track the filter value and check whether it changed. Whenever the value changed, the displayed numbers would update.

After some testing, I noticed that I had forgotten to handle uppercase and lowercase letters. To fix this, I used `str.toLowerCase()` to convert both strings to lowercase before checking whether one string was included in the other using `str.includes()`.

After updating the code, I tested it again and noticed another issue. The `filteredPerson` state created in `App` did not update when new entries were added. Instead, I had to change the filter input before the list would refresh. I searched online for a solution, and after a while, I used AI for help. That is when I learned about `useEffect`. By using `useEffect`, I was able to make the filtered list update automatically whenever the phonebook data changed.

**Time used:** Around 1 hour.

### Task 10 - The Phonebook, Step 5

I was already using different components in separate folders before starting this task. However, I renamed the files and components so that they matched the naming convention used in the assignment.

**Time used:** Around 1 minute.

### Task 11 - The Phonebook, Step 6

I downloaded the required package and added `json-server -p 3001 db.json` as a `server` in scripts inside `package.json`. I then used the `useEffect` hook to fetch and update the phone numbers from the JSON server when the application loaded.

**Time used:** Around 10 minutes.

### Task 12 - The Phonebook, Step 7

I started by making a `phonebookBackend` file under the `services` folder. I am still having a bit of a hard time learning the syntax for the backend, so I looked into the lecture_follow to remember while doing it but didn't directly copy it. I changed the `App` to use the `phonebookBacked` and did the same for the `PersonsForm` too.

**Time used:** Around 30 minutes.

### Task 13 - The Phonebook, Step 8

Already did this in the [Task 12 - The Phonebook, Step 7](#task-12---the-phonebook-step-7)

**Time used:** Around 0 minutes.

### Task 14 - The Phonebook, Step 9

Implemented the `onDeleteButtonClicked` function to delete a person's information from the backend and update the local `persons` state after a successful deletion. I also added error handling with `catch` to display an alert if the person no longer exists on the server. Additionally, I added a `deletePhone` method to the `phonebookBackend` service to handle the delete request.

```javascript
// delete phone number
const onDeleteButtonClicked = (id) => {
	console.log('delete pressed:', id);

	persons.map((person) => {
		if (person.id === id) {
			if (window.confirm(`Delete ${person.name}?`)) {
				phonebookBackend
					.deletePhone(person.id)
					.then(() =>
						setPersons(
							persons.filter((filterPerson) => filterPerson !== person),
						),
					)
					.catch(() => alert(`${person.name} doesn't exist on the server`));
			}
		}
	});
};
```

**Time used:** Around 40 minutes.

### Task 15 - The Phonebook, Step 10

This has been the most difficult task for me so far. The main issue was my limited knowledge of JavaScript arrays and their methods. After completing this task, I realised that before continuing with the course, I should spend some time learning more about the different array methods available in JavaScript.

While working on this task, I encountered many bugs. One of the most common mistakes I made was forgetting to add a `return` statement inside arrow functions when using curly braces. Since I usually write concise arrow functions like this:

```js
arr.filter((x) => x === y);
```

I often forgot that changing it to:

```js
arr.filter((x) => {
	console.log('smth');
	return x === y;
});
```

requires an explicit `return`. I caught myself making this mistake several times.

Another bug I encountered was manually adding an `id` property to the object. Since `json-server` automatically generates an `id`, providing my own caused unexpected issues.

After around 1 hour and 30 minutes of debugging and learning, I finally completed the task.

**Time used:** Around 1 hour 30 minutes.

### Task 16 - The Phonebook, Step 11

I used `useState` and `Notification.css` to display notifications defined in `Notification.jsx`. The `Notification` component is a simple component that returns a `<div>` containing the notification message.

**Time used:** Around 10 minutes.

### Task 17 - The Phonebook, Step 12

Changed the `noteMessage` to be an object.

```js
{
		message: null,
		isError: false,
}
```

Afterwards, I added a simple if statement and CSS with a red colour to change the notification colour.

```js
const Notification = ({ note = {} }) => {
	if (note.message === null) return;
	else if (note.isError) return <div className="error">{note.message}</div>;
	else return <div className="note">{note.message}</div>;
};
```

**Time used:** Around 20 minutes.

### Task 18 – Data for Countries, Step 1

I added two `useState` hooks:

```js
const [countries, setCountries] = useState([]);
const [filterCountries, setFilterCountries] = useState([]);
```

First, I fetched all the data from the API and stored it in `countries`:

```js
useEffect(() => {
	backend.getAll().then((response) => {
		setCountries(response);
	});
}, []);
```

After that, I used the `CountriesInput.jsx` component to handle user input and update `filteredCountries`. Finally, the `ShowCountries.jsx` component displays information about the matching countries. It uses `if`/`else` conditions to determine what information to show based on the current state.

**Time spent:** Around 40 minutes.

### Task 19 – Data for Countries, Step 2

I created a separate `ShowCountryFullInfo` component inside `CountriesInput.jsx`. `ShowCountryFullInfo` takes `country` as a prop and displays the full country information.

When the **Show** button is clicked, it clears `filteredCountries` and adds the selected `country` to it. This refreshes the component and displays the full country information.

This approach also correctly handles countries whose names are contained within other country names, such as **Sudan**.

**Time spent:** Around 20 minutes.

### Task 20 – Data for Countries, Step 3

I made an account on OpenWeather and used it's api to show the weather in the app. I had a problem because I used the wrong API version, '4.0' instead of '2.5', but after I figured it out, it was easy to change.

**Time spent:** Around 20 minutes.

## Part 1 - 19.07.2026 - 23.07.2026

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

### Task 13 - Anecdotes, step 2

Added the ability to vote. My first thought on this went to using an object. I created an object `votes` using `useState`. My thought was to connect each quote to each object. When I did this, the main hurdle I had was learning how I could turn a variable to work as an object's key. <br><br>
But this idea does look quite bad since if we were to add more quotes, it wouldn't be dynamic; as such, I started working to make the same thing but with an array that could be made bigger dynamically. Tho even in the current version, if more quotes were to be added mid-run, it would not work as intended, but since that is not of concern right now, I am overlooking it. <br><br>
Both version is commited in GitHub with "task 13 with objects" and "task 13 with Array"

**Time used:** Around 40 minutes

### Task 14 - Anecdotes, step 3

Added everything to its own component and made a website that was instructed. The website uses components to add everything in the app. The website shows the final Anecdote too. Since this is the last task in this part, I think this part was good, and the instructions were clear and easy to understand. The task felt just enough challenging and not too hard or easy.

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

```

```
