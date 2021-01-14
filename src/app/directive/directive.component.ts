import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  showSecret = false;
  log = [];
  constructor() {}
  ngOnInit(): void {}
  onToggleDetails(): void {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
