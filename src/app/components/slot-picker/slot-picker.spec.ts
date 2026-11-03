import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { Slot } from '../../model/slot.entity';
import { SlotPicker } from './slot-picker';

const slotsUrl = `${environment.apiBaseUrl}/physiotherapists/5/slots`;

describe('SlotPicker (US06)', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      imports: [SlotPicker],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideTranslateService()],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('jumps to the week the backend proposes and emits the picked slot', async () => {
    const fixture = TestBed.createComponent(SlotPicker);
    fixture.componentRef.setInput('physiotherapistId', 5);
    let picked: Slot | undefined;
    fixture.componentInstance.picked.subscribe((slot) => (picked = slot));
    fixture.detectChanges();

    http.expectOne((req) => req.url === slotsUrl).flush({
      physiotherapistId: 5,
      from: '2030-03-04',
      to: '2030-03-10',
      slots: [{ id: 9, startTime: '2030-03-05T09:00:00', endTime: '2030-03-05T10:00:00', status: 'FREE' }],
      nextAvailableWeek: '2030-03-04',
      message: 'No hay horarios esta semana; te mostramos la siguiente semana disponible',
    });
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('siguiente semana disponible');
    (element.querySelector('.picker__slots button') as HTMLButtonElement).click();
    expect(picked?.id).toBe(9);
  });

  it('does not let the user pick when it is not selectable', async () => {
    const fixture = TestBed.createComponent(SlotPicker);
    fixture.componentRef.setInput('physiotherapistId', 5);
    fixture.componentRef.setInput('selectable', false);
    fixture.detectChanges();
    http.expectOne((req) => req.url === slotsUrl).flush({
      physiotherapistId: 5,
      from: '',
      to: '',
      slots: [{ id: 9, startTime: '2030-03-05T09:00:00', endTime: '2030-03-05T10:00:00', status: 'FREE' }],
      nextAvailableWeek: null,
      message: null,
    });
    await fixture.whenStable();

    expect((fixture.nativeElement.querySelector('.picker__slots button') as HTMLButtonElement).disabled).toBe(true);
  });
});
