// Interview Question - 1
const userActivity = [
    { user: 'Alice', activityCount: 45 },
    { user: 'Bob', activityCount: 75 },
    { user: 'Charlie', activityCount: 33 },
    { user: 'James', activityCount: 94 }
];

// Find the user using reduce function with the most activity count.
const mostActiveUser = userActivity.reduce((maxActiveUser, userDtl) => {
    if (maxActiveUser.activityCount < userDtl.activityCount) {
        return userDtl;
    } else {
        return maxActiveUser;
    }
    // const newUserDtl = maxActiveUser.activityCount < userDtl.activityCount ? userDtl : maxActiveUser;
    // return newUserDtl;
});

console.log(mostActiveUser);


// Interview Question - 2
const expenses = [
    { description: 'Groceries', amount: 50, category: 'Food' },
    { description: 'Electricity Bill', amount: 100, category: 'Utilities' },
    { description: 'Dinner', amount: 30, category: 'Food' },
    { description: 'Internet Bill', amount: 50, category: 'Utilities' }
];

// Find the total expense against all the categories using reduce
const expenseReport = expenses.reduce((report, expense) => {
    report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report;
}, {});

console.log(expenseReport);


// Interview Question - 3
const tasks = [
    { description: 'Write report', completed: false, priority: 2 },
    { description: 'Send email', completed: true, priority: 3 },
    { description: 'Prepare presentation', completed: false, priority: 1 },
];

// Find the tasks which are not yet completed and sort them based on the priority
const uncompleteTasks = tasks
    .filter(task => !task.completed)
    .sort((a, b) => a.priority - b.priority);

console.log(uncompleteTasks);


// Interview Question - 4
const movieRatings = [
    { title: 'Movie A', ratings: [4, 5, 3] },
    { title: 'Movie B', ratings: [5, 5, 4] },
    { title: 'Movie C', ratings: [2, 4, 3] }
];

// For each movie return the title, ratings, and average ratings calculated using reduce.
const movies = movieRatings.map(movie => {
    const avgRating = movie.ratings.reduce((ratingSum, rating) => ratingSum + rating, 0) / movie.ratings.length;
    movie['averageRating'] = avgRating.toFixed(2);
    return movie;
});

console.log(movies);
