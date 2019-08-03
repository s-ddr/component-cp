var mongoose = require('mongoose');
mongoose.connect('MONGOURI', { useNewUrlParser: true })
  .then(() => console.log('connected to mongo'))
  .catch(() => console.log('err'));

const chairSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    collection_id: { type: Number, required: true},
    url: { type: String, required: true },
    max_price: { type: Number, required: true },
    min_price: { type: Number, required: true },
    limited_offer: { type: Boolean, required: true },
    on_sale: { type: Boolean, required: true }
  }
);

const Chair = mongoose.model('Chair', chairSchema);

module.exports = Chair