function maxEvents(events: number[][]): number {
    let maxDay = 0
    for(const event of events) {
        maxDay = Math.max(maxDay, event[1])
    }

    let res = 0
    const n = events.length
    const pq = new MinPriorityQueue<number>()
    events.sort((a, b) => a[0] - b[0])

    for(let currDay=1, j=0; currDay<= maxDay; currDay+=1) {
        // Add all events start before currentDay
        while(j<n && events[j][0] <= currDay) {
            pq.enqueue(events[j][1])
            j+=1
        }

        // Remove all events end before currentDay
        while(!pq.isEmpty() && pq.front()<currDay ) {
            pq.dequeue()
        }

        // Chose the event end earliest to attend
        if(!pq.isEmpty()) {
            res += 1
            pq.dequeue()
        }
    }

    return res
};