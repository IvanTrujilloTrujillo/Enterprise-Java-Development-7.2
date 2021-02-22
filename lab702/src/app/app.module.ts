import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeaturedPostComponent } from './featured-post/featured-post.component';
import { PostsComponent } from './posts/posts.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    NavBarComponent,
    FeaturedPostComponent,
    PostsComponent,
    PaginationComponent,
    FooterComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
