export class DataService {
  todo: string[] = ["todo1", "todo2"];
  inprogress: string[] = ["inprogress1", "inprogress2"];
  done: string[] = ["done1", "done2"];
  blocked: string[] = ["blocked1", "blocked2"];

  getTodos() {
    return this.todo;
  }

  getInProgress() {
    return this.inprogress;
  }

  getDone() {
    return this.done;
  }

  getBlocked() {
    return this.blocked;
  }
  getArray(index: number) {
    switch (index) {
      case 1:
        return this.todo;
      case 2:
        return this.inprogress;
      case 3:
        return this.done;
      case 4:
        return this.blocked;
    }
  }

  shift(index: number, from: number, to: number) {
    let temp = this.getArray(from)[index];
    this.getArray(from).splice(index, 1);
    this.getArray(to).push(temp);
  }

  remove(index: number, from: number) {
    this.getArray(from).splice(index, 1);
  }

  add(str: string, value: string) {
    switch (str) {
      case "Todo":
        this.todo.push(value);
        break;
      case "InProgress":
        this.inprogress.push(value);
        break;
      case "Done":
        this.done.push(value);
        break;
      case "Blocked":
        this.blocked.push(value);
        break;
    }
  }
}
