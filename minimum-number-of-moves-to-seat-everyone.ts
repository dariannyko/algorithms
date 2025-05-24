function minMovesToSeat(seats, students) {
    let moves = 0;
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    for (let i = 0; i < seats.length; i++) {
        moves += Math.abs(seats[i] - students[i]);
    }
    return moves;
};