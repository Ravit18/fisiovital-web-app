import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment';
import { addDays, toIsoDate, weekWindowIndex } from '../../../../core/dates';
import { Slot } from '../../../../core/models/slot.model';
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

  it('counts Saturday and Monday in the same seven-day window when the window starts Friday', () => {
    const anchor = new Date(2026, 10, 6);
    expect(weekWindowIndex('2026-11-07T09:00:00', anchor)).toBe(0);
    expect(weekWindowIndex('2026-11-09T09:00:00', anchor)).toBe(0);
    expect(weekWindowIndex('2026-11-13T09:00:00', anchor)).toBe(1);
  });

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

  it('shows only dates with available slots as separate day columns', async () => {
    const fixture = TestBed.createComponent(SlotPicker);
    fixture.componentRef.setInput('physiotherapistId', 5);
    fixture.detectChanges();

    http.expectOne((req) => req.url === slotsUrl).flush({
      physiotherapistId: 5,
      from: '2030-03-04',
      to: '2030-03-10',
      slots: [
        { id: 9, startTime: '2030-03-05T09:00:00', endTime: '2030-03-05T10:00:00', status: 'FREE' },
        { id: 10, startTime: '2030-03-08T11:00:00', endTime: '2030-03-08T12:00:00', status: 'FREE' },
      ],
      nextAvailableWeek: null,
      message: null,
    });
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('.picker__day')).toHaveLength(2);
    expect(element.querySelectorAll('.picker__slots button')).toHaveLength(2);
  });

  it('allows deselecting a selected slot but blocks extra selections at the limit', async () => {
    const fixture = TestBed.createComponent(SlotPicker);
    fixture.componentRef.setInput('physiotherapistId', 5);
    fixture.componentRef.setInput('selectedSlotIds', [9]);
    fixture.componentRef.setInput('canSelectMore', false);
    fixture.detectChanges();

    http.expectOne((req) => req.url === slotsUrl).flush({
      physiotherapistId: 5,
      from: '2030-03-04',
      to: '2030-03-10',
      slots: [
        { id: 9, startTime: '2030-03-05T09:00:00', endTime: '2030-03-05T10:00:00', status: 'FREE' },
        { id: 10, startTime: '2030-03-05T10:00:00', endTime: '2030-03-05T11:00:00', status: 'FREE' },
      ],
      nextAvailableWeek: null,
      message: null,
    });
    await fixture.whenStable();

    const buttons = fixture.nativeElement.querySelectorAll('.picker__slots button') as NodeListOf<HTMLButtonElement>;
    expect(buttons[0].disabled).toBe(false);
    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
    expect(buttons[1].disabled).toBe(true);
  });

  it('blocks extra selections in a week but allows selections in another week', async () => {
    const firstDay = toIsoDate(addDays(new Date(), 1));
    const secondDay = toIsoDate(addDays(new Date(), 2));
    const thirdDay = toIsoDate(addDays(new Date(), 3));
    const nextWeekDay = toIsoDate(addDays(new Date(), 7));
    const first = { id: 9, startTime: `${firstDay}T09:00:00`, endTime: `${firstDay}T10:00:00`, status: 'FREE' };
    const second = { id: 10, startTime: `${secondDay}T11:00:00`, endTime: `${secondDay}T12:00:00`, status: 'FREE' };
    const sameWeek = { id: 11, startTime: `${thirdDay}T09:00:00`, endTime: `${thirdDay}T10:00:00`, status: 'FREE' };
    const nextWeek = { id: 12, startTime: `${nextWeekDay}T09:00:00`, endTime: `${nextWeekDay}T10:00:00`, status: 'FREE' };
    const fixture = TestBed.createComponent(SlotPicker);
    fixture.componentRef.setInput('physiotherapistId', 5);
    fixture.componentRef.setInput('selectedSlots', [first, second]);
    fixture.componentRef.setInput('selectedSlotIds', [first.id, second.id]);
    fixture.componentRef.setInput('weeklyLimit', 2);
    fixture.detectChanges();

    http.expectOne((req) => req.url === slotsUrl).flush({
      physiotherapistId: 5,
      from: toIsoDate(new Date()),
      to: toIsoDate(addDays(new Date(), 6)),
      slots: [first, second, sameWeek, nextWeek],
      nextAvailableWeek: null,
      message: null,
    });
    await fixture.whenStable();

    const buttons = fixture.nativeElement.querySelectorAll('.picker__slots button') as NodeListOf<HTMLButtonElement>;
    expect(buttons[0].disabled).toBe(false);
    expect(buttons[1].disabled).toBe(false);
    expect(buttons[2].disabled).toBe(true);
    expect(buttons[3].disabled).toBe(false);
  });
});
