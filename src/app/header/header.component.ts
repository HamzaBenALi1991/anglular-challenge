import { Component, OnInit } from "@angular/core";

@Component({
    selector:'.app-header',
    template :`
    <app-servers></app-servers>
    <p>yess it works again</p>
    `,
    styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor() {}

    ngOnInit() : void {}
}