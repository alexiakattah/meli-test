import api from '../services/api';

class SearchController {
  async index(req, res) {
    const author = {
      name: 'Alexia',
      lastname: 'Kattah',
    };
    const search = req.query.search;

    const q = await api.get(`/sites/MLA/search?q=${search}&limit=4`);

    if (!q) {
      return res.status(401).json({ error: 'Search not products' });
    }

    const { results } = q.data;
    const items = results.map((r, index) => {
      return {
        id: r.id,
        title: r.title,
        price: {
          currency: r.currency_id,
          amount: r.amount,
          decimals: r.price,
        },
        picture: r.thumbnail,
        condition: r.condition,
        free_shipping: r.shipping.free_shipping,
      };
    });

    return res.json(items);
  }
}

export default new SearchController();
