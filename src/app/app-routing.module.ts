import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SelecaoServicoComponent } from './selecao-servico/selecao-servico.component';
import { SolicitarDocumentosComponent } from './solicitar-documentos/solicitar-documentos.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: ForgotpasswordComponent,
    path: 'forgotpassword',
  },
  {
    component: SelecaoServicoComponent,
    path: 'selecao-servico',
  },
  {
    component: SolicitarDocumentosComponent,
    path: 'solicitar-documentos',
  },
  {
    //Deixar por último
    //Redireciona path '/' para '/home'
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
