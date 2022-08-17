"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
require('express-async-errors');
var _router = require('./router');
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
const app = _express2.default.call(void 0, );

app.use(_express2.default.json())
app.use(_cors2.default.call(void 0, ));
app.use( _router.routes )

app.use((err, request, response, next)=>{
    if(err instanceof Error) {
        return response.status(400).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.listen(3333,() => console.log('Server is load'))