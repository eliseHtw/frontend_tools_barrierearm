import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KisteComponent } from './kiste/kiste.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, data:{title: 'Startseite von * Tools* - die Ausleihkiste'} },
    { path: 'kiste', component: KisteComponent, data: {title: 'Ausleihkiste - Übersicht über verfügbare * Tools * - die Ausleihkiste'} },
    { path: 'edit', component: EditComponent, data: {title: 'Kiste bearbeiten - editieren von * Tools * - die Ausleihkiste'} },
    { path: 'login', component: LoginComponent, data: {title: 'Login - Einloggen als Benutzer*in * Tools * - die Ausleihkiste'} },
    { path: 'register', component: RegisterComponent, data: {title: 'Registrieren als Benutzer*in für * Tools * - die Ausleihkiste'} },
    { path: 'update/:id', component: UpdateComponent, data: {title: 'Ändern von Einträgen in * Tools * - die Ausleihkiste'} },
    { path: 'create', component: CreateComponent, data: {title: 'neue Kiste erstellen für * Tools * - die Ausleihkiste'} }
];
