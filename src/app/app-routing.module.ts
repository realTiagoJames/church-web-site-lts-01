import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogArticle1Component } from './views/blog-article1/blog-article1.component';
import { MinisteriosComponent } from './views/ministerios/ministerios.component';
import { FaleConoscoComponent } from './views/fale-conosco/fale-conosco.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { UniversidadeComponent } from './views/universidade/universidade.component';
import { JesusComponent } from './views/jesus/jesus.component';
import { VisaoComponent } from './views/visao/visao.component';

const routes: Routes = [

  { path:'', component: HomeComponent  },
  { path:'blog', component: BlogComponent  },
  { path:'article-1', component: BlogArticle1Component  },
  { path:'ministerios', component: MinisteriosComponent  },
  { path:'fale-conosco', component: FaleConoscoComponent  },
  { path: 'noticias',     component: NoticiasComponent  },
  { path: 'universidade',     component: UniversidadeComponent  },
  { path: 'jesus',     component: JesusComponent  },
  { path: 'visão',     component: VisaoComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
