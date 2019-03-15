/*
  Be sure to import in all of the action types from `../actions`
*/

import{
  FETCHING_SMURFS,
  ADDING_SMURF,
  DELETING_SMURF,
  UPDATING_SMURF,
  FETCHING_SMURFS_ERROR
} from './actions';


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
const initialState =
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 function reducer(state = initialState, action){
   console.log('reducer', action);
   switch (action.type){
     case FETCHING_SMURFS:
      return{
        ...state,

      }
      case ADDING_SMURF:
        return{
          ...state
        }
      case DELETING_SMURF:
        return{
          ...state
        }
      case UPDATING_SMURF:
        return{
          ...state
        }
      case FETCHING_SMURFS_ERROR:
        return{
          ...state
        }
      default:
        return state;
   }
 }

 export default reducer;


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
