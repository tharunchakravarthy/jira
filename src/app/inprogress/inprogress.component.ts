import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-inprogress",
  templateUrl: "./inprogress.component.html",
  styleUrls: ["./inprogress.component.scss"]
})
export class InprogressComponent implements OnInit {
  items: string[];
  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.items = this.dataservice.getInProgress();
  }

  todo(index: number) {
    this.dataservice.shift(index, 2, 1);
  }

  done(index: number) {
    this.dataservice.shift(index, 2, 3);
  }

  blocked(index: number) {
    this.dataservice.shift(index, 2, 4);
  }

  remove(index: number) {
    this.dataservice.remove(index, 2);
  }
}
