import { TestBed } from '@angular/core/testing';

import { ObtenerInfoService } from './obtener-info.service';

describe('ObtenerInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerInfoService = TestBed.get(ObtenerInfoService);
    expect(service).toBeTruthy();
  });
});
