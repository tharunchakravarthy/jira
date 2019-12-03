import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-done",
  templateUrl: "./done.component.html",
  styleUrls: ["./done.component.scss"]
})
export class DoneComponent implements OnInit {
  items: string[];
  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.items = this.dataservice.getDone();
  }

  todo(index: number) {
    this.dataservice.shift(index, 3, 1);
  }

  inprogress(index: number) {
    this.dataservice.shift(index, 3, 2);
  }

  blocked(index: number) {
    this.dataservice.shift(index, 3, 4);
  }

  remove(index: number) {
    this.dataservice.remove(index, 3);
  }
}
