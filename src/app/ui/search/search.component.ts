import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: "app-search",
  templateUrl: "./search.component.html",
})
export class SearchComponent {
  q = "";
  @Output() search = new EventEmitter<string>();
  doSearch() {
    this.search.emit(this.q);
  }
}
