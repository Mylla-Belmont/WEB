var express = require('express');
var router = express.Router();
var pokemonService = require("../services/Pokemon.services")

router.get('/', function (req, res, next) {
    res.json({ users: [{ name: 'Timmy' }] });
});

router.get(
    "/list"
    ,
    (req, res, next) => {
        res.json(pokemonService.list())
    }
)

router.post(
    "/register"
    ,
    (req, res, next) => {
        const pokemon = pokemonService.resgiter(req.body)
        res.json(pokemon)
    }
)

router.put(
    "/update/:id"
    ,
    (req, res, next) => {
        const pokemon = pokemonService.update(req.params.id, req.body)
        res.json(pokemon)
    }
)

router.delete(
    "/delete/:id"
    ,
    function (req, res, next) {
        const ok = userService.delete(req.params.id);
        if (ok) return res.json({ "sucess": true });
        else return res.json({ "sucess": false });
    }
)

router.get(
    "/retrieve/:id"
    ,
    function (req, res, next) {
        const out = pokemonService.retrieve(req.params.id);
        return res.json(out);
    }
)

module.exports = router;
