import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { PrimeNG } from 'primeng/config';
import { Card } from 'primeng/card';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTextModule, ButtonModule, MessageModule, FormsModule, Card],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text = '';

  msg = '';

  onClick() {
    this.msg = 'Welcome ' + this.text;
  }

  loading: boolean = false;

    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }


}
