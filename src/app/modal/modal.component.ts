import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgForm } from "@angular/forms";

import { DataService } from "../data.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private dataService: DataService
  ) {}
  statusvalues = ["Todo", "InProgress", "Done", "Blocked"];
  selectedstatus = "Todo";
  ngOnInit() {}

  openSm(content) {
    this.modalService.open(content, { size: "lg" });
  }

  onSubmit(f: NgForm) {
    this.dataService.add(f.value.status, f.value.title);
  }
}
