exports.apiDecorator = (func, patch) => async (request, reply) => {
    try {
        const update = patch && patch(request, reply)
        if (update || !patch) {
            const resp = await func(Object.assign(request, update || {}), reply)
            if (resp) {
                return resp
            }
        }
        return { ok: false }
    } catch {
        return { ok: false }
    }
}

exports.getSession = (request) => ({ session: request.headers.token });