import mongoose from 'mongoose';
import config from './config';

export default callback => {
  let db = mongoose.connect('mongodb://localhost:27017/restaurant-api');
    callback(db);
}
