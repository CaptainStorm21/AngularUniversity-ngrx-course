import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Store} from "@ngrx/store";

import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";
import { AppState } from '../../reducers';
import { login } from '../auth.actions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
      private auth: AuthService,
      private router:Router) {

      this.form = fb.group({
          email: ['test@angular-university.io', [Validators.required]],
          password: ['test', [Validators.required]]
      });

  }

  ngOnInit() {

  }

  login() {


      const val = this.form.value;

      this.auth.login(val.email, val.password)
          .pipe(
              tap(user => {
                console.log(user);
                /**
                 * Now, what is the benefit of using this particular
                 * API based on the dispatching of action objects when
                 * compared to a more common API, such as, for example,
                 * a grid like API, where we will have here at
                 * the level of the store methods such as update,
                 * create or delete?
Well, this creates a level of indirection here by dispatching actions, we are not explicitly telling
the store how to modify the data.
We are either communicating to the store an event that we know that has happened here at the level of
the component, or we are issuing an explicit command.
But it's the store that is going to decide what to do with the action and how it's going to modify its
internal state.
The store might, for example, do a request to the server and fetch some extra information about the

user and add it here to the user profile in order to build a more complete profile.

The store might do several things with the action.

This component, the login component that is dispatching the action, only knows about the content of

the action, but it does not know what the store is going to do with the action.

This level of interaction is important because this ensures that the login component is not going to

get tightly coupled to other parts of the application.
So it's important that the login component remains and aware of the course card list of the course dialog
and of the course screens.
These are completely separate components that also interact with the store by dispatching actions to
it.

                 */
                // now the store is receiving user profile
                this.store.dispatch(login ({ user }));
                  this.router.navigateByUrl('/courses');
              })
          )
          .subscribe(
              noop,
              () => alert('Login Failed')
          );

  }

}

/**
 * If we want to make sure that if multiple login actions are
 * being created throughout the application
 * at different places, that they all share the
same type of action type and payload.
So in order to ensure that we are going to
adhere to our authentication module and new
file, we are going to add here a file that
is going to contain all our authentication actions.
Let's define them here, a new file and we are
going to call it of dot actions dots inside this file.
 */
