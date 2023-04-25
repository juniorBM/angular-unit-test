import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LikeWidgetComponent} from './like-widget.component';
import {LikeWidgetModule} from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    // const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should auto generate ID during ngOnInit when (@Input id) is not assigned', () => {
    // const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('should not auto generate ID during ngOnInit when (@Input id) is assigned', () => {
    // const component = fixture.componentInstance;
    const someId = 'someId';
    component.id = 'someId';
    fixture.detectChanges();

    expect(component.id).toBe(someId);
  })

  // it(`#${LikeWidgetComponent.prototype.like.name} should trigger  when called`, done => {
  //   fixture.detectChanges();
  //
  //   component.liked.subscribe(() => {
  //     expect(true).toBeTrue();
  //     done();
  //   });
  //   component.like();
  // });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked)  when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
