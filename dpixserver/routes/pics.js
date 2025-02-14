const { apiDecorator, getSession } = require('../tools')

const {
    shortGroupInfo
} = require("../../api");

module.exports = async (fastify, options) => {


    fastify.get("/pics/shortGroupInfo", apiDecorator(async ({ query, session }) =>
        query.ids &&
        ({
            ok: true,
            data: await shortGroupInfo({
                ids: query.ids.split(","),
                session,
            })
        })
        , getSession))

}