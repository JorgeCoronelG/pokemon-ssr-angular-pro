import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.title.setTitle('About Page');
    this.seoService.meta.updateTag({ name: 'description', content: 'Este es mi About Page' });
    this.seoService.meta.updateTag({ name: 'og:title', content: 'About Page' });
    this.seoService.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Jorge,Coronel,Curso,Angular,PRO' });
  }
}
