import {createAction, props} from '@ngrx/store';
import {User} from './model/user.model';



export const login = createAction(
  "[Login Page] User Login",
    props<{user: User}>()
);


export const logout = createAction(
  "[Top Menu] Logout"
);

/**
 * So right now, let's go ahead and define here a new action
 * creator, which is going to be called logout.
So this is going to allow us to create new logout actions.
Let's call here, create action and let's define here the action type.
So again, between square brackets, we are going to define the source of this action.
And again, it's very important that we don't reuse multiple actions in different parts of the application.
It's important instead to create different actions for different screens and components in the application
so that we can always easily track back the source using the information here inside the square brackets,
part of the action type.
So these logout action will only be issued here by the top menu and nothing more.
And here on the second part, we are going to simply report what has happened.
So the user has logged out.
So this is another example of an action, which is actually an event.
We are reporting something that a component knows that has happened locally.
This is also an example of an action that does not need any payload.
So we are not going to add here a props argument to create action.
So we now have here two different actions that are related
 */
