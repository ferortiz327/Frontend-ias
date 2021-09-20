import { TestBed } from '@angular/core/testing';

import { TecnicoService } from '../Service/Tecnico.service';

describe('ServicioService', () => {
  let service: TecnicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
