import api from '../services/api';

class ItemsController {
  async index(req, res) {
    const author = {
      name: 'Alexia',
      lastname: 'Kattah',
    };

    const { id } = req.params;

    const [product, description] = await Promise.all([
      api.get(`/items/${id}`),
      api.get(`/items/${id}/description`),
    ]);
    if (!product) {
      return res.status(401).json({ error: 'This is not exists' });
    }
    if (!description) {
      return res.status(401).json({ error: 'This is not exists' });
    }
    const {
      category_id,
      title,
      price,
      currency_id,
      available_quantity,
      pictures,
      condition,
      shipping: { free_shipping },
      sold_quantity,
    } = product.data;
    const { plain_text } = description.data;
    const picture = pictures[0].url;
    return res.json({
      author,
      items: {
        id: category_id,
        title,
        price: {
          currency: currency_id,
          amount: available_quantity,
          decimals: price,
        },
        picture,
        condition,
        free_shipping,
        sold_quantity,
        description: plain_text,
      },
    });
  }
}
export default new ItemsController();
