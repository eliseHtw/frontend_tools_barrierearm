import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent, NavComponent, RouterLink, RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'frontend_tools_start';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe((data: any) => {
      // Dynamischer Titel
      const pageTitle = data['title'] || 'Standard Titel';
      this.titleService.setTitle(pageTitle);
  
      // Skip-Link-Funktion
      setTimeout(() => {
        const skipLink = document.querySelector('.skip-link') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }, 50); 
    });
  }

  focusMainContent(event: Event) {
    event.preventDefault();
    setTimeout(() => {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus();
      }
    }, 50); 

    
  }
}
