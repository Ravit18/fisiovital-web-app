import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { AuthenticatedUser } from '../../../core/models/authenticated-user.model';
import { PatientHistory } from './patient-history';

const historyUrl = `${environment.apiBaseUrl}/appointments/physiotherapist/me`;
const notesUrl = `${environment.apiBaseUrl}/patients/5/clinical-notes`;
const physiotherapist: AuthenticatedUser = {
  userId: 2,
  profileId: 2,
  email: 'physio@example.com',
  role: 'PHYSIOTHERAPIST',
  fullName: 'Mariana Rojas',
  token: 'test-token',
};

describe('PatientHistory (US15/US16)', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    localStorage.setItem('fisiovital.session', JSON.stringify(physiotherapist));
    TestBed.configureTestingModule({
      imports: [PatientHistory],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([{ path: 'patients', component: PatientHistory }]), provideTranslateService()],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    localStorage.clear();
  });

  it('loads every appointment and lets the physiotherapist search by patient', async () => {
    const fixture = TestBed.createComponent(PatientHistory);
    fixture.detectChanges();
    const all = http.expectOne((req) => req.url === historyUrl);
    expect(all.request.params.has('patientName')).toBe(false);
    all.flush({ appointments: [], message: null });
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.dashboard-nav a[href="/physiotherapist/agenda"]')).toBeTruthy();
    expect(element.querySelector('.dashboard-nav a[aria-current="page"]')?.getAttribute('href')).toBe('/physiotherapist/patients');
    const input = element.querySelector('input') as HTMLInputElement;
    expect(input).toBeTruthy();
    input.value = 'Pedro Ruiz';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();
    (element.querySelector('button[type="submit"]') as HTMLButtonElement).click();
    fixture.detectChanges();

    const filtered = http.expectOne((req) => req.url === historyUrl);
    expect(filtered.request.params.get('patientName')).toBe('Pedro Ruiz');
    filtered.flush({ appointments: [], message: 'No se encontró al paciente' });
    await fixture.whenStable();
    fixture.detectChanges();

    expect(element.textContent).toContain('No se encontró al paciente');
    expect(element.querySelector('input')).toBeTruthy();
    (element.querySelector('.patient-search button[type="button"]') as HTMLButtonElement).click();
    const allAgain = http.expectOne((req) => req.url === historyUrl);
    expect(allAgain.request.params.has('patientName')).toBe(false);
    allAgain.flush({ appointments: [], message: null });
    await fixture.whenStable();
    fixture.detectChanges();
    expect(element.querySelector('input')).toBeTruthy();
  });

  it('renders real appointments newest first with their session and status', async () => {
    const fixture = TestBed.createComponent(PatientHistory);
    fixture.detectChanges();
    http.expectOne((req) => req.url === historyUrl).flush({
      appointments: [
        {
          sessionId: 11,
          sessionNumber: 2,
          totalSessions: 12,
          status: 'COMPLETED',
          startTime: '2026-10-15T16:00:00',
          endTime: '2026-10-15T17:00:00',
          patientId: 5,
          patientName: 'Carlos Mendoza',
          physiotherapistId: 2,
          physiotherapistName: 'Mariana Rojas',
          specialty: 'DEPORTIVA',
          diagnosis: 'Lesión muscular',
        },
        {
          sessionId: 12,
          sessionNumber: 3,
          totalSessions: 12,
          status: 'RESERVED',
          startTime: '2026-10-19T08:00:00',
          endTime: '2026-10-19T09:00:00',
          patientId: 5,
          patientName: 'Carlos Mendoza',
          physiotherapistId: 2,
          physiotherapistName: 'Mariana Rojas',
          specialty: 'DEPORTIVA',
          diagnosis: 'Lesión muscular',
        },
      ],
      message: null,
    });
    await fixture.whenStable();
    fixture.detectChanges();

    const rows = (fixture.nativeElement as HTMLElement).querySelectorAll('tbody tr');
    expect(rows).toHaveLength(2);
    expect(rows[0].textContent).toContain('19/10/2026');
    expect(rows[0].textContent).toContain('Carlos Mendoza');
    expect(rows[0].textContent).toContain('appointments.session');
    expect(rows[1].textContent).toContain('15/10/2026');
    expect((fixture.nativeElement as HTMLElement).querySelector('.history-table')).toBeTruthy();
  });

  it('opens the patient record from the table with treatments grouped by diagnosis (US16)', async () => {
    const session = (id: number, status: string, startTime: string, diagnosis: string, total: number) => ({
      sessionId: id,
      sessionNumber: 1,
      totalSessions: total,
      status,
      startTime,
      endTime: startTime.replace(/T(\d{2})/, (_, hour) => `T${String(Number(hour) + 1).padStart(2, '0')}`),
      patientId: 5,
      patientName: 'Carlos Mendoza',
      physiotherapistId: 2,
      physiotherapistName: 'Mariana Rojas',
      specialty: 'DEPORTIVA',
      diagnosis,
    });
    const nextYear = new Date().getFullYear() + 1;
    const sessions = [
      session(4, 'RESERVED', `${nextYear}-01-10T09:00:00`, 'Esguince de tobillo', 4),
      session(3, 'CANCELLED', '2026-10-12T09:00:00', 'Esguince de tobillo', 4),
      session(2, 'COMPLETED', '2026-10-08T09:00:00', 'Esguince de tobillo', 4),
      session(1, 'COMPLETED', '2026-09-20T10:00:00', 'Lumbalgia', 2),
    ];

    const fixture = TestBed.createComponent(PatientHistory);
    fixture.detectChanges();
    http.expectOne((req) => req.url === historyUrl).flush({ appointments: sessions, message: null });
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.patient-record')).toBeNull();
    (element.querySelector('.patient-link') as HTMLButtonElement).click();

    const filtered = http.expectOne((req) => req.url === historyUrl);
    expect(filtered.request.params.get('patientName')).toBe('Carlos Mendoza');
    filtered.flush({ appointments: sessions, message: null });
    http.expectOne(notesUrl).flush([]);
    await fixture.whenStable();
    fixture.detectChanges();

    const record = element.querySelector('.patient-record')!;
    expect(record.querySelector('.clinical-history')?.textContent).toContain('appointments.record.noNotes');
    expect(record.querySelector('h2')?.textContent).toContain('Carlos Mendoza');
    const stats = [...record.querySelectorAll('.patient-record__stats dd')].map((dd) => dd.textContent?.trim());
    expect(stats.slice(0, 3)).toEqual(['2', '1', '1']);
    expect(stats[3]).toContain(`10/01/${nextYear}`);
    const treatments = record.querySelectorAll('.treatment');
    expect(treatments).toHaveLength(2);
    expect(treatments[0].textContent).toContain('Esguince de tobillo');
    expect(treatments[0].querySelector('.treatment__bar')?.getAttribute('aria-valuenow')).toBe('1');
    expect(treatments[1].querySelector('.treatment__bar')?.getAttribute('aria-valuemax')).toBe('2');
    expect(element.querySelectorAll('tbody tr')).toHaveLength(4);
  });

  describe('clinical history', () => {
    const carlosSession = {
      sessionId: 40,
      sessionNumber: 1,
      totalSessions: 6,
      status: 'RESERVED',
      startTime: `${new Date().getFullYear() + 1}-02-10T09:00:00`,
      endTime: `${new Date().getFullYear() + 1}-02-10T10:00:00`,
      patientId: 5,
      patientName: 'Carlos Mendoza',
      physiotherapistId: 2,
      physiotherapistName: 'Mariana Rojas',
      specialty: 'DEPORTIVA',
      diagnosis: 'Esguince de tobillo',
    };
    const previousNote = {
      id: 1,
      patientId: 5,
      physiotherapistId: 2,
      physiotherapistName: 'Mariana Rojas',
      text: 'El paciente cuenta con una resonancia magnética.',
      createdAt: '2026-11-01T10:00:00',
      sessionId: null,
      sessionNumber: null,
      sessionStartTime: null,
    };

    /** Opens /patients?patient=Carlos Mendoza, as the Panel and the Agenda links do. */
    async function openFromLink() {
      const harness = await RouterTestingHarness.create();
      await harness.navigateByUrl('/patients?patient=Carlos%20Mendoza', PatientHistory);
      const history = http.expectOne((req) => req.url === historyUrl);
      expect(history.request.params.get('patientName')).toBe('Carlos Mendoza');
      history.flush({ appointments: [carlosSession], message: null });
      http.expectOne(notesUrl).flush([previousNote]);
      await harness.fixture.whenStable();
      harness.fixture.detectChanges();
      return { harness, element: harness.routeNativeElement as HTMLElement };
    }

    function typeNote(element: HTMLElement, text: string) {
      const textarea = element.querySelector('.clinical-history__form textarea') as HTMLTextAreaElement;
      textarea.value = text;
      textarea.dispatchEvent(new Event('input'));
    }

    it('opens the record from the Panel/Agenda link and saves a new note on top', async () => {
      const { harness, element } = await openFromLink();

      expect((element.querySelector('.patient-search input') as HTMLInputElement).value).toBe('Carlos Mendoza');
      expect(element.querySelector('.clinical-history__latest')?.textContent).toContain('cuenta con una resonancia');
      const submit = element.querySelector('.clinical-history__form button[type="submit"]') as HTMLButtonElement;
      expect(submit.disabled).toBe(true);

      typeNote(element, '  Se encontró inflamación leve en el tobillo.  ');
      harness.fixture.detectChanges();
      expect(submit.disabled).toBe(false);
      submit.click();

      const save = http.expectOne(notesUrl);
      expect(save.request.method).toBe('POST');
      // The only session is in the future, so the note is a general one by default.
      expect(save.request.body).toEqual({ sessionId: null, text: 'Se encontró inflamación leve en el tobillo.' });
      save.flush({ ...previousNote, id: 2, text: 'Se encontró inflamación leve en el tobillo.', createdAt: '2026-11-06T09:00:00' });
      await harness.fixture.whenStable();
      harness.fixture.detectChanges();

      const notes = [...element.querySelectorAll('.clinical-note__text')].map((note) => note.textContent?.trim());
      expect(notes).toEqual(['Se encontró inflamación leve en el tobillo.', previousNote.text]);
      expect(element.querySelector('.clinical-history__latest')?.textContent).toContain('inflamación leve');
      expect((element.querySelector('.clinical-history__form textarea') as HTMLTextAreaElement).value).toBe('');
    });

    it('keeps the note and shows the backend message when it cannot be saved', async () => {
      const { harness, element } = await openFromLink();

      typeNote(element, 'Nota de prueba');
      harness.fixture.detectChanges();
      (element.querySelector('.clinical-history__form button[type="submit"]') as HTMLButtonElement).click();
      http
        .expectOne(notesUrl)
        .flush(
          { status: 403, message: 'Solo puedes ver o escribir la historia clínica de pacientes que tratas', details: [] },
          { status: 403, statusText: 'Forbidden' },
        );
      await harness.fixture.whenStable();
      harness.fixture.detectChanges();

      expect(element.querySelector('.clinical-history__form [role="alert"]')?.textContent).toContain('pacientes que tratas');
      expect((element.querySelector('.clinical-history__form textarea') as HTMLTextAreaElement).value).toBe('Nota de prueba');
      expect(element.querySelectorAll('.clinical-note')).toHaveLength(1);
    });

    it('links notes to the latest past session and shows the progress of each session in the table', async () => {
      const pastSession = {
        ...carlosSession,
        sessionId: 41,
        status: 'COMPLETED',
        startTime: '2026-10-20T09:00:00',
        endTime: '2026-10-20T10:00:00',
      };
      const evolutionNote = {
        ...previousNote,
        id: 7,
        text: 'Disminuyó el dolor al caminar.',
        sessionId: 41,
        sessionNumber: 1,
        sessionStartTime: '2026-10-20T09:00:00',
      };
      const harness = await RouterTestingHarness.create();
      await harness.navigateByUrl('/patients?patient=Carlos%20Mendoza', PatientHistory);
      http.expectOne((req) => req.url === historyUrl).flush({ appointments: [carlosSession, pastSession], message: null });
      http.expectOne(notesUrl).flush([evolutionNote, previousNote]);
      await harness.fixture.whenStable();
      harness.fixture.detectChanges();
      const element = harness.routeNativeElement as HTMLElement;

      // Progress column: the past session shows its note, the upcoming one has none yet.
      expect(element.querySelectorAll('thead th')).toHaveLength(5);
      const rows = element.querySelectorAll('tbody tr');
      expect(rows[0].querySelector('.evolution-cell')?.textContent).toContain('appointments.record.noEvolution');
      expect(rows[1].querySelector('.evolution-cell')?.textContent).toContain('Disminuyó el dolor al caminar.');
      expect(element.querySelector('.clinical-note__tag')?.textContent).toContain('appointments.record.sessionTag');
      expect(element.querySelector('.clinical-note__tag--general')).toBeTruthy();

      // Only sessions that already happened can get a progress note; the upcoming one is not offered.
      const page = harness.routeDebugElement!.componentInstance as { noteSessions: () => { sessionId: number }[] };
      expect(page.noteSessions().map((session) => session.sessionId)).toEqual([41]);

      // By default the new note belongs to the latest session that already happened.
      typeNote(element, 'Completa los ejercicios sin dolor.');
      harness.fixture.detectChanges();
      (element.querySelector('.clinical-history__form button[type="submit"]') as HTMLButtonElement).click();
      const save = http.expectOne(notesUrl);
      expect(save.request.body).toEqual({ sessionId: 41, text: 'Completa los ejercicios sin dolor.' });
      save.flush({ ...evolutionNote, id: 8, text: 'Completa los ejercicios sin dolor.' });
      await harness.fixture.whenStable();
      harness.fixture.detectChanges();
      expect(element.querySelectorAll('tbody tr')[1].querySelectorAll('.evolution-note')).toHaveLength(2);
    });
  });
});
