module.exports = (botctx) => {

    require("./chooseLang")(botctx)

    require("./pic")(botctx)
    require("./global")(botctx)
    require("./nav")(botctx)
    require("./controls")(botctx)
    require("./similar")(botctx)
    require("./settings")(botctx)
    require("./channel")(botctx)

}