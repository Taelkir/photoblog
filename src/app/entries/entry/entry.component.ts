import { Component } from "@angular/core";

@Component ({
  selector: "app-entry",
  templateUrl: "entry.component.html",
  styleUrls: ["entry.component.css"]
})

export class EntryComponent {
  title: string = "My First Photo";
  photo: string = "http://placehold.it/800x500?text=A Placeholder Image";
  description: string = "A description of My First Photo";
  comments: any[] = [
    {name:"John", comment:"A comment"},
    {name:"Snake", comment:"A comment"},
    {name:"The Boss", comment:"A comment"},
  ]
}
