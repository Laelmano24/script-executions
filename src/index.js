import express from "express"
import { fileURLToPath } from "url"
import { join, dirname } from "path"
import { readFileSync } from "fs"
import uptadeViews from "./models/uptadeViews.js"
import getOrCreateViews from "./models/getViews.js"
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(join(__dirname, "front-end")))

app.get("/script/loader", async (req, res) => {

    try {

        const script = readFileSync(join(__dirname, "scripts", "main.luau"), "utf-8")
        if (!script) return res.status(404).json({status: 404, message: "The script does not exist in the folder"})
        await uptadeViews()
        res.setHeader("Content-type", "text/plain")
        res.status(200).send(script)
        

    } catch (err) {
        console.log("Erro in server\n" + err)
        return res.status(500).json({status: 500, erro: err})
    }

})

app.get("/show-views", async (req, res) => {

    try {

        const getViews = await getOrCreateViews()
        res.status(200).json({status: 200, views: getViews})
        
    } catch (err) {
        console.log("Erro in server\n" + err)
        return res.status(500).json({status: 500, erro: err})
    }

})

app.listen(3000, () => {
    console.log("Server on")
})
