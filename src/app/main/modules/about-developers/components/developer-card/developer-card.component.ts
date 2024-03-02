import { Component, Input } from '@angular/core';
import { DeveloperLinkType } from 'src/app/shared/types/developer-link-type.type';
import { DeveloperType } from 'src/app/shared/types/developer-type.type';

@Component({
  selector: 'app-developer-card',
  templateUrl: './developer-card.component.html',
  styleUrls: ['./developer-card.component.scss']
})
export class DeveloperCardComponent {
  @Input()
  firstName!: string;

  @Input()
  lastName!: string;
  
  @Input()
  photoURL!: string;

  @Input()
  developerType!: DeveloperType;

  @Input()
  subtext?: string;

  @Input()
  role!: string;

  @Input()
  developerLinks : [DeveloperLinkType, string][];

  onLinkButtonClick(event : Event) {
    const target = event.currentTarget as HTMLButtonElement;
    const href : string | undefined = target.dataset['href'];
    
    if (!href) return;

    window.open(href, '_blank');
  }
}
