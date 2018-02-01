import { Component } from '@angular/core';

@Component({
    selector: 'my-login',
    template:`
        <h1>{{title}}</h1>
        <p><strong>- Welcome to Login Page -</strong></p>
        <a href="/dashboard">Login</a>
    `
})
export class LoginComponent {
    title = 'Log In';
}