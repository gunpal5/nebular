import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nb-card-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card-showcase.component.html',
})
export class NbCardShowcaseComponent {
}