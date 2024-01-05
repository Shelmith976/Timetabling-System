// Import the mathjs library for matrix operations
const math = require("mathjs");

// Define the parameters of the genetic algorithm
const options = {
	// The size of the population
	size: 100,
	// The probability of crossover
	crossover: 0.8,
	// The probability of mutation
	mutation: 0.2,
	// The maximum number of iterations
	iterations: 1000,
	// The optimization type (maximize or minimize the fitness function)
	optimize: "maximize",
	// The selection type (roulette, tournament, etc.)
	select1: "roulette",
	select2: "roulette",
};

// Define the data for the timetable generator
const data = {
	// The number of classes to schedule
	numClasses: 50,
	// The number of rooms available
	numRooms: 10,
	// The number of lecturers available
	numLecturers: 20,
	// The number of batches available
	numBatches: 10,
	// The mapping of class ids to subject codes
	classSubject: {
		1: "CS101",
		2: "CS102",
		// ...
		50: "CS150",
	},
	// The mapping of subject codes to course ids
	subjectCourse: {
		CS101: 1,
		CS102: 1,
		// ...
		CS150: 5,
	},
	// The mapping of subject codes to whether they have a lab or not
	subjectLab: {
		CS101: false,
		CS102: true,
		// ...
		CS150: false,
	},
	// The mapping of lecturer ids to department ids
	lecturerDepartment: {
		1: 1,
		2: 1,
		// ...
		20: 5,
	},
	// The mapping of lecturer ids to their preferred teaching days
	lecturerDays: {
		1: ["Tuesday", "Thursday", "Friday", "Wednesday"],
		2: ["Tuesday", "Monday", "Friday", "Thursday"],
		3: ["Thursday", "Wednesday", "Monday", "Tuesday"],
		4: ["Wednesday", "Thursday", "Friday"],
		5: ["Friday", "Monday"],
		6: ["Tuesday", "Monday"],
		7: ["Tuesday", "Monday", "Wednesday", "Thursday"],
		8: ["Tuesday", "Friday"],
		9: ["Wednesday", "Tuesday"],
		10: ["Friday", "Wednesday", "Tuesday", "Thursday"],
		11: ["Wednesday", "Thursday"],
		12: ["Wednesday", "Thursday", "Monday", "Friday"],
		13: ["Wednesday", "Tuesday"],
		14: ["Thursday", "Friday", "Monday", "Tuesday"],
		15: ["Wednesday", "Thursday", "Monday"],
		16: ["Tuesday", "Monday"],
		17: ["Monday", "Wednesday", "Tuesday"],
		18: ["Friday", "Thursday"],
		19: ["Monday", "Wednesday", "Tuesday", "Thursday"],
		20: ["Monday", "Tuesday", "Thursday"],
	},
	// The mapping of room numbers to room types
	roomType: {
		R1: "Classroom",
		R2: "Classroom",
		// ...
		R10: "Workshop",
	},
	// The mapping of room numbers to room capacities
	roomCapacity: {
		R1: 50,
		R2: 40,
		// ...
		R10: 30,
	},
	// The mapping of batch codes to course ids
	batchCourse: {
		"CS 1.1": 1,
		"CS 1.2": 1,
		// ...
		"CS 5.3": 5,
	},
	// The mapping of batch codes to year and semester
	batchYearSemester: {
		"CS 1.1": [1, 1],
		"CS 1.2": [1, 2],
		// ...
		"CS 5.3": [5, 3],
	},
};

