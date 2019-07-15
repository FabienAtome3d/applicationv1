import { Component } from '@angular/core';
import { Printer } from '../../models/printer/Printer';
import { PrintersService } from '../../services/printers.service';
import { ModalController } from 'ionic-angular';
import { SinglePrinterPage } from '../printers/single-printer/single-printer';

@Component({
    selector: 'page-printers',
    templateUrl: 'printers.html'
})

export class PrintersPage{
    printersList: Printer[];

    constructor(private modalCtrl: ModalController,
                private printersService: PrintersService){}

    ionViewWillEnter(){
        this.printersList = this.printersService.printersList.slice();
    }

    onLoadPrinter(index: number){
        let modal = this.modalCtrl.create(SinglePrinterPage, {index: index});
        modal.present();
    }
}