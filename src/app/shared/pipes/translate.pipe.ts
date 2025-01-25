import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) { }

  transform(key: string): Observable<string> | string {
    return this.translationService.translate(key);
    //return this.translationService.getLanguage().pipe(
    //  map(() => this.translationService.translate(key))
    //);
  }
}
