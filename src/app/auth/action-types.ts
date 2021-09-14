/**
 * So we are going to go here to the authentication module
 * and we are going to define here a new file that
 * we are going to call simply action types dots.
 * So inside this file, we are going to import everything that is
 * defined here in the authentication actions
file.
*/

import * as AuthActions from './auth.actions';
export { AuthActions };

/**
 * So if I use here authentication actions locally, I'm going to have access here via auto completion
to the login logout and any other action created that would be available inside the of vindication actions
file.
So I'm now going to take off actions and I'm going to re-export it here in this file.
Let's just re-export of actions.
And with this simple typescript trick, we now have a convenient way elsewhere on the application to
access all the authentication actions.
For example, let's say by some reason we would like to access all the actions here.
We could do so by importing authentication actions and again, via auto completion.
We have here a full list of authentication actions.
So a very useful trick for grouping related actions together.
 */
