# Project Name

> A General sales and checkout portion for the product on the page.

## Related Projects

  - https://github.com/iron-people-fec/similar-items
  - https://github.com/iron-people-fec/review-section
  - https://github.com/iron-people-fec/product_images

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Run `npm install`
> Run `mysql -u root < path/to/schema.sql` to create the database
> Run `npm seed` to seed the database with seeding data
> Run `npm build` to create the bundle.js file 
> Run `npm watch` to create and update bundle.js when there is a change
> Run `npm start` to start the server
> Run `npm dev-start` to start the server with nodemon to watch and update with changes

> My app's GET request will be `/product/:id` where `:id` is the unique integar that correspond to the item's key in the database.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```
npm install
```

