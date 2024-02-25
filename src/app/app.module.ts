import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/templates/menu/menu.component';
import { HomeComponent } from './views/home/home.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogArticle1Component } from './views/blog-article1/blog-article1.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { ElementParalaxAComponent } from './components/element-paralax-a/element-paralax-a.component';
import { ElementParalaxBComponent } from './components/element-paralax-b/element-paralax-b.component';
import { ElementParalaxCComponent } from './components/element-paralax-c/element-paralax-c.component';
import { EmailNewsLetterComponent } from './components/email-news-letter/email-news-letter.component';
import { MinisteriosComponent } from './views/ministerios/ministerios.component';
import { ResumeFaithChurchComponent } from './components/resume-faith-church/resume-faith-church.component';
import { EncontreJesusComponent } from './components/encontre-jesus/encontre-jesus.component';
import { FaleConoscoComponent } from './views/fale-conosco/fale-conosco.component';
import { FormularioMensagensComponent } from './components/formulario-mensagens/formulario-mensagens.component';
import { UpGlobalNavComponent } from './components/templates/up-global-nav/up-global-nav.component';
import { CellPhonePromoA1Component } from './components/cell-phone-promo-a1/cell-phone-promo-a1.component';
import { MusicFestivalComponent } from './components/music-festival/music-festival.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { PageLayout1Component } from './views/page-layout1/page-layout1.component';
import { NewsroomSection1Component } from './components/newsroom-section1/newsroom-section1.component';
import { NewsroomSection2Component } from './components/newsroom-section2/newsroom-section2.component';
import { UniversidadeComponent } from './views/universidade/universidade.component';
import { JesusComponent } from './views/jesus/jesus.component';
import { VisaoComponent } from './views/visao/visao.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BlogComponent,
    BlogArticle1Component,
    FooterComponent,
    ElementParalaxAComponent,
    ElementParalaxBComponent,
    ElementParalaxCComponent,
    EmailNewsLetterComponent,
    MinisteriosComponent,
    ResumeFaithChurchComponent,
    EncontreJesusComponent,
    FaleConoscoComponent,
    FormularioMensagensComponent,
    UpGlobalNavComponent,
    CellPhonePromoA1Component,
    MusicFestivalComponent,
    NoticiasComponent,
    PageLayout1Component,
    NewsroomSection1Component,
    NewsroomSection2Component,
    UniversidadeComponent,
    JesusComponent,
    VisaoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
