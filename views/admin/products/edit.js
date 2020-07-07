const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors, product }) => {
	return layout({
		content: `
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="subtitle">Edit a Product</h1>

          <form method="POST" enctype="multipart/form-data">
            <div class="field">
              <label class="label">Title</label>
              <input class="input" placeholder="Title" name="title" value="${product.title}">
              <p class="help is-danger">${getError(errors, 'title')}</p>
            </div>
            
            <div class="field">
            <label class="label">Description</label>
            <input class="input" placeholder="Description" name="description" value="${product.description}">
            <p class="help is-danger">${getError(errors, 'description')}</p>
            </div>

            <div class="field">
              <label class="label">Price</label>
              <input class="input" placeholder="Price" name="price" value="${product.price}">
              <p class="help is-danger">${getError(errors, 'price')}</p>
            </div>
            
            <div class="field">
              <label class="label">Image</label>            
              <input type="file" name="image" />
            </div>
            <br />
            <button class="button is-primary">Edit</button>
          </form>
        </div>
      </div>
    `
	});
};
