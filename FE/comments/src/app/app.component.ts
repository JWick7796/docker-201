import { CommentsService } from "./comments.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "comments";
  myForm: FormGroup;
  comments: Comment[];

  constructor(private fb: FormBuilder, private service: CommentsService) {}
  ngOnInit(): void {
    this.myForm = this.fb.group({
      comment: "",
      userName: "",
    });

    this.service.getComments().subscribe((data) => {
      this.comments = data;
    });
  }

  submit() {
    console.log(this.myForm.value);
    this.comments.push(this.myForm.value);
    this.service.saveComments(this.myForm.value).subscribe();
    this.myForm.reset();
  }
}