// Define the representation of a solution (timetable)
const seed = function () {
	// Create an empty array to store the solution
	const solution = [];
	// Loop through the number of classes to schedule
	for (let i = 0; i < data.numClasses; i++) {
		// Generate a random class id from 1 to numClasses
		const classId = Math.floor(Math.random() * data.numClasses) + 1;
		// Generate a random room number from R1 to R10
		const roomNum = "R" + (Math.floor(Math.random() * data.numRooms) + 1);
		// Generate a random lecturer id from 1 to numLecturers
		const lecturerId = Math.floor(Math.random() * data.numLecturers) + 1;
		// Generate a random batch code from the keys of batchCourse
		const batchCode = Object.keys(data.batchCourse)[
			Math.floor(Math.random() * data.numBatches)
		];

		// Generate a random start time from 8:00 to 16:00, excluding 12:00
		let startHour;
		do {
			startHour = Math.floor(Math.random() * 9) + 8;
		} while (startHour === 12);

		const startTime = startHour + ":00:00";

		// Generate a random end time based on the class duration (2 or 3 hours)
		const classDuration = data.subjectLab[data.classSubject[classId]] ? 3 : 2;
		const endHour = startHour + classDuration;
		const endTime = endHour + ":00:00";

		// Generate a random day of week from Monday to Friday
		const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
		const dayOfWeek = days[Math.floor(Math.random() * 5)];
		// Create an object to store the class details
		const classObj = {
			classId: classId,
			roomNum: roomNum,
			lecturerId: lecturerId,
			batchCode: batchCode,
			startTime: startTime,
			endTime: endTime,
			dayOfWeek: dayOfWeek,
		};
		// Push the object to the solution array
		solution.push(classObj);
	}
	// Return the solution array
	return solution;
};

// Define the fitness function
const fitness = function (solution) {
	// Initialize the fitness score to zero
	let score = 0;
	// Loop through the classes in the solution
	for (let i = 0; i < solution.length; i++) {
		// Get the current class details
		const classObj = solution[i];
		const classId = classObj.classId;
		const roomNum = classObj.roomNum;
		const lecturerId = classObj.lecturerId;
		const batchCode = classObj.batchCode;
		const startTime = classObj.startTime;
		const endTime = classObj.endTime;
		const dayOfWeek = classObj.dayOfWeek;

		// Get the subject code, course id, and lab status of the class
		const subjectCode = data.classSubject[classId];
		const courseId = data.subjectCourse[subjectCode];
		const hasLab = data.subjectLab[subjectCode];

		// Get the department id and preferred days of the lecturer
		const departmentId = data.lecturerDepartment[lecturerId];
		const preferredDays = data.lecturerDays[lecturerId] || [];

		// Get the room type and capacity of the room
		const roomType = data.roomType[roomNum];
		const roomCapacity = data.roomCapacity[roomNum];

		// Get the course id, year, and semester of the batch
		const batchCourseId = data.batchCourse[batchCode];
		const [batchYear, batchSemester] = data.batchYearSemester[batchCode] || [];

		// const [batchYear, batchSemester] = data.batchYearSemester[batchCode];

		// Check if the class is assigned to the correct course
		if (courseId === batchCourseId) {
			// Add 10 points to the score
			score += 10;
		}
		// Check if the class is assigned to the correct room type
		if (
			(hasLab && roomType === "Workshop") ||
			(!hasLab && roomType === "Classroom")
		) {
			// Add 10 points to the score
			score += 10;
		}
		// Check if the class is assigned to the correct department
		if (courseId === departmentId) {
			// Add 10 points to the score
			score += 10;
		}
		// Check if the class is assigned to the preferred day of the lecturer
		if (preferredDays.includes(dayOfWeek)) {
			// Add 10 points to the score
			score += 10;
		}
		// Check if the class is assigned to a room with enough capacity
		if (roomCapacity >= 30) {
			// Add 10 points to the score
			score += 10;
		}
		// Check if the class has any conflicts with other classes
		for (let j = 0; j < solution.length; j++) {
			// Skip if it is the same class
			if (i === j) continue;
			// Get the other class details
			const otherClassObj = solution[j];
			const otherClassId = otherClassObj.classId;
			const otherRoomNum = otherClassObj.roomNum;
			const otherLecturerId = otherClassObj.lecturerId;
			const otherBatchCode = otherClassObj.batchCode;
			const otherStartTime = otherClassObj.startTime;
			const otherEndTime = otherClassObj.endTime;
			const otherDayOfWeek = otherClassObj.dayOfWeek;
			// Check if the classes are on the same day
			if (dayOfWeek === otherDayOfWeek) {
				// Check if the classes have overlapping time
				if (
					(startTime >= otherStartTime && startTime < otherEndTime) ||
					(endTime > otherStartTime && endTime <= otherEndTime) ||
					(startTime <= otherStartTime && endTime >= otherEndTime)
				) {
					// Check if the classes have the same room
					if (roomNum === otherRoomNum) {
						// Subtract 20 points from the score
						score -= 20;
					}
					// Check if the classes have the same lecturer
					if (lecturerId === otherLecturerId) {
						// Subtract 20 points from the score
						score -= 20;
					}
					// Check if the classes have the same batch
					if (batchCode === otherBatchCode) {
						// Subtract 20 points from the score
						score -= 20;
					}
				}
			}
		}
	}
	// Return the fitness score
	return score;
};

