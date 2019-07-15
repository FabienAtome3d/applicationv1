import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-single-printer',
    templateUrl: 'single-printer.html'
})

export class SinglerPrinterPage implements OnInit {
    name: string;
    constructor(public navParams: NavParams){}

    ngOnInit(){
        this.name = this.navParams.get('printerName');
    }
}