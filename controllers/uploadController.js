const uploadController = {
    save: function (req,res) {
          
        // console.log(req.file.originalname)
        res.redirect("/createpost")
    }
}

module.exports = uploadController
