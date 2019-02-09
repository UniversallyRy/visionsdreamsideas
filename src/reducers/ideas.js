import uuid from 'uuid';
import moment from 'moment';
import {
    ADD_IDEA,
    DELETE_IDEA,
    EDIT_IDEA,
    SAVE_EDITED_IDEA,
    CANCEL_EDIT_IDEA,
} from "../constants/actionTypes";

const initialState = {
    items: [{
        text: `Lorem ipsum dolor sit amet, sale novum diceret ex vel, mea cu dicit honestatis. 
        Ius solet laudem eu, ea usu ludus suavitate, usu et tamquam dolorum voluptatum. 
        Ex eum tollit atomorum signiferumque, mea dolore propriae an. Per id vidisse persecuti, 
        id duis adipiscing mei.`,
        time: `${moment().subtract(1, 'days').format('MMMM Do YYYY')}`,
        id: uuid(),
        isOpen: false,
    },
    {
        text: `Ad vel exerci indoctum. Saperet menandri vim ut, voluptatum incorrupte nec et, 
        quando tincidunt intellegebat est cu. Mel ei mucius aliquam prodesset. Prompta indoctum 
        duo at, affert ridens in nam, eu fierent voluptatum adversarium mea. Modus affert dicunt
         at cum, cu per solet copiosae. Putant epicuri sensibus pri te. 
         Accusata perpetua pericula usu ei, illud discere gloriatur an est.`,
        time: `${moment().subtract(2, 'days').format('MMMM Do YYYY')}`,
        id: uuid(),
        isOpen: false,
    },
    {
        text: `Has an tractatos expetenda efficiantur, dicta facilisi senserit vis et,
         ut vivendum inciderint mel. Omnes dissentias voluptatibus cu mel, modo doming mea et,
          cu veritus electram his. Electram moderatius disputationi duo ea, in vis clita melius
           persecuti, eos ea eripuit disputationi. Quot movet deterruisset at vis, eu vis iudico
            numquam fierent.`,
        time: `${moment().subtract(3, 'days').format('MMMM Do YYYY')}`,    
        id: uuid(),
        isOpen: false,
    }
    ],
};

// const INIT_STATE = {
//     items: [],
// }

const ideaReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_IDEA:
            {
                const id = uuid();
                const ideaItem = {
                    text: action.text,
                    time: moment().format('MMMM Do YYYY'),
                    id,
                    isOpen: false,
                };
                return {
                    ...state,
                    items: [...state.items, ideaItem]
                }
            }

        case DELETE_IDEA:
            {
                const items = state.items.filter(({
                    id
                }) => id !== action.id);
                return {
                    ...state,
                    items
                };
            }

        case EDIT_IDEA:
            {
                const item = state.items.find(({
                    id
                }) => id === action.id);
                return {
                    ...state,
                    editingIdea: item
                };
            }

        case SAVE_EDITED_IDEA:
            {
                const items = state.items.map(item => {
                    if (item.id === action.modifiedIdea.id) {
                        item.text = action.modifiedIdea.text;
                    }

                    return item;
                });

                return {
                    ...state,
                    items,
                    editingIdea: {}
                };
            }

        case CANCEL_EDIT_IDEA:
            {
                const newState = state.items.length ? {
                    ...state,
                    editingIdea: {}
                } : {
                        ...state
                    };
                return newState;
            }

        default:
            {
                return state;
            }
    }
};

export default ideaReducer;