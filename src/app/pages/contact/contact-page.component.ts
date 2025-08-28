import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.title.setTitle('Contact Page');
    this.seoService.meta.updateTag({ name: 'description', content: 'Este es mi Contact Page' });
    this.seoService.meta.updateTag({ name: 'og:title', content: 'Contact Page' });
    this.seoService.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Jorge,Coronel,Curso,Angular,PRO' });
  }
}
