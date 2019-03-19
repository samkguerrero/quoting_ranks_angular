import { AuthorsComponent } from './authors/authors.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { AuthorquotesComponent } from './authorquotes/authorquotes.component';
import { NewquoteComponent } from './newquote/newquote.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', component: AuthorsComponent },
    {path: 'new', component: NewauthorComponent },
    {path: 'edit/:id', component: EditauthorComponent },
    {path: 'quotes/:id', component: AuthorquotesComponent },
    {path: 'write/:id', component: NewquoteComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }