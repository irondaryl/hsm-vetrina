import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation';

@Pipe({
  name: 't',
  pure: false, // così si aggiorna quando cambi lingua
})
export class TranslatePipe implements PipeTransform {
  constructor(private i18n: TranslationService) {}

  transform(key: string): string {
    if (!key) return '';
    return this.i18n.translate(key);
  }
}