// Define the crossover function
const crossover = function (parent1, parent2) {
	// Create an empty array to store the offspring
	const offspring = [];
	// Loop through the number of classes to schedule
	for (let i = 0; i < data.numClasses; i++) {
		// Generate a random number between 0 and 1
		const rand = Math.random();
		// If the random number is less than the crossover probability
		if (rand < options.crossover) {
			// Choose a random point to split the parents
			const point = Math.floor(Math.random() * data.numClasses);
			// Create two new children by swapping the parents' segments
			const child1 = parent1.slice(0, point).concat(parent2.slice(point));
			const child2 = parent2.slice(0, point).concat(parent1.slice(point));
			// Push the children to the offspring array
			offspring.push(child1, child2);
		} else {
			// Otherwise, push the parents to the offspring array as they are
			offspring.push(parent1, parent2);
		}
	}
	// Return the offspring array
	return offspring;
};

// Define the mutation function
const mutation = function (solution) {
	// Loop through the number of classes to schedule
	for (let i = 0; i < data.numClasses; i++) {
		// Generate a random number between 0 and 1
		const rand = Math.random();
		// If the random number is less than the mutation probability
		if (rand < options.mutation) {
			// Choose a random attribute to mutate
			const attributes = [
				"classId",
				"roomNum",
				"lecturerId",
				"batchCode",
				"startTime",
				"endTime",
				"dayOfWeek",
			];

			const attribute =
				attributes[Math.floor(Math.random() * attributes.length)];

			let startHour;

			// Mutate the attribute with a random value
			switch (attribute) {
				case "classId":
					solution[i].classId = Math.floor(Math.random() * data.numClasses) + 1;
					break;
				case "roomNum":
					solution[i].roomNum =
						"R" + (Math.floor(Math.random() * data.numRooms) + 1);
					break;
				case "lecturerId":
					solution[i].lecturerId =
						Math.floor(Math.random() * data.numLecturers) + 1;
					break;
				case "batchCode":
					solution[i].batchCode = Object.keys(data.batchCourse)[
						Math.floor(Math.random() * data.numBatches)
					];
					break;
				case "startTime":
					do {
						startHour = Math.floor(Math.random() * 9) + 8;
					} while (startHour === 12);
					solution[i].startTime = startHour + ":00:00";
					break;
				case "endTime":
					const classDuration = data.subjectLab[
						data.classSubject[solution[i].classId]
					]
						? 3
						: 2;
					const endHour = startHour + classDuration;
					solution[i].endTime = endHour + ":00:00";
					break;
				case "dayOfWeek":
					const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
					solution[i].dayOfWeek = days[Math.floor(Math.random() * 5)];
					break;
			}
		}
	}
	// Return the mutated solution
	return solution;
};

// Define the selection function
const selection = function (population, fitnessScores) {
	// Create an empty array to store the selected parents
	const parents = [];
	// Loop through the size of the population
	for (let i = 0; i < options.size; i++) {
		// Choose two parents based on the selection type
		let parent1, parent2;
		switch (options.select1) {
			case "roulette":
				// Use the roulette wheel selection method
				parent1 = roulette(population, fitnessScores);
				break;
			case "tournament":
				// Use the tournament selection method
				parent1 = tournament(population, fitnessScores);
				break;
			default:
				// Use the random selection method
				parent1 = random(population);
				break;
		}
		switch (options.select2) {
			case "roulette":
				// Use the roulette wheel selection method
				parent2 = roulette(population, fitnessScores);
				break;
			case "tournament":
				// Use the tournament selection method
				parent2 = tournament(population, fitnessScores);
				break;
			default:
				// Use the random selection method
				parent2 = random(population);
				break;
		}
		// Push the parents to the parents array
		parents.push(parent1, parent2);
	}
	// Return the parents array
	return parents;
};

