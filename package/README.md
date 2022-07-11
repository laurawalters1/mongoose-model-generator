Run the following command in the server directory to generate a template mern model (replace 'User' with your model name)

```javascript
npm run create:model -name=User
```

The file will be located in the models folder, if a models folder does not already exist, one will be created
<br>
<br>
Output:

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
