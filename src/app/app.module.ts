import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getStorage, provideStorage} from '@angular/fire/storage';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component';
import {FormsModule} from '@angular/forms';
import {LibrosComponent} from './libros/libros.component'
import {LibroComponent} from './libro/libro.component'
import {environment} from '@src/environments/environment'

@NgModule({
  // Pasar componentes web que quiero desplegar en el html
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent
  ],
  // Módulos o directivas que se usarán en el proyecto
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    provideFirebaseApp(() => initializeApp(environment.firebase.config) ),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth() ),

    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule

  ],
  // Servicios que se van a incluir en el proyecto
  providers: [],
  // Cuál es el componente principal de la aplicación
  bootstrap: [AppComponent]
})
export class AppModule { }
