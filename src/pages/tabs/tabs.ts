/* déclaration des onglets de navigation pour le menu en bas de l'application */
import { Component } from '@angular/core';
import { UsersPage } from '../users/users';
import { PrintersPage } from '../printers/printers';
import { ResinsPage } from '../resins/resins';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})

export class TabsPage{
    usersPage = UsersPage;
    printersPage = PrintersPage;
    resinsPage = ResinsPage;
}