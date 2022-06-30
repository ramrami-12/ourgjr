import { configureStore } from '@reduxjs/toolkit';
import { setMode } from './reducers';

const display = configureStore({reducer: setMode});
export default display
