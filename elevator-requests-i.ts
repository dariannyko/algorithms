function elevatorRequests(n: number, requests: number[]): number {
  n = 0;
  let r = 0;

  for (let i = 0; i < requests.length; i++) {
    r += Math.abs(requests[i] - n);
    n = requests[i];
  }

  return r;
}