// Define the roulette wheel selection method
const roulette = function (population, fitnessScores) {
	// Calculate the total fitness of the population
	const totalFitness = math.sum(fitnessScores);
	// Generate a random number between 0 and the total fitness
	const rand = Math.random() * totalFitness;
	// Initialize a cumulative fitness variable
	let cumFitness = 0;
	// Loop through the population
	for (let i = 0; i < population.length; i++) {
		// Add the fitness score of the current individual to the cumulative fitness
		cumFitness += fitnessScores[i];
		// If the cumulative fitness is greater than or equal to the random number
		if (cumFitness >= rand) {
			// Return the current individual as the selected parent
			return population[i];
		}
	}
};

// Define the tournament selection method
const tournament = function (population, fitnessScores) {
	// Choose a random number of individuals to compete in the tournament
	const k = Math.floor(Math.random() * population.length) + 1;
	// Create an empty array to store the competitors
	const competitors = [];
	// Loop through the number of competitors
	for (let i = 0; i < k; i++) {
		// Choose a random index from the population
		const index = Math.floor(Math.random() * population.length);
		// Push the individual and its fitness score to the competitors array
		competitors.push([population[index], fitnessScores[index]]);
	}
	// Sort the competitors by their fitness scores in descending order
	competitors.sort((a, b) => b[1] - a[1]);
	// Return the first competitor as the selected parent
	return competitors[0][0];
};

// Define the random selection method
const random = function (population) {
	// Choose a random index from the population
	const index = Math.floor(Math.random() * population.length);
	// Return the individual at that index as the selected parent
	return population[index];
};

// Define the main function
const main = function () {
	// Create an empty array to store the population
	const population = [];
	// Loop through the size of the population
	for (let i = 0; i < options.size; i++) {
		// Generate a random solution using the seed function
		const solution = seed();
		// Push the solution to the population array
		population.push(solution);
	}
	// Initialize the best solution and its fitness score
	let bestSolution = null;
	let bestFitness = null;
	// Loop through the number of iterations
	for (let i = 0; i < options.iterations; i++) {
		// Create an empty array to store the fitness scores of the population
		const fitnessScores = [];
		// Loop through the population
		for (let j = 0; j < population.length; j++) {
			// Evaluate the fitness of the current solution using the fitness function
			const fitnessScore = fitness(population[j]);
			// Push the fitness score to the fitnessScores array
			fitnessScores.push(fitnessScore);
			// Check if the current solution is better than the best solution
			if (
				bestSolution === null ||
				(options.optimize === "maximize" && fitnessScore > bestFitness) ||
				(options.optimize === "minimize" && fitnessScore < bestFitness)
			) {
				// Update the best solution and its fitness score
				bestSolution = population[j];
				bestFitness = fitnessScore;
			}
		}
		// Select the parents for the next generation using the selection function
		// const parents = selection(population, fitnessScores);

		// Create an empty array to store the selected parents
		const parents = [];
		// Loop through the size of the population
		for (let i = 0; i < options.size; i++) {
			// Choose two parents from the population using the selection function
			const parent1 = selection(population, fitnessScores)[i] || [];
			const parent2 = selection(population, fitnessScores)[i + 1] || [];
			// Push the parents to the parents array
			parents.push(parent1, parent2);
		}
		// Create an empty array to store the offspring
		const offspring = [];
		// Loop through the parents in pairs
		for (let j = 0; j < parents.length; j += 2) {
			// Crossover the parents to produce two children using the crossover function
			const children = crossover(parents[j], parents[j + 1]);
			// Push the children to the offspring array
			offspring.push(...children);
		}
		// Loop through the offspring
		for (let j = 0; j < offspring.length; j++) {
			// Mutate the offspring using the mutation function
			const mutatedOffspring = mutation(offspring[j]);
			// Replace the population with the mutated offspring
			population[j] = mutatedOffspring;
		}
		// Print the current iteration and the best fitness score
		console.log("Iteration " + (i + 1) + ": Best fitness = " + bestFitness);
	}
	// Print the final solution and its fitness score
	console.log("Final solution: " + JSON.stringify(bestSolution));
	console.log("Final fitness: " + bestFitness);
};

// Run the main function
main();
