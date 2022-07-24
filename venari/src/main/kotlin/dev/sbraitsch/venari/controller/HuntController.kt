package dev.sbraitsch.venari.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("v1/hunts")
class HuntController {

    val hunts = listOf("30th", "Sugma", "Troy", "Amber Room")

    @GetMapping
    fun getAllHunts() : List<String> {
        return hunts
    }
}