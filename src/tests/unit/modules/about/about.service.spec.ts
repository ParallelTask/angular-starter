import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Moq, Times, It } from '../../../moq/moq.core';
import { Fixture } from '../../../fixture/fixture.core';
import { AboutService } from '../../../../app/modules/about/about.service';

describe('modules.about.about.service.spec', () => {

  // MOQ way of testing angular services
  it('should_return_two_customers_when_customers_two', () => {

    let _moqHttpClient = Moq.create<HttpClient>(HttpClient);
    let _testData = Fixture.createStringMany();

    _moqHttpClient
      .setup(x => x.get(It.isAny(String)))
      .returns(Fixture.createRxObservable<string[]>(_testData));

    let cut = new AboutService(_moqHttpClient.object);
    cut.getCustomerById(45).subscribe(data => {

      let verify = _moqHttpClient.verify(x => x.get('Customer/GetCustomerById/45'), Times.exact(1));

      expect(verify).toBeTruthy('Customer/GetCustomerById/ not invoked');
      expect(data).toEqual(_testData);
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
