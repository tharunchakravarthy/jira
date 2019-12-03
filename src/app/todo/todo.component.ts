import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  items: string[];
  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.items = this.dataservice.getTodos();
  }

  inprogress(index: number) {
    this.dataservice.shift(index, 1, 2);
  }

  done(index: number) {
    this.dataservice.shift(index, 1, 3);
  }

  blocked(index: number) {
    this.dataservice.shift(index, 1, 4);
  }

  remove(index: number) {
    this.dataservice.remove(index, 1);
  }
}
