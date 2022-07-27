package dev.sbraitsch.venari.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("v1/hunts")
@CrossOrigin
class HuntController {

    val hunts = listOf("Nothin", "To", "See", "Yet.")

    @GetMapping
    fun getAllHunts() : List<String> {
        return hunts
    }
}