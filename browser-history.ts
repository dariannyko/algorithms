class BrowserHistory {
  private history: string[];
  private link: number;

  constructor(homepage: string) {
    this.history = [homepage];
    this.link = 0;
  }

  visit(url: string): void {
    this.link++;
    this.history = this.history.slice(0, this.link);
    this.history.push(url);
  }

  back(step: number): string {
    this.link = Math.max(0, this.link - step);
    return this.history[this.link];
  }

  forward(step: number): string {
    this.link = Math.min(this.history.length - 1, this.link + step);
    return this.history[this.link];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
