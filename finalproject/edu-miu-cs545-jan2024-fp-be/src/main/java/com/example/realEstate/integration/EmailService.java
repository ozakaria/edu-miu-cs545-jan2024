package com.example.realEstate.integration;

import java.io.IOException;

public interface EmailService {

    public void sendEmail(String to_address, String subject, String body) throws IOException;
    public void sendWelcomeEmail(String to_address) throws IOException;
}

