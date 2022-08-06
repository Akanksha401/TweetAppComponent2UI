import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { TweetappService } from './services/tweetapp.service';
import { UserLandingPageComponent } from './user/user-landing-page/user-landing-page.component';
import { PosttweetComponent } from './user/posttweet/posttweet.component';
import { SearchtweetComponent } from './user/searchtweet/searchtweet.component';
import { ViewtweetsComponent } from './user/viewtweets/viewtweets.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { CommonModule } from '@angular/common';
import { ForgotpasswordComponent } from './home/forgotpassword/forgotpassword.component';
import { RouterModule } from '@angular/router';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    UserLandingPageComponent,
    PosttweetComponent,
    SearchtweetComponent,
    ViewtweetsComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent,
    ViewprofileComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDpZtsdL9lyzq2ckaYwADjZ-Q7r3VVpf7w",
      authDomain: "tweetappui-9a223.firebaseapp.com",
      projectId: "tweetappui-9a223",
      storageBucket: "tweetappui-9a223.appspot.com",
      messagingSenderId: "549649591991",
      appId: "1:549649591991:web:9cbdc0730517c92d6ea732",
      measurementId: "G-VS93EJRWH5"
    })
  ],
  providers: [TweetappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
