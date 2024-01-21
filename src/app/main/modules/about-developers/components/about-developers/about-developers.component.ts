import { Component } from '@angular/core';

@Component({
  selector: 'app-about-developers',
  templateUrl: './about-developers.component.html',
  styleUrls: ['./about-developers.component.scss']
})
export class AboutDevelopersComponent {
  onLinkButtonClick(event : Event) {
    const target = event.currentTarget as HTMLButtonElement;
    const href : string | undefined = target.dataset['href'];
    
    if (!href) return;

    window.open(href, '_blank');
  }
}
