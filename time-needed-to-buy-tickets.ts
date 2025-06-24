function timeRequiredToBuy(tickets: number[], k: number): number {
    const ticketToBuy = tickets[k];
    let time = 0;

    for (let i = 0; i < tickets.length; i++) {
        if(i <= k) {
            time += Math.min(ticketToBuy, tickets[i]);
        } else {
            time += Math.min(ticketToBuy - 1, tickets[i]);
        }
    }

    return time;
}