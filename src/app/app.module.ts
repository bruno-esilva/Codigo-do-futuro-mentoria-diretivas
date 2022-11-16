import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { TabelaComponent } from './paginas/tabela/tabela.component';
import { CpfPipe } from './tabela/pipe/cpf.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    TabelaComponent,
    CpfPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
