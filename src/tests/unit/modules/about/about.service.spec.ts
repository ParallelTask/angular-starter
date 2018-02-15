import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Times, It, Mock } from '../../../../lib/test_framework/setup/extensions';
import { Fixture } from '../../../../lib/test_framework/fixture/fixture.core';
import { AboutService } from '../../../../app/modules/about/about.service';

describe('modules.about.about.service.spec', () => {

  // MOQ way of testing angular services
  it('should_return_two_customers_when_customers_two', () => {

    let _testData = Fixture.createStringMany();

    let _moqHttpClient =
      new Mock<HttpClient>()
        .setup(x => x.get(It.IsAny()))
        .returns(Fixture.createRxObservable<string[]>(_testData));

    let cut = new AboutService(_moqHttpClient.object());
    cut.getCustomerById(45).subscribe(data => {

      expect(data).toEqual(_testData);
      _moqHttpClient.verify(x => x.get('Customer/GetCustomerById/45'), Times.Exactly(1));
    });

  });

  // Angular way of testing services

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [AboutService],
  //     imports: [HttpClientTestingModule]
  //   });
  // });

  // it('should_get_exactly_two_customers',
  //   inject([AboutService, HttpTestingController],
  //     (aboutService: AboutService, httpMock: HttpTestingController) => {

  //       let dummy = ['hello', 'world'];
  //       let _data = null;

  //       let result = aboutService.getCustomerById(45).subscribe(data => {
  //         _data = data;
  //       });

  //       httpMock.expectOne({
  //         url: 'Customer/GetCustomerById/45',
  //         method: 'GET'
  //       }).flush(dummy, { status: 200, statusText: 'OK' });

  //       expect(_data).toBe(dummy);
  //     }
  //   )
  // );
});
