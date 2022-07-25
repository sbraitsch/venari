package dev.sbraitsch.venari.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.Customizer
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.web.SecurityFilterChain

@Configuration
class VenariSecurityConfiguration {

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        http.authorizeHttpRequests {
                auth -> auth.mvcMatchers("/v1/**").permitAll() }
            .httpBasic(Customizer.withDefaults())
        return http.build()
    }
}