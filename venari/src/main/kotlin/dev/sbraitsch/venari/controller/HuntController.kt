package dev.sbraitsch.venari.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("v1/hunts")
@CrossOrigin(origins = ["http://localhost:5173", "http://localhost:3000"])
class HuntController {

    val hunts = listOf("30th", "Sugma", "Troy", "Amber Room")

    @GetMapping
    fun getAllHunts() : List<String> {
        return hunts
    }
}