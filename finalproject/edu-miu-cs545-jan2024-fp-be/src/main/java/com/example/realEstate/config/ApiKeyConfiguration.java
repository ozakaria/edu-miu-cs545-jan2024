package com.example.realEstate.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:grid.properties")
public class ApiKeyConfiguration {

    @Value("${sendgrid.api-key}")
    private String apiKey;

    @Bean
    public String getApiKey() {
        return apiKey;
    }
}
