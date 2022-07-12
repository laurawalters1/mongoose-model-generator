## Installation

Install at the server level:

```javascript
npm i mongoose-model-templates
```

## Usage

Run the following command in the server directory to generate a template mongoose model (replace 'User' with your model name)

```javascript
npm run create:model -name=User
```

The file will be located in the models folder, if a models folder does not already exist, one will be created
<br>
<br>

## Flags

Provided your index.js file takes the following format

```javascript
const Post = require("./Post");
const Comment = require("./Comment");

module.exports = {
	Post,
	Comment,
};
```

You can add also the 'x' flag for model exports to be automatically added to your models/index.js

```javascript
npm run create:model -name=User -x
```

## Output:

User.js:

```javascript
const { Schema, model } = require("mongoose");

const moment = require("moment");

const userSchema = new Schema(
	{
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

const User = model("User", userSchema);

module.exports = User;
```

index.js:

```javascript
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

module.exports = {
	Post,
	Comment,
	User,
};
```
