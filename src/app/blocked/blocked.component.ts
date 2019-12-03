import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-blocked",
  templateUrl: "./blocked.component.html",
  styleUrls: ["./blocked.component.scss"]
})
export class BlockedComponent implements OnInit {
  items: string[];
  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.items = this.dataservice.getBlocked();
  }

  todo(index: number) {
    this.dataservice.shift(index, 4, 1);
  }

  inprogress(index: number) {
    this.dataservice.shift(index, 4, 2);
  }

  done(index: number) {
    this.dataservice.shift(index, 4, 3);
  }

  remove(index: number) {
    this.dataservice.remove(index, 4);
  }
}
