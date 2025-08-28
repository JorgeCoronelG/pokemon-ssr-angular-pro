import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
  private seoService = inject(SeoService);
  // private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    /*if (isPlatformBrowser(this.platform)) {
      document.title = 'Pricing Page';
    }*/

    this.seoService.title.setTitle('Pricing Page');
    this.seoService.meta.updateTag({ name: 'description', content: 'Este es mi Pricing Page' });
    this.seoService.meta.updateTag({ name: 'og:title', content: 'Pricing Page' });
    this.seoService.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Jorge,Coronel,Curso,Angular,PRO' });
  }
}
