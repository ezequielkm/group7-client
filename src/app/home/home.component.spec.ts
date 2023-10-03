import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { UserService } from 'app/_services';
import { Account } from 'app/_models/account';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: jasmine.SpyObj<UserService>;

   // Mock localStorage
   const mockLocalStorage = {
    getItem: (key: string) => {
      if (key === 'user') {
        return JSON.stringify({ account: { username: 'testUser' } });
      }
      return null;
    },
  };

  beforeEach(() => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getAll', 'delete', 'getUser', 'edit', 'create']);

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: UserService, useValue: userServiceSpy },
        { provide: Storage, useValue: mockLocalStorage },],
      imports: [HttpClientModule,
                Account,
                UserService,
                
              ]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    fixture.detectChanges();
  }); 

  it('should create the HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on ngOnInit', () => {
    const users: Account[] = [{ user_id: 1, username: 'user1' }];
    userService.getAll.and.returnValue(of(users));

    component.ngOnInit();

    expect(userService.getAll).toHaveBeenCalled();
    expect(component.users).toEqual(users);
    expect(component.loading).toBe(false);
  });

  it('should add and remove users from deleteUsers array', () => {
    const user1: Account = { user_id: 1, username: 'user1' };
    const user2: Account = { user_id: 2, username: 'user2' };

    component.checkUser({ currentTarget: { checked: true } }, user1);
    expect(component.deleteUsers).toContain(user1);

    component.checkUser({ currentTarget: { checked: false } }, user1);
    expect(component.deleteUsers).not.toContain(user1);

    component.checkUser({ currentTarget: { checked: true } }, user2);
    expect(component.deleteUsers).toContain(user2);
  });

  it('should delete accounts', () => {
    const user1: Account = { user_id: 1, username: 'user1' };
    const user2: Account = { user_id: 2, username: 'user2' };

    component.deleteUsers = [user1, user2];
    spyOn(window, 'confirm').and.returnValue(true);
    userService.delete.and.returnValue(of({ status: 200 }));

    component.deleteAccounts();

    expect(userService.delete).toHaveBeenCalledTimes(2);
  });

  // You can write similar tests for other methods such as onRightClick, saveAccount, createAccount, closeAccount, and editAccount.
});