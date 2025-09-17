function earliestTime(tasks: number[][]): number {
  if (tasks.length === 1) {
    return tasks[0].reduce((a, b) => a + b, 0);
  }

  let min_task = tasks[0].reduce((a, b) => a + b, 0);

  for (let i = 1; i < tasks.length; i++) {
    const sum = tasks[i].reduce((a, b) => a + b, 0);
    min_task = Math.min(min_task, sum);
  }

  return min_task;
}
