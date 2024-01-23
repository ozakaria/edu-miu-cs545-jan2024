package miu.waa.lab.controller;

import miu.waa.lab.dto.request.LoginRequest;
import miu.waa.lab.dto.request.RefreshTokenRequest;
import miu.waa.lab.dto.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import miu.waa.lab.service.AuthService;

@RestController
@RequestMapping("/authenticate")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {

    private final AuthService authService;
    @Autowired
    private PasswordEncoder bcryptEncoder;

    public String encodeData(String data) {
        return bcryptEncoder.encode(data);
    }

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        var loginResponse = authService.login(loginRequest);
        return new ResponseEntity<LoginResponse>(loginResponse, HttpStatus.OK);
    }

//    @PostMapping("/refreshToken")
//    public LoginResponse refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest) {
//        return authService.refreshToken(refreshTokenRequest);
//    }

}
