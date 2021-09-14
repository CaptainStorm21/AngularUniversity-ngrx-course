import {createAction, props} from '@ngrx/store';
import {User} from './model/user.model';

/**
 * We are going to call it login.
 * And let's define here what looks like a new
 * action by calling the Create Action Indirects method.
 * So here we are going to specify a couple of arguments.
 * Only the first one is mandatory, which is the action
 * type now, as we did before here in the login
 * component, we could define here a unique string,
 * such as, for example, login action.
 */

export const login = createAction(
  /**
   * And let's define here what looks like a new action by calling
   * the Create Action Indirects method.
   * So here we are going to specify a couple of arguments.
   * Only the first one is mandatory, which is the action type now,
   * as we did before here in the login
   * component, we could define here a unique string, such as,
   * for example, login action.
   * Now, instead of doing this, we are going to define this
   * action type string by following a very specific
   * convention.
   * So first, at the beginning of the action type between
   * square brackets, we are going to define here
   * the source of the action in the application.
   * So we are going to define the place in the application
   * where the action is getting dispatched.
   * So this means that in general, we should not be dispatching
   * the same action in multiple different.
   * Screens and components of our application, for example,
   * this action should only be dispatched by the
   * login page and by no other part of the application.
   * So here between square brackets, we simply put login page,
   * which is the source of this action.
   * This is going to be very useful because later on we are going
   * to have an action log and we would like
   * to be able to identify just by looking at the action in our
   * action log where that action is coming from.
   */
  "[Login Page] User Login",
  /**
   * In all cases, we want to define that the login action as a payload,
   *  is a plain JavaScript object containing one single property name
   * the user, which is of type user,which is the value returned here
   * by the call to the login method.
So here in our action definition, we are going to add here a second argument, which is a call to the
utility function props from Engineering's.
So this function doesn't take any arguments, but it does take here one generic parameter.
So this generic parameter is the type of the payload associated to this action.
So as we have seen, the payload should be a plain JavaScript object containing one single property
and nothing more called user, which should be of type user
*/
    props<{user: User}>()
);

/**
 * Now, here is one important thing about this log in constant that we have just defined.
This is actually not the type definition for the user login action instead.
This is what is known as an action creator.
So login is not the definition of a class.
It's actually a function that we need to call in order to create a new login action.

const newLoginAction = login({})
*/



export const logout = createAction(
  "[Top Menu] Logout"
);
