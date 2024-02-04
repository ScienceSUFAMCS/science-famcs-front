import { Component, Inject } from '@angular/core';
import { ExtraClass } from 'src/app/shared/interfaces/extra-class';
import { AdditionalClassesService } from 'src/app/shared/services/additional-classes.service';
import { TuiDialogContext, TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-additional-classes',
  templateUrl: './additional-classes.component.html',
  styleUrls: ['./additional-classes.component.scss'],
  providers: [AdditionalClassesService]
})
export class AdditionalClassesComponent {
  indexOfSubject = 0;
  defaultImage = 'https://teach.com/wp-content/uploads/sites/56/2021/07/8255_Hero.jpg';

  colors = [
    'var(--tui-support-01)',
    'var(--tui-support-11)',
    'var(--tui-support-09)',
    'var(--tui-support-19)',
    'var(--tui-support-17)'
  ]

  classes: ExtraClass[] = [];
  constructor(private additionalClassesService: AdditionalClassesService, @Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {
    this.classes = this.additionalClassesService.getData();
  }

  onClick(
    content: PolymorpheusContent<TuiDialogContext>,
    header: PolymorpheusContent,
    size: TuiDialogSize,
    index: number
  ): void {
    this.indexOfSubject = index;
    this.dialogs
      .open(content, {
        label: this.classes[index].subject,
        header,
        size,
      })
      .subscribe();
  }
}
