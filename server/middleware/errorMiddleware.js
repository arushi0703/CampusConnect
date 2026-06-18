const errorMiddleware = (
    error,
    req,
    res,
    next
) => {

    console.error(error)

    const statusCode =
    res.statusCode && res.statusCode !== 200
    ?
    res.statusCode
    :
    500

    res.status(statusCode).json({

        success:false,

        message:error.message || "Server Error"

    })

}

module.exports = errorMiddleware