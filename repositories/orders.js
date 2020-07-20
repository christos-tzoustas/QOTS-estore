const Repository = require('./repository');

class OrdersRepository extends Repository {
	async create(attrs) {
		const records = await this.getAll();
		records.push(attrs);

		await this.writeAll(records);

		return attrs;
	}
	async update(orderId, attrs) {
		const records = await this.getAll();
		const record = records.find((record) => record.orderId === orderId);

		if (!record) {
			throw new Error(`Could not find record with id ${orderId}`);
		}

		Object.assign(record, attrs);
		await this.writeAll(records);
	}

	async getOne(orderId) {
		const records = await this.getAll();
		return records.find((record) => record.orderId === orderId);
	}
}

module.exports = new OrdersRepository('orders.json');
